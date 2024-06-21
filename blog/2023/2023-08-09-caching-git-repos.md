---
title: "Caching Git Repos: A Deep Dive into OpenSauced's 'Pizza Oven' Service"
tags: ["go", "opensource", "programming", "datastructures"]
authors: jpmcb
slug: caching-git-repos
description: "A deep dive understanding of how we utilize a LRU cache for fast querying of Git repos"
---

Over the last few weeks, the OpenSauced engineering team has been building a service we're calling the [“pizza oven.”](https://github.com/open-sauced/pizza) This service indexes commits within bespoke git repositories and can be used to generate insights based on those commits. This all gives us the ability to create interesting metrics around open source project velocity, “time to merge”, the who’s who of contributors, and more; all by indexing and parsing the git commits! We’ve been experimenting with many different models and have created an interesting solution for increased performance and availability of the service.

<!-- truncate -->

Initially, as a proof of concept, in order to index individual commits in a git repo, the pizza oven would do the most basic thing: clone the repo directly into memory and parse through all of its commits, inserting new commits into a configured database.

The hot path on the server would include this Go code which clones the git repo directly into memory:

```go
inMemRepo, err := git.Clone(memory.NewStorage(), nil, &git.CloneOptions{
   URL:      	URL,
   SingleBranch: true,
})
```

But there’s an obvious performance bottleneck: git cloning repos can be very slow. A single large git repository can contain tens of thousands, if not hundreds of thousands of objects that need to be fetched from a remote source and uncompressed. Further, re-cloning and re-parsing the git repo every time it is queried from the service is an exhaustive waste of compute resources, especially if there are already existing commits that have been indexed. And finally, this service would need to be supported by compute instances with significant amounts of expensive volatile memory in order to clone many different repos concurrently at scale.

There has to be a better way!

Enter the LRU cache: an efficient way to keep frequently queried items readily available for processing without having to always rebuild the in-memory data structures. An LRU cache is a “Least Recently Used” cache that evicts items that have not been processed or “hit” recently.

You can sort of think of it like a “priority” queue where the members of the queue are bumped to the front of the line whenever they are called upon. But members of the queue that fall to the back of the line eventually get evicted based on certain constraints. For a very basic example, if an LRU cache can only be 10 members long, whenever a new entry arrives, it is immediately put to the front of the queue and the last member is evicted if the size now surpasses 10.

More practically speaking, an LRU cache is implemented with two common data structures: a doubly linked list and a hashmap. The hashmap keeps a fast record of key / value pairs within the cache and the doubly linked list tracks the “positioning” of each item within the cache. Using both of these, you can efficiently create a system where items in the hashmap can be quickly retrieved and positioning is determined by the front and back of the doubly linked list.

In Go, we can use the standard library `list.List` as the doubly linked list and the typically `map` as the hashmap:

```go
type GitRepoLRUCache struct {
	// a doubly linked list to support the LRU cache behavior
	dll *list.List

	// a hashmap to support the LRU cache behavior
	hm map[string]*list.Element
}
```

The "Element" in this implementation of an LRU cache can really be anything you want. In our case, we decided to track git repositories on disk that have already been cloned. This gets around the constraint of having large chunks of memory used up through cloning directly into memory. Instead, we can index repos already on disk or clone new ones as requests come in.

For this, we created the `GitRepoFilePath` struct that denotes a key/value pair which points to a filepath on disk where the repo has already been cloned.

```go
type GitRepoFilePath struct {
    // The key for the GitRepoFilePath key/value pair
    // generally, is the remote URL for the git 
    // repository
    key string

    // path is the value in the GitRepoFilePath
    // key/value and denotes the filepath
    // on-disk to the cloned git repository
    path string
}
```

Using the LRU cache, its data structures, and the `GitRepoFilePath` as the "Elements" in the cache, frequently used git repos on disk can be easily, cleanly, and efficiently updated without having to re-clone them.

Typically, there are two methods that make up an LRU cache’s API: “Get” and “Put”. Both may be obvious, but “Get” returns a member from the cache based on its key, placing that returned item to the front of the doubly linked list. If the queried key in the cache is not present, “Get” returns a nil Element:

```go
func (c *GitRepoLRUCache) Get(key string) *GitRepoFilePath
```

“Put” is abit more complicated and is where alot of the magic ends up happening: when a key/value pair are “Put” to the cache, first the cache must evict members based on its criteria.

But what sort of eviction criteria makes sense for a cache of git repositories? Well, with a service that caches git repos onto disk, the obvious metric to track is “free space" on that disk. Someone deploying this service can configure the amount of free disk they anticipate always needing to be available and can also configure the specific directory they want to use as the cache on the system. This provides a nice buffer to prevent the disk from completely filling up and potentially causing its own problems.

