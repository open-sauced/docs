---
title: "Using Kubernetes jobs to scale OpenSSF Scorecard"
tags: ["open source security foundation", "openssf", "openssf scorecard", "open source", "open source compliance", "open source security", "kubernetes", "kubernetes jobs"]
authors: jpmcb
slug: ossf-scorecard-technical-deep-dive
description: "Learn how OpenSauced uses Kubernetes to scale the OpenSSF Scorecard."
unlisted: true
---

We recently released integrations with the [OpenSSF Scorecard on the OpenSauced platform](https://opensauced.pizza/blog/introducing-ossf-scorecard).
The OpenSSF Scorecard is a powerful Go command line interface that anyone can use
to begin understanding the security of their projects and dependencies. It runs
several checks for dangerous workflows, CICD best practices, if the project is
still maintained, and much more. This enables software builders and consumers to
understand their security posture, deduce if a project is safe to use, and where
improvements to security practices need to be made.

<!-- truncate -->

But one of our goals with integrating the OpenSSF Scorecard into the OpenSauced
platform was to make this available to the broader open source ecosystem at large.
If it’s a repository on GitHub, we wanted to be able to display a score for it.
This meant scaling the Scorecard CLI to target nearly any repository on GitHub.
Much easier said than done!

In this blog post, let’s dive into how we did that using Kubernetes and what technical
decisions we made with implementing this integration.

## Technical decisions

We knew that we would need to build a cron type microservice that would frequently
update scores across a myriad of repositories: the true question was how we would
do that. It wouldn't make sense to run the scorecard CLI ad-hoc: the platform could
too easily get overwhelmed and we wanted to be able to do deeper analysis on scores
across the open source ecosystem, even if the OpenSauced repo page hasn’t been
visited recently. Initially, we looked at using the Scorecard Go library as direct
dependent code and running scorecard checks within a single, monolithic microservice.
We also considered using serverless jobs to run one off scorecard containers that
would give back the results for individual repositories.

The approach we ended up landing on, which marries simplicity, flexibility, and
power, is to use Kubernetes Jobs at scale, all managed by a “scheduler” Kubernetes
controller microservice. Instead of building a deeper code integration with scorecard,
running one off Kubernetes Jobs gives us the same benefits of using a serverless approach,
but with reduced cost since we’re managing it all directly on our Kubernetes cluster.
Jobs also offer alot of flexibility in how they run: they can have long, extended
timeouts, they can use disk, and like any other Kubernetes paradigm, they can have
multiple pods doing different tasks. 

Let’s break down the individual components of this system and see how they work
in depth:

## Building the Kubernetes controller

The first and biggest part of this system is the “scorecard-k8s-scheduler”; a Kubernetes
controller-like microservice that kicks off new jobs on-cluster. While this microservice
follows many of the principles, patterns, and methods used when building a traditional
Kubernetes controller or operator, it does not watch for or mutate custom resources 
on the cluster. Its function is to simply kick off Kubernetes Jobs that run the Scorecard
CLI and gather finished job results.

Let’s look first at the main control loop in the Go code. This microservice uses
the Kubernetes Client-Go library to interface directly with the cluster the microservice
is running on: this is often referred to as an on-cluster config and client. Within
the code, after bootstrapping an on-cluster config and client, we poll for repositories
in our database that need updating. Once some repos are found, we kick off Kubernetes
jobs on individual worker “threads” that will wait for each job to finish.

```go
// buffered channel, sort of like semaphores, for threaded working
sem := make(chan bool, numConcurrentJobs)

// continuous control loop
for {
    // blocks on getting semaphore off buffered channel
    sem <- true

    go func() {
        // release the hold on the channel for this Go routine when done
        defer func() {
            <-sem
        }()

        // grab repo needing update, start scorecard Kubernetes Job on-cluster,
        // wait for results, etc. etc.

        // sleep the configured amount of time to relieve backpressure
        time.Sleep(backoff)
    }()
}
```

This “infinite control loop” method, with a buffered channel, is a common way in
Go to continuously do something but only using a configured number of threads.
The number of concurrent Go funcs that are running at any one given time depends
on what configured value the “numConcurrentJobs” variable has. This sets up the
buffered channel to act as a worker pool or semaphore which denotes the number of
concurrent Go funcs running at any one given time. Since the buffered channel is
a shared resource that all threads can use and inspect, I often like to think of
this as a semaphore: a resource, much like a mutex, that multiple threads can attempt
to lock on and access. In our production environment, we’ve scaled the number of
threads in this scheduler all running at once. Since the actual scheduler isn’t
very computationally heavy and will just kick off jobs and wait for results to eventually
surface, we can push the envelope of what this scheduler can manage. We also have
a built-in backoff system that attempts to relieve pressure when needed: this system
will increment the configured “backoff” value if there are errors or if there are
no repos found to go calculate the score for. This ensures we’re not continuously
slamming our database with queries and the scorecard scheduler itself can remain
in a “waiting” state, not taking up precious compute resources on the cluster.

Within the control loop, we do a few things: first, we query our database for repositories
needing their scorecard updated. This is a simple database query that is based on
some timestamp metadata we watch for and have indexes on. Once a configured amount
of time passes since the last score was calculated for a repo, it will bubble up
to be crunched by a Kubernetes Job running the Scorecard CLI.

## Kicking off Scorecard jobs

Next, once we have a repo to get the score for, we kick off a Kubernetes Job using
the “gcr.io/openssf/scorecard” image. Bootstrapping this job in Go code using Client-Go
looks very similar to how it would look with yaml, just using the various libraries
and apis available via “k8s.io” imports and doing it programmatically:

```go
// defines the Kubernetes Job and its spec
job := &batchv1.Job{
	// structs and details for the actual Job including metav1.ObjectMeta and batchv1.JobSpec
}

// create the actual Job on cluster using the in-cluster config and client
return s.clientset.BatchV1().Jobs(ScorecardNamespace).Create(ctx, job, metav1.CreateOptions{})
```

After the job is created, we wait for it to signal it has completed or errored.
Much like with kubectl, Client-Go offers a helpful way to “watch” resources and
observe their state when they change:

```go
// watch selector for the job name on cluster
watch, err := s.clientset.BatchV1().Jobs(ScorecardNamespace).Watch(ctx, metav1.ListOptions{
    FieldSelector: "metadata.name=" + jobName,
})

// continuously pop off the watch results channel for job status
for event := range watch.ResultChan() {
    	// wait for job success, error, or other states
}
```

Finally, once we have a successful job completion, we can grab the results from
the Job’s pod logs which will have the actual json results from the scorecard
CLI! Once we have those results, we can upsert the scores back into the database
and mutate any necessary metadata to signal to our other microservices or the
OpenSauced API that there’s a new score!

As mentioned before, the scorecard-k8s-scheduler can have any number of concurrent
jobs running at once: in our production setting we have a large number of jobs running
at once, all managed by this microservice. The intent is to be able to update scores
every 2 weeks across all repositories on GitHub. With this kind of scale, we hope
to be able to provide powerful tooling and insights to any open source maintainer
or consumer!

## Role-based access control

The “scheduler” microservice ends up being a small part of this whole system: anyone
familiar with Kubernetes controllers knows that there are additional pieces of Kubernetes
infrastructure that are needed to make the system work. In our case, we needed some
role-based access control (RBAC) to enable our microservice to create Jobs on the cluster.

First, we need a service account: this is the account that will be used by the
scheduler and have access controls bound to it:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: scorecard-sa
  namespace: scorecard-ns
```

We place this service account in our “scorecard-ns” namespace where all this runs.

Next, we need to have a role and role binding for the service account. This includes
the actual access controls (including being able to create Jobs, view pod logs, etc.)

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: scorecard-scheduler-role
  namespace: scorecard-ns
rules:
- apiGroups: ["batch"]
  resources: ["jobs"]
  verbs: ["create", "delete", "get", "list", "watch", "patch", "update"]
- apiGroups: [""]
  resources: ["pods", "pods/log"]
  verbs: ["get", "list", "watch"]

---

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: scorecard-scheduler-role-binding
  namespace: scorecard-ns
subjects:
- kind: ServiceAccount
  name: scorecard-sa
  namespace: scorecard-ns
roleRef:
  kind: Role
  name: scorecard-scheduler-role
  apiGroup: rbac.authorization.k8s.io
```

You might be asking yourself “Why do I need to give this service account access
to get pods and pod logs? Isn’t that an over extension of the access controls?”
Remember! Jobs have pods and in order to get the pod logs that have the actual
results of the scorecard CLI, we must be able to list the pods from a job and then
read their logs!

The second part of this, the “RoleBinding”, is where we actually attach the Role
to the service account. This service account can then be used when kicking off
new jobs on the cluster.

All in all, this architecture allows us to use the flexibility and power of serverless like setups,
but it still takes advantage of the cost savings and existing infrastructure we have
with Kubernetes. Using existing paradigms and components can be a great way to unlock
existing capabilities you already have within your platform of choice!

Huge shout out to [Alex Ellis](https://github.com/alexellis) and his excellent [run-job controller](https://github.com/alexellis/run-job):
this was a huge inspiration and reference for correctly using Client-Go with Jobs!

Stay saucy!
