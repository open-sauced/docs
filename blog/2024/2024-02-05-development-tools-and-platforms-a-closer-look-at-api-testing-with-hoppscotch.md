---
title: "Development Tools and Platforms: A Closer Look at API Testing with Hoppscotch"
tags: []
authors: BekahHW
slug: development-tools-and-platforms-a-closer-look-at-api-testing-with-hoppscotch
description: "When we look closely at our APIs, we can find issues and solve them before people start using them, keeping things smooth for our users."
---

*Today is day 5 of 29 Days of Open Source Alternatives. You can find the list of most of the projects we're going to cover [here](https://oss.fyi/oss-alts). This part of the series will cover Development Tools and Platforms*

<hr/>


APIs, or Application Programming Interfaces, allow for communication between different software systems and services, forming the necessary bridge in applicates used daily in industries ranging from banking to entertainment. Because we depend on technology so much, it's important to make sure we're testing to make sure everything works.

<!-- truncate -->


API testing serves four main purposes: functionality, performance, security, and integration. Each category focuses on looking at different parts of the API to make sure it is functioning correctly under normal and extreme circumstances. Using API testing has a lot of benefits, including:

- **Enhanced System Dependability**: Checking APIs allows you to discover hidden bugs, eliminate crashes, and minimize unwanted consequences caused by incorrect implementations.
- **Optimized Performance**: Ongoing surveillance can help to identify bottlenecks and opportunities for improvement, providing better resource utilization and smoother experiences for end-users.
- **Streamlined Ecosystem Management**: Coordinated API testing encourages uniform procedures, policies, and expectations, providing a better experience for developers, testers, and teams.

Popular API testing tools include Postman, SoapUI, Paw, Advanced REST Client (ARC), and (the open source alternative) Hoppscotch.

If you're interested in testing out some other open source API tools, you can check out my [API Development Tools list](https://oss.fyi/api-tools).

## Spotlight: Hoppscotch

> Hoppscotch is a lightweight, web-based API development suite. It was built from the ground up with ease of use and accessibility in mind providing all the functionality needed for API developers with minimalist, unobtrusive UI.

Hoppscotch makes it quick and easy to test your APIs. It honestly took me under five minutes to get started with my first request. 

![testing API](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ycy5i2sc3jisgb5j4d0o.gif)

I'm fascinated by how the product has grown from postwoman to Hoppscotch. You can check out the post from @liyasthomas from almost 5 years ago:

[https://dev.to/liyasthomas/i-created-postwoman-an-online-open-source-api-request-builder-41md](https://dev.to/liyasthomas/i-created-postwoman-an-online-open-source-api-request-builder-41md)

### Hoppscotch's Features

Hoppscotch's platform allows you to test sending HTTP requests and view responses. Some of the features include:

- **Request Methods**: Supports all HTTP methods, enabling comprehensive testing scenarios.
- **Real-time Collaboration**: Share your API requests with teammates in real-time, fostering collaboration.
- **WebSocket Testing**: Offers support for WebSocket testing.
- **Authentications & Headers**: Integrate various authentication methods, including OAuth 2.0, and customize headers for detailed testing.
- **Pre-request Scripts & Tests**: Write JavaScript to execute before requests or to validate responses, mirroring the capabilities of more complex environments.

### Open Source Support

![Insight page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/relhghl5n6tn50f71v8u.png)
 <small>You can find Hoppscotch on [this insight page](https://oss.fyi/api-tools)</small>

- Stars: 58.6k
- Watching: 476
- Forks: 4.1k
- License: MIT

Just a note to say that in terms of pricing, Hoppscotch offers free (forever) Community plans as well as enterprise plans with more features and support.

### Getting Started with API Testing

Let's walk through an example. First, go to [https://hoppscotch.io/](https://hoppscotch.io/). If you haven't used it before, you'll see their default API there. 

We're going to test the OpenSauced API to get a list of featured repository insight pages. 

For the API endpoint, add:

`https://api.opensauced.pizza/v2/insights/featured`

Next, we're going to need to add some query parameters. 

Parameter 1: `page`, Value 1: `1`
Parameter 2: `limit`, Value 2: `10`
Parameter 3: `orderDirection`, Value 3: `ASC`
Parameter 4: `range`, Value 4: `30`
Parameter 5: `prev_days_start_date`, Value 5: `0`

This is what it will look like:

![hoppscotch UI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j9ws5jb6z0tz4t0ju9xo.png)

Once you've added those Query Parameters, you're ready to hit Send. If your request is successful, you'll see a JSON response like this:

```json

{
  "data": [
    {
      "id": 734,
      "name": "Top JavaScript/TypeScript Repos",
      "is_public": true,
      "is_favorite": false,
      "is_featured": true,
      "short_code": null,
      "created_at": "2023-10-11T02:55:45.680Z",
      "updated_at": "2023-10-11T02:57:03.923Z",
      "deleted_at": null,
      "repos": [
        {
          "id": 591831,
          "insight_id": 734,
          "repo_id": 501028599,
          "full_name": "open-sauced/app",
          "created_at": "2023-10-11T02:55:45.939Z",
          "deleted_at": null
        },
        {
          "id": 591832,
          "insight_id": 734,
          "repo_id": 70107786,
          "full_name": "vercel/next.js",
          "created_at": "2023-10-11T02:55:45.974Z",
          "deleted_at": null
        },
        {
          "id": 591833,
          "insight_id": 734,
          "repo_id": 348060227,
          "full_name": "withastro/astro",
          "created_at": "2023-10-11T02:55:45.989Z",
          "deleted_at": null
        },
        {
          "id": 591834,
          "insight_id": 734,
          "repo_id": 137078487,
          "full_name": "vuejs/core",
          "created_at": "2023-10-11T02:55:45.991Z",
          "deleted_at": null
        },
        {
          "id": 591835,
          "insight_id": 734,
          "repo_id": 576201,
          "full_name": "mrdoob/three.js",
          "created_at": "2023-10-11T02:55:45.994Z",
          "deleted_at": null
        },
        {
          "id": 591836,
          "insight_id": 734,
          "repo_id": 10270250,
          "full_name": "facebook/react",
          "created_at": "2023-10-11T02:55:46.017Z",
          "deleted_at": null
        },
        {
          "id": 591837,
          "insight_id": 734,
          "repo_id": 28457823,
          "full_name": "freeCodeCamp/freeCodeCamp",
          "created_at": "2023-10-11T02:55:46.060Z",
          "deleted_at": null
        },
        {
          "id": 591838,
          "insight_id": 734,
          "repo_id": 27193779,
          "full_name": "nodejs/node",
          "created_at": "2023-10-11T02:55:46.092Z",
          "deleted_at": null
        }
      ],
      "members": [
        {
          "id": "1cb37dcb-87a5-4cbd-9085-a82349a199b3",
          "insight_id": 734,
          "user_id": 42211,
          "access": "admin",
          "created_at": "2024-01-04T19:36:14.354Z",
          "updated_at": "2024-01-04T19:36:14.354Z",
          "deleted_at": null
        }
      ]
    }
  ],
  "meta": {
    "page": 1,
    "limit": 1,
    "itemCount": 1,
    "pageCount": 1,
    "hasPreviousPage": false,
    "hasNextPage": false
  }
}
```

If you have another API to test, go ahead and see if you can get it working. 

[https://github.com/hoppscotch/hoppscotch](https://github.com/hoppscotch/hoppscotch)


We'll be back with another post in the 29 Days of OSS Alternatives tomorrow, but if you want to stay up-to-date with OpenSauced and get more valuable information about open source, [sign up for our newsletter](https://oss.fyi/newsletter) today.