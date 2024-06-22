---
title: "How we made our Go microservice 24x faster"
tags: ["go", "opensource", "programming", "postgres"]
authors: jpmcb
slug: how-we-made-our-go-microservice-24x-faster
description: "Using Postgres batching strategies for extreme optimization in Go services"
---

As data intensive backend applications scale and grow, with larger data sets scaled out to higher availability, performance bottlenecks can quickly become major hurdles. Processing requests that once took mere milliseconds can suddenly become multi-minute problems.

In this blog post, let’s take a look at some recent optimization strategies the OpenSauced pizza micro-service recently underwent. This backend service is a Go server that processes git commits by request, sometimes processing thousands of commits in one single request. You can almost think of it as a real time batch processor that can be called by arbitrary clients to fetch and process git commits within an agnostic git repo.

These commits eventually are all indexed within a Postgres database. Most of these optimizations revolve around “batching” the Postgres calls instead of going one by one.
For simplicity in our examples, we’ll be using an arbitrary table called “my_table” with data that fits into the “my_data” column. Let’s dive in and take a look at how we can optimize!

<!-- truncate -->

### Some setup first

Before we can go too much further, let’s make sure the database connection is bootstrapped correctly:

```go
import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func main() {
	// In a real world scenario, use good password handling practices
	// to handle connecting to the Postgres cluster!
	connectString := "host=my_host port=54321 user=my_postgres_user sslmode=require"

	// Acquire the *sql.DB instance
	db, err := sql.Open("postgres", connectString)
	if err != nil {
		log.Fatalf("Could not open database connection: %s", err)
	}

	// ping once to ensure the database connection is working
	err = db.Ping()
	if err != nil {
		log.Fatalf("Could not ping database: %s", err)
	}
}
```

This little bit of Go code sets up our Postgres connection and makes a single Ping to the database to ensure that everything is setup correctly. Now, we have a working db instance which in itself has many connection pools abstracted away that make concurrently querying and writing to a database a breeze. We don’t have to manage those connection pools ourselves; we get all that for free through the magic of Go’s pq library!

### The brute force approach

When first written, the `pizza` micro-service would process each individual piece of data one row at a time. Here’s a very arbitrary example that demonstrates inserting data values one at a time into a Postgres database:

```go
for _, v := range data {
	err := db.Exec("INSERT INTO my_table(my_data) VALUES($1)", v)
}
```

This is essentially a raw, brute force approach.

Round trip inserts into the database for all data members becomes an O(n) operation, which, depending on network latency and the power of your Postgres database, can quickly become a massive bottleneck. Even on a `localhost` network where network latency can generally be ignored, with a hunk of data containing many thousands of entries, these inserts can take several milliseconds each which adds up very quickly.

### Just make it parallel!?

In theory, if you never really needed to handle conflicts within the database or elegantly surface errors, making the whole process parallel may work just fine:

```go
for _, v := range data {
	go func(d string) {
		db.Exec("INSERT INTO my_table(my_data) VALUES($1)", d)
	}(v)
}
```

Here we are doing the same thing as the brute force approach but we’re firing off a new thread each time via a Go routine.
While you may see marginal performance improvements (depending on the system and the number of cores in the machine’s processor that correspond to the number of possible threads going at once), this still requires O(n) inserts into the database and can quickly throttle the pool of connections available in the `*sql.DB` we are using. And again, this doesn’t do a great job of handling multiple inserts that may conflict and ignores errors entirely. In other words, going with a parallel solution may seem like the ideal quickfix, but in reality, it may create more problems down the road.
So, generally, this approach isn’t recommended.

### Using `CopyIn`

Thankfully, Postgres and the pq library offer powerful “transaction” paradigms that make it easy to batch massive sets of data all at once. If this was raw SQL, we’d be using the COPY FROM keywords to mass drop in data from a “file” directly into a table. All in one statement. Go’s pq library abstracts all that using the `CopyIn` method and allows for large batching operations.

Let’s take a quick look at how you would implement this and how it works:

```go
// Start a psql transaction.
txn, err := p.db.Begin()
if err != nil {
		log.Fatalf("Could not start psql transaction: %s", err.Error())
}

// Make a "statement" to use for the psql transaction. The "CopyIn" takes
// our table name and the columns we are coping into.
//
// The error handling will rollback the transaction if there's a
// problem with preparing the statement.
stmt, err := txn.Prepare(pq.CopyIn("my_table", "my_data"))
if err != nil {
	txn.Rollback()
	log.Fatalf("Could not prepare psql statement: %s", err.Error())
}

// Iterate the data and add the data to the psql statement
for _, v := range data {
	err := stmt.Exec(v)
      if err != nil {
	    log.Fatalf("Could not execute the statement: %s", err.Error())
      }
}

// Execute, commit, and close the transaction
err = stmt.Close()
if err != nil {
	log.Fatalf("Could not close the psql statement: %s", err.Error())
}

err = txn.Commit()
if err != nil {
	log.Fatalf("Could not commit the psql transaction: %s", err.Error())
}
```

