---
title: "Writing Your First Pull Request: Tips, Best Practices, and AI-Powered Tools for Success"
tags: []
authors: BekahHW
slug: writing-your-first-pull-request-tips-best-practices-and-ai-powered-tools-for-success
description: "If you're new to contributing to open-source projects, submitting your first pull request can be intimidating. But don't worry, we've got you covered! Check out these tips for successfully submitting your first pull request and making a great first impression as a contributor. "
image: https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4xtz1foaoswl7f55hzgk.png
---

I don’t remember writing my first Pull Request (PR), and to be honest, I actually looked to see if I could find it for this post, but I know that I was really nervous because I wasn’t sure if I was doing it “right.” I think I actually spent more time worrying about it than I did actually writing the thing. The good news is that there isn’t really a right way to write a PR, but there are some best practices that can guide your writing and help the maintainer to be able to understand the changes. 

<!-- truncate -->

## Review the Contribution Guidelines
Maintainers want to help you write your PR; that’s why they often outline contributing directions in their repositories.

![Jerry McGuire “Help me, help you gif”](https://media.giphy.com/media/uRb2p09vY8lEs/giphy.gif)

This file—often called CONTRIBUTING.md—gives guidelines for submitting your PR, including information like whether or not you need to write tests, the communication process, coding style, and how to submit your pull request. Check out [OpenSauced’s Contributing Guide](https://docs.opensauced.pizza/contributing/introduction-to-contributing/), as an example. 

## Tips for Your First PR
Although every repository may have unique guidelines, there are general guidelines for all PRs. Here are some tips to keep in mind:

### Create a Clear Title
The title should give an indication of the issue, the changes made, and the type of PR–is this a bug fix, content or documentation change, new feature, or something else? 

![OpenSauced title examples](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yv10emgx8a7grxyovbew.png)
<small> OpenSauced’s CONTRIBUTING guidelines for titles</small>


### Give a Detailed Description
PRs often include a summary of the changes, as well as any relevant context or background information that might be helpful in understanding the proposed changes. 

### Provide context
A well-written description will help the maintainer understand the purpose of the PR, the changes you’ve made, and why the changes were made. Here are some of the reasons the description is key to the success of the PR: 

1. Facilitates collaboration.  More details allow team members to share their feedback, identify potential issues, and ask questions. With open and transparent communication, a sense of community and trust among team members develops, leading to better collaboration.

2. Saves time. With a detailed description, the reviewer is more likely to quickly understand the changes made and avoid spending unnecessary time deciphering code. As a result, the developer will receive quicker feedback and avoid unnecessary rework.

3. Helps with future reference.  A well-documented PR provides a historical record of the changes made. This helps future team members to understand the evolution of the code and the decisions made along the way. It also helps with future maintenance and debugging.

![OpenSauced's Examples for communication style](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sc4v1pihnggpq0asu671.png)
<small> OpenSauced’s [CONTRIBUTING guidelines for communication style](https://docs.opensauced.pizza/contributing/introduction-to-contributing/) </small>

### Link the issue 
If the PR is related to an issue, you can link that issue and automatically close the issue when the PR is merged. One way to do this is to use this syntax: `closes #issue-number` for example, `closes #11`. 

### Acknowledge Requirements 
If there are requirements for new code to be merged in, like writing tests or documentation, you should also include that information in the PR. Other steps might include running current tests before submitting, agreeing to the Code of Conduct, and checking to make sure there’s not an open issue or another PR addressing the same problem you’ve fixed.

### Add a Gif!
If you want to know why, check out my last post, [How to Create a Good Pull Request Template (and Why You Should Add Gifs)](https://dev.to/opensauced/how-to-create-a-good-pull-request-template-and-why-you-should-add-gifs-4i0l)

## Bonus Level: Power Up Your PRs with AI

If you want to take your PRs to the next level, sign up for [GitHub’s Copilot for Pull Requests](https://githubnext.com/projects/copilot-for-pull-requests) waitlist! Copilot for PRs can give a summary of the changes, a detailed list with code references, or even create a poem 🤯

## Community Shoutout
For a great example from one of our community members, @nickytonline, check out [this PR](https://insights.opensauced.pizza/feed/99). 

![gif of Nick Taylor’s PR](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i19g7u3uwqzjf3exvbal.gif)

If you’re looking for an open source project to submit your first PR to, find a project that’s well documented, aligns with your interests and skills, and is accepting PRs from new contributors. Check out [OpenSauced’s Hot Repositories](https://hot.opensauced.pizza/) or [Insights](https://insights.opensauced.pizza) to find popular repositories and explore based on your favorite topics. And if you want to see your PR mentioned by OpenSauced, be sure to add it to your [highlights](https://insights.opensauced.pizza/feed)!

