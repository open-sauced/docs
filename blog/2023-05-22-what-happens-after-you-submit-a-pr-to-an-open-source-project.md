---
title: What happens after you submit a PR to an Open Source Project?
tags: []
authors: BekahHW
slug: what-happens-after-you-submit-a-pr-to-an-open-source-project
description: "Curious about the process after submitting a pull request to an open source project? Discover the step-by-step journey, from review and discussion to maintainer approval and code merge, in this informative blog post."
---
It can be really exciting to get your first open source Pull Request (PR) merged in. But it’s important to remember that this is a step in the process and it’s perfectly normal to review feedback, make updates, and have questions before it’s merged in. Should you celebrate getting that PR in? Absolutely, but save the big celebration for when it’s merged. 

<!-- truncate -->

## In the Spotlight: Review and Discussion
Once your pull request is submitted, it undergoes a thorough review process by the maintainers. They examine the code changes, analyze the impact, and provide feedback. This feedback can be in the form of comments, suggestions, or requests for clarification. It's common for discussions and iterations to take place during this stage as you address the feedback and make necessary adjustments.

## Quality Matters: Continuous Integration (CI) Checks
Many open source projects utilize continuous integration systems, such as Travis CI, CircleCI, or Jenkins. These systems automatically run a series of tests against your code to ensure it meets the project's quality standards. The CI system may check for code style, run unit tests, and perform other validations. You'll receive notifications to fix the issues if the CI checks fail.

## Approaching the Finish Line: Collaboration with Project Maintainers
Project maintainers play an important role in reviewing and approving pull requests. Your ability to clearly communicate with them impacts if and when  your PR will be merged into the code base. Depending on the size of the project, whether not not it's run by volunteers, and the number of maintainers, response times can drastically vary. Be patient and kind. Here are some tips for collaboration:

### Responding to Maintainer Feedback
When maintainers provide feedback on your pull request, it's important to approach it with an open mind and a willingness to improve. Spend time reviewing the comments and suggestions, seeking clarification if needed. Respond to the feedback in a timely and respectful manner, acknowledging the suggestions and proposing changes accordingly.

### Meeting Quality Standards
Maintainers have the responsibility of ensuring that the project maintains a high level of quality. To gain their approval, address any code-related issues identified during the review process. Pay attention to code style, adherence to coding guidelines, and best practices specific to the project. Take the necessary steps to refactor and optimize your code, ensuring it aligns with the project's standards. 

### Communicate the Impact of Your Code
Maintainers are interested not only in the technical aspects of your code changes but also in understanding their impact on the project as a whole. Clearly communicate the purpose and benefits of your code modifications. Explain how your changes contribute to the project's objectives, performance improvements, or bug fixes. Provide any relevant performance benchmarks or test results to support your claims. By effectively conveying the significance of your contributions, you help maintainers appreciate the value your code brings to the project.

### Understand the Maintainers' Perspective
Project maintainers have a deep understanding of the project's architecture, design principles, and long-term goals. Recognize that their feedback and suggestions are rooted in their expertise and the project's best interests. Consider their feedback a type of mentorship and an opportunity to learn and grow from their insights. Showing that you respect and value their expertise, can create a positive collaborative relationship.

### Establishing a Positive Collaborative Relationship
Building a positive relationship with maintainers is essential for successful collaboration. Actively engage in discussions, ask questions, and seek help when you need it. Be open to receiving constructive criticism and show your commitment to learning and improving. Offer help and contribute beyond your pull request, for example, you might offer to help with issue triaging, documentation, or supporting other contributors. By actively participating in the project community and demonstrating a collaborative mindset, you can establish a positive rapport with maintainers.

Remember, collaboration with project maintainers is a two-way street. Approach their feedback with a growth mindset, value their expertise, and actively engage in the review process. By addressing feedback, meeting quality standards, effectively communicating the impact of your code, and establishing a positive collaborative relationship, you enhance the chances of gaining approval for your pull request and contribute to the success of the open source project.