All in all, this takes our number of round trips to the database from O(n) to just O(1) with a constant, predictable number of Postgres statements that will be executed. Much more efficient!

What about conflicts with unique constraints?
Taking all the data wholesale works fine if you can be relatively assured that there won’t ever be conflicts within it. But as soon as one of the rows you’re copying into has a unique identifier or some other unique constraint, you’ll run into major problems. For example, let’s say we’re processing a batch of emails and those emails being inserted into the database should all be unique: the above approach will fail as soon as a duplicate email is processed.

Unfortunately, the CopyIn approach we’re using doesn’t have a way to handle conflicts directly. We need a different way:
Enter the temporary table! Postgres offers a pretty powerful way to take a temporary table and pivot it into your real data tables, all while giving you the ability to handle conflicts. We’ll use a similar approach as above, but instead of adding everything to the real my_table, we’ll first create a temporary table to insert the data into:

```go
tmpTableName := "my_tmp_table"

// Create a temporary table and use the real table as a template.
// "WHERE 1=0" is a trick to select no rows in psql but still copy 1 for 1
// all the data column types and names from the real table.
_, err := p.db.Exec(fmt.Sprintf("CREATE TEMPORARY TABLE %s AS SELECT * FROM my_table WHERE 1=0", tmpTableName))


if err != nil {
	log.Fatalf("Could not create temporary table: %s", err.Error())
}
```

Now that we have a temporary table, we can use that in our CopyIn to do a mass insert:

```go
// Start a psql transaction.
txn, err := p.db.Begin()
if err != nil {
		log.Fatalf("Could not start psql transaction: %s", err.Error())
}

// Make a "statement" to use for the psql transaction.
// Notice the "my_tmp_table" as the table name
stmt, err := txn.Prepare(pq.CopyIn("my_tmp_table", "my_data"))
if err != nil {
	txn.Rollback()
	log.Fatalf("Could not prepare psql statement: %s", err.Error())
}

// Iterate the data, add the data to the psql statement
for _, v := range data {
	err := stmt.Exec(v)
}

// Execute, commit, and close the transaction
err = stmt.Close()
if err != nil {
	log.Fatalf("Could not close the psql statement: %s", err.Error())
}

err = txn.Commit()
if err != nil {
	log.Fatalf("Could not commit the psql transaction: %s", err.Error())
}
```

At this point, our temporary table has all the data: the table was created, the statement prepared, each data item added to the statement, and the transaction was committed.
Now, we can attempt to pivot the data from the temporary table into the real table, handling conflicts along the way:

```go
_, err := p.db.Exec(`
	INSERT INTO my_table(my_data)
	SELECT my_data FROM my_tmp_table
	ON CONFLICT (my_data)
	DO NOTHING
`)
if err != nil {
	log.Fatalf("Could not pivot temporary table data: %s", err.Error())
}

// Drop the temporary table now that we're done pivoting the data
_, err = p.db.Exec(fmt.Sprintf("DROP TABLE %s", tmpTableName))
if err != nil {
	log.Fatalf("Could not drop temporary table: %s", err.Error())
}
```

In our example here, we use the temporary table’s data to mass insert into the real table. We avoid conflicts by doing nothing, dropping the conflicting data point. In a real world circumstance, you may want to do something with that data: the `ON CONFLICT` handler is really powerful and there’s alot of stuff you can do with it in psql.

### Table name clashes

If you’re running the temporary table pivot on a server that handles many requests at scale concurrently, the obvious problem that will arise is clashes with a static temporary table name. Since we create the temporary table upon request and then drop it once we’re done, other threads may still be using it for operations of their own because the table name is not unique.

There are alot of methods for handling temporary table name clashes but an arbitrary one that is a good place to get started is to use a unique identifier:

```go
rawUUID := uuid.New().String()
uuid := strings.ReplaceAll(rawUUID, "-", "")
tmpTableName := fmt.Sprintf("temp_table_%s_%d", uuid, atomic.AddInt64(&counter, 1))
```

This uses the github.com/google/uuid library to generate a UUID and replaces “-” with empty strings (since typically, dashes “-” are not valid within Postgres table names). We also combine this with a Go atomic counter (that is thread safe) in order to generate a unique table name: since these tables are short lived, individual uuid clashes are extremely unlikely, and we’re using an atomic counter to wrap it all up, the likelihood of a table name clash is nearly 0 using this basic approach.

If you’re going to horizontally scale out your service to many additional instances, it may be advantageous to develop an orchestration method to ensure there are no conflicts with temporary table names across your scaled deployment.

Overall, using batch inserts and table pivots in Postgres are a really powerful way to optimize your Go backends. Compared to the arbitrary, brute force approach, we found that this generally improved performance 24x. When processing a git repository with over 30,000 commits, using the standard “one by one” approach, processing would take about 1 minute. But, using the batch approach laid out above, this now only takes about 3 seconds. Wow! What an improvement!!

If you’re interested in diving in deeper on these methodologies and how we implemented them at OpenSauced, check out the original PR for this here!

https://insights.opensauced.pizza/feed/471

Stay saucy friends!!