During "Put", when cloning a new repo and putting it into the cache, if the amount of used disk surpasses the configured "free disk" space, the LRU cache will evict repos and delete them from the disk. This process continues until the configured "free disk" is less than the actual amount of free disk space at the designated cache path.

In the Go code, this is what the function signature ends up looking like:

```go
func (c *GitRepoLRUCache) Put(key string) (*GitRepoFilePath, error)
```

This all works really well in a single threaded model, but sort of falls apart when you need to concurrently serve many different requests. What happens when a request comes in for the same repo at the same time? How can the cache handle multiple requests at the same time?

With a few tweaks and modifications, we can make this cache implementation thread safe!

First, we need to enable cache operations to be atomic. We can do this by adding a mutex lock to the cache itself:

```go
type GitRepoLRUCache struct {
    // A locking mutex for atomic operations
    lock sync.Mutex

    // a doubly linked list to support the LRU cache behavior
    dll *list.List

    // a hashmap to support the LRU cache behavior
    hm map[string]*list.Element
}
```

This mutex on the cache can then be locked and unlocked during atomic cache operations.

Let's look at the "Get" method for how this all works. When "Get" is called, the cache's mutex is locked, allowing operations to continue. This call to `c.lock.Lock()` will block until the mutex is in an unlocked state which indicates other threads are done operating on the cache:

```go
func (c *GitRepoLRUCache) Get(key string) *GitRepoFilePath {
    // Lock (and unlock when done) the cache's mutex
    c.lock.Lock()
    defer c.lock.Unlock()

    if element, ok := c.hm[key]; ok {
        // Cache hit
        c.dll.MoveToFront(element)
        return element.Value.(*GitRepoFilePath)
    }

    // Cache miss
    return nil
}
```

The `defer c.lock.Unlock()` is a nice way in Go of making sure that the mutex is always unlocked before this function scope closes. The worst thing possible here is if a dead-lock occurs where a thread never unlocks the cache's mutex and no other threads can then operate on the cache, hanging when they call `c.lock.Lock()`.

This ensures that the cache itself is thread safe, but what about the individual elements within the cache? If cache operations themselves are really fast, isn't there a possibility that an Element could be evicted before its git operations have completed? Eviction of an element during processing of git commits would be really bad since this entails removing the git repo from disk entirely which would cause an unrecoverable state of the indexed commits.

One solution would be to just extend the cache's mutex to not unlock until processing on individual elements has finished. But the astute concurrent programmer will see that this returns the cache to a single threaded data structure without any real ability to do concurrent operations.

Instead, the individual `GitRepoFilePath` elements can also have a locking mutex:

```go
type GitRepoFilePath struct {
    // Locking mutex for atomic file operations
    lock sync.Mutex

    // The key for the GitRepoFilePath key/value pair
    // generally, is the remote URL for the git 
    // repository
    key string

    // path is the value in the GitRepoFilePath
    // key/value and denotes the filepath
    // on-disk to the cloned git repository
    path string
}
```

Now, when elements are returned from the cache operations, they themselves can be locked to prevent deadlocks or removal before they have finished processing. Let's look at the "Get" method again to see how it works with locking the individual element when a cache hit occurs:

```go
func (c *GitRepoLRUCache) Get(key string) *GitRepoFilePath {
	// Lock (and unlock when done) the cache's mutex
    c.lock.Lock()
    defer c.lock.Unlock()

    if element, ok := c.hm[key]; ok {
        // Cache hit
        c.dll.MoveToFront(element)

        // Lock the git repo filepath element
        element.Value.(*GitRepoFilePath).lock.Lock()
        return element.Value.(*GitRepoFilePath)
    }

    // Cache miss
    return nil
}
```

Notice that the queried element is locked before it is returned. Then, latter, after the caller has finished processing the returned `GitRepoFilePath`, they can call the `Done` method. This is a  simple, thin wrapper around unlocking the mutex but ensures that any consumer of a `GitRepoFilePath` can “clean up” their state once processing has finished.

```go
func (g *GitRepoFilePath) Done() {
    g.lock.Unlock()
}
```

A similar structuring of locking and unlocking these mutexes in "Put" and during the eviction process, all working together, allows for the cache and its elements to be thread safe and concurrently operated on.

At scale, using this LRU caching method, we can prevent the re-cloning of frequently queried git repos and speed up the service drastically. Make sure to check out  the open source code for this service and all the details on this implementation of an LRU cache!

https://github.com/open-sauced/pizza

Stay Saucy! 🍕