## Merge and Closing the Pull Request
After receiving the maintainer's approval, the pull request is merged into the main repository. At this point, your code becomes part of the project's codebase :tada:

## Pull Request Rejection
It's worth noting that not all PRs get merged into a project. When you submit a pull request, you're not just asking maintainers to add your code to the codebase; you're also asking them to maintain that code. It is a normal part of the contributor journey to have PRs rejected, especially if there wasn't much communication with the maintainers during the development of the pull request.

## Example Pull Request Walkthrough

As you learned above, once a contributor submits a pull request to a repository, it usually triggers a process of review before it’s merged into the main codebase. This is often both for internal _and_ external contributors. We’re going to take a look at a [Pull Request](https://github.com/cypress-io/cypress/pull/19303) into the codebase for the open source testing software, [Cypress](https://insights.opensauced.pizza/hot/repositories/filter/cypress-io/cypress) from one of their team members, [@marknoonan](https://twitter.com/marktnoonan). Before diving into the process below, let's take a look at what Mark had to say about the pull request:

> When I think back to that PR, I remember my initial idea was to use a third-party library to implement the 3-panel resizable interface in Cypress. I tried out two different libraries on that branch, but ended up writing a custom implementation when those didn't meet our needs. Working through that PR helped clarify what we needed to do and how it should work. The main thing is, at all times we are focused on the underlying goal of the PR, and I am never attached to "my code" other than as a way to achieve the goal. So changing, removing, and rewriting code through feedback are all common, low-stakes parts of dialing in a change, and I expect and welcome that part of the process. I'm grateful and lucky to work with thoughtful, thorough people who provide great reviews.

### Submit Your Pull Request
In the pull request, you should state any issues being closed and pertinent information so the reviewing team can get a quick understanding of what the PR accomplishes. In this case, Mark lists the two issues the PR closes, additional details, a bulleted list of what happens in this PR, a video that demonstrates how the user experience has changed, and how to test. 

![gif of pull request](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rhyyvn759jf8q7zrcp19.gif)

If your PR is ready for review, you can request a review to let the maintainers know.

![Review Request](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8llflnf372gds38bqw4z.png)

You can also [mark a pull request as ready for review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review). 

### Code Review
Now that Mark has submitted the PR and asked for a review, another maintainer looks at the code and provides feedback and asks a question for clarification.

![Asking a question in PR comments](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5h6hoewul9yvynuvfz5o.png)

You’ll see if you continue scrolling through the conversation, that Mark updates the PR with new commits and receives more feedback about the PR. One of the comments asks for an end-to-end test to be written, which Mark needs to respond to:

![Response to end-to-end question](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1psasfh50400g42ihrz1.png)

There a more comments below that with feedback that include screenshots and a recording to demonstrate things that Mark can update to improve the Pull Request. After the updates are made, Mark notifies the commenter that the bugs have been fixed.

The process for review continues, and it’s important to note that there’s feedback and conversation happening throughout. Sometimes the reviewer's feedback is implemented. Other times there’s a discussion and they decide that a change doesn’t need to be made.

And then what we’re all finally waiting for:

![I tested and it feels great to use!](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6jglgw7307yfue7558bk.png)

It’s worth noting that this Pull Request was submitted on December 7th and it was merged in after feedback, updates, and conversations on December 17th. Getting your Pull Request merged in is a process that’s part of the developer journey. If you want to learn more about what to put in your first PR, check out my post, [Writing Your First Pull Request: Tips, Best Practices, and AI-Powered Tools for Success](https://dev.to/opensauced/writing-your-first-pull-request-tips-best-practices-and-ai-powered-tools-for-success-3bg9). And if you have a pull request that you’re proud of and want to highlight, [sign up for OpenSauced](https://insights.opensauced.pizza/start) and share it as a [highlight](https://insights.opensauced.pizza/feed). 
