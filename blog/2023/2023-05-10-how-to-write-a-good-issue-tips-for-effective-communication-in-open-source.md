---
title: "How to Write a Good Issue: Tips for Effective Communication in Open Source"
tags: []
authors: BekahHW
slug: how-to-write-a-good-issue-tips-for-effective-communication-in-open-source
description: "Learn how to write a good issue in open source development with these tips. Follow these guidelines for clear and effective communication to help your fellow contributors address bugs, suggest features, and more. Start contributing to open source with confidence today."
---

Three years ago I maintained my first open source project for Hacktoberfest. As a first-time maintainer, I underestimated the time and effort it would take to write good issues for my contributors. What I also learned that year was that writing issues is an important form of communication, and, as a contributor, it can be a valuable skill to develop to create relationships and support maintainers. If you’re trying to get involved in open source, one way to get started is by writing issues that report bugs, request features, or suggest improvements. 

<!-- truncate -->

## Understanding the Purpose of the Issue
Issues are often a starting point for communication. It’s an opportunity to communicate with maintainers or for maintainers to communicate needs to contributors. There’s usually one main idea per issue with an explanation. For example, a bug report would address one bug. A feature request would outline one feature.

## Elements of a Good Issue
A good issue should have several key elements that help to clearly and concisely communicate the problem or suggestion. These elements include:

- Clear and concise title: The title should describe the issue in a way that is easy to understand.
- Detailed description: The description should include a detailed explanation of the issue. It’s important to use clear and concise language, be specific, avoid assumptions, avoid vague or ambiguous language, and be respectful and professional. Lastly, provide additional information as needed to clarify the issue.
- Visuals: Screenshots, gifs, videos, or other visuals can be helpful in illustrating the problem.
- Contextual information: Provide any additional information about the environment or system affected by the issue.
- Proposed solution: If you have an idea for how to address the issue, include it in your issue.

### Elements of a Good Bug Report
For bug reports, you should generally also include the following information:
- Steps to reproduce the bug
- Your work environment (operating system, etc.)
- The browser you’re using
- Any applicable screenshots, video reproduction, code, or context

### Elements of a Good Feature Request
For feature requests, you need to help the maintainer understand why the feature is important. You should generally include the following information:
- Type of feature (docs, refactor, style, code feature, etc.)
- The current state of the application and the solution you suggest with your feature
- Any additional context of information, including alternatives you’ve considered 

## Issue templates
Some repositories will use issue templates to help guide you through writing an issue. For example, at OpenSauced, we have templates for bug reports and feature requests (shown below). Templates help to ensure the maintainer gets all the information they need to communicate with contributors. If there are templates, it’s important to use them rather than start with a blank issue. 

![OpenSauced Feature Request template](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u7iwfkdsydr1sy2okr83.png)

## Example Walkthrough
Sometimes the best way to learn is by looking at examples, so we’re going to walk through this [Remix issue](https://github.com/remix-run/remix/issues/3003) from [Nick Taylor](https://dev.to/nickytonline). 

We’ll go through each element of a good issue and bug report. 

### Clear and concise title
> TypeError: Body is unusable when using Remix(experimental-netlify-edge) Actions


### Detailed description & Steps to reproduce the bug 
In the issue, Nick covers some key steps:
1. What version of Remix he's using
2. Steps to Reproduce, including a numbered list, code snippets, screenshots, and a link to a Discord discussion with more context.
3. Expected behavior
4. Actual behavior with a screenshot of the error message.

![Gif scrolling through the issue](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gct099z8l0nyy6q89sy2.gif)

### Visuals
Within the description of the issue, there's a screenshot of what it looks like when it runs locally and an image of how it would look in Postman. 

### Proposed solution
Although the initial issue doesn't include a proposed solution, Nick explores what's happening and maintains communication in the comments. As part of the investigation, he created a repository to help the maintainers check it out, and shared his approach in [his comment](https://github.com/remix-run/remix/issues/3003#issuecomment-1116552723).

### Work Environment 
Nick shares the version of Remix, the versions of Node he tried, and includes that the Netlify CLI was installed.

### Conversation
Nick didn’t end the issue with the bug report. If you scroll beyond the issue, you’ll see that he continued the conversation, referencing a conversation in the organization Discord, and his investigation into the bug and solutions. He makes updates as he finds more information, providing code snippets for contextualization, and tags maintainers as part of the conversation as well as others who have contributed. 

![Screenshot of Nick's comment and continued exploration of the issue.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/guxkzzf7da37zlm2qnfw.png)


Best of all, he supports the team member who helped with the fix. 

![Screenshot of Nick's comment "Woohoo! Nice work @jacob-ebey! 🔥"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ltv5yerd5mcf4rasrs4m.png)


Writing good issues is an important part of effective communication both in how you construct the issue and how you communicate once the issue has been opened. It’s a great way to demonstrate your communication and investigation skills. And if you’re trying to get into open source, remember, [good first issues don’t exist](https://opensauced.pizza/blog/good-first-issues-dont-exist), unless you make them yourself 😉
