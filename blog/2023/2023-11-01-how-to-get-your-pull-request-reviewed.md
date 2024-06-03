---
title: How to Get Your Pull Request Reviewed
tags: []
authors: BekahHW
slug: how-to-get-your-pull-request-reviewed
description: "Reading documentation, testing your contributions, and effectively using PR templates will increase your chances of having your PR reviewed. Learn more here."
---


Sometimes, it can be hard to get your Pull Request (PR) reviewed, especially if there are a lot of other PRs ahead of yours. Maintainers can get busy, take some time off, or be overwhelmed with GitHub notifications. If you want to get your Pull Request reviewed, you need to make it easy for the maintainer to review your PR. How do you do that? 

<!-- truncate -->


## Prioritize Clarity
If the reviewer can look at your PR, commits, title, and additional information and understand the purpose of the work you've done, then it will be easier to review. For example, if your PR title is "made updates to docs," that doesn't give me a clear picture of what kind of updates, why it's important, and what I should be looking at. Instead, you might have something like "feat: Reorganize docs" to give a clearer understanding. As the reviewer goes through, they should likewise be able to find clear and frequent commit messages.

[![Highlight of Reorganize docs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/maw8hdb14e2qabhwcmvz.png)](https://app.opensauced.pizza/feed/724)



## Read the Docs
Almost every repository that’s actively looking for contributors has documentation about how to run the project and how to contribute to the project. I know that might sound like a lot of reading, but it saves maintainers time and energy when you follow the guidelines. Through the docs, you should learn how to run the project locally, the process for contributing, and what to expect as you contribute. 

## Test Your Work
Testing your changes locally ensures that you're submitting high-quality code or documentation updates. It helps catch any errors or issues that might happen and ensures you're delivering value to the project.

## Complete the PR Template
Many projects utilize GitHub PR templates to ensure they get the information they need to understand the context of the PR.  You can check out [our PR template](https://github.com/open-sauced/.github/blob/main/.github/PULL_REQUEST_TEMPLATE.md) in our [.github repository](https://github.com/open-sauced/.github/). 

![PR Template](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/az0lpzfcpkr2ii7616gv.png)

### Description
The description should explain what you’re submitting and give any necessary details. Each PR should focus on one task. For example, in [this PR](https://github.com/open-sauced/ai/pull/22#issuecomment-1515465694), Anush was updating the Extension Logo. That means all changes should be related to that change. Any unrelated changes should go in a different PR. Here’s an example of a clear and direct description:


![This PR adds the AI PR description generation feature as suggested in #18. A new page is added to the extension dropdown to configure the description parameters. The text-generation is done using OpenAI's GPT-3.5 with the input context sourced from the code diff and/or the PR commits as configured by the user.
The feature documentation will be added to https://docs.opensauced.pizza.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u959rkuvmwehf44l7ebr.png)


### Type of  PR
Within our template, we include options for the type of PR. This helps maintainers quickly understand the impact of the PR as well as how much time they may need to review the PR. 

### Related Tickets & Documents
This is important. Some projects automatically reject unsolicited PRs from non-team members. That means if you have a PR that’s not related to an issue, they’ll close it without looking at it. If this is the case, start by creating an issue or finding the best way to communicate the change you want made to the maintainers. (This is a good time to go back to that contributing guide.)

If this PR closes, resolves, or fixes an issue, include that in your reference. This is important because those words are special, reserved words. In the example below, once this PR is merged in, issue #18 will automatically close. This saves you and the maintainer time sorting through issues that have already been completed.


![Associated PR](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2z270jfzry4ohbl6cqi.png)



### Mobile & Desktop Screenshots/Recordings
This shows the visual changes that have been made to make it easier for the maintainer to review. Rather than running the whole project to test an image change, they can check it out with your screenshots. 

When you include screenshots and recordings, be sure to provide descriptions of what the reviewer is looking at and any necessary context. 


![screenshot with context](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fp3xqarepfq47ew1f2u1.png)

Including a GIF is another helpful way to show what the PR accomplishes:

![gif of chrome extension](https://user-images.githubusercontent.com/46051506/238419198-f6434c6f-bb18-46cd-afe2-0126eb02a3cf.gif)

## Respond to PR Reviews
Many PRs won't get merged in on the first try. Maintainers will often review and provide comments for any necessary updates. Respond to the comments and make your updates in a timely manner

Open source projects set you up for success if you follow the documentation and contributing guidelines. Putting up a PR without taking the time to understand expectations is like baking a cake without reading the directions. You're not setting yourself up for success. Be clear, concise, and provide the necessary details your reviewer. 