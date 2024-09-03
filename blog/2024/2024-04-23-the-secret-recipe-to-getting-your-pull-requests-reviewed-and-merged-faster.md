---
title: "The Secret Recipe to Getting Your Pull Requests Reviewed (and Merged) Faster"
tags:
  [
    "open source",
    "pull request",
    "open source pull request",
    "open source contributors",
    "open source for beginners",
  ]
authors: AdiatiAyu
slug: getting-pull-requests-reviewed-and-merged-faster
description: Tips for open source contributors to get their pull requests reviewed and merged faster.
---

One of the most satisfying moments as an open source project contributor is having your pull request (PR) merged into the `main` branch. This contribution showcases your skills, passion, and dedication to the project. However, the road to a successful PR can sometimes be bumpy and full of pitfalls.

Have you ever experienced the frustration of your PR being rejected or stuck in a never-ending review process? It can be demotivating and time-consuming, especially when you're eager to see your changes integrated into the project.

<!-- truncate -->

I want to share my perspective as a maintainer so you understand what it looks like from this side. Rejecting pull requests, especially because of things that can be prevented, has always been heartbreaking. Communicating back and forth with contributors because information is missing in PR forms or because they need to follow the existing guidelines can be frustrating. As a maintainer, I lose my time and productivity and sometimes find myself on the edge of burnout.

But here is the good news: There are secret recipes for getting your pull requests reviewed and merged faster, which also help maintainers save time and avoid burnout. I'll share them with you in this blog post.

## The Magic of Issues: Ensure Your PR Has a Companion

Here's the golden rule: **Always have an issue accompanying your PR**.

Before working on any changes, ensure your PR is related to an issue or create one if none exists. This step is crucial because it provides context and a clear purpose for your PR. Think of an issue as a compass that guides your PR in the right direction. It ensures that your code changes align with the project's needs and helps reviewers understand the "why" behind your work.

### Proposing a Feature or Reporting a Bug

Let's say you have a brilliant idea for a new feature or stumbled upon a bug. The first step is to create an issue. Propose your idea, describe the bug, and seek initial feedback from the project maintainers.

Wait for them to triage your issue before making any changes. They will let you know if it's a go or unnecessary for the project. It's always better to have that confirmation to avoid any potential misunderstandings or wasted effort.

### Following Requirements for Existing Open Issues

If you're working on an existing open issue, make sure you follow the requirements and instructions provided in the issue. **Following and sticking to them increases the chances of your PR being accepted and streamlines the review process.**

Remember, just because you have an idea for an improvement outside what is required in the issue doesn't mean it's automatically the right solution. The project maintainers have a broader perspective on the project's vision and roadmap. Discussing your ideas first shows respect for their expertise and ensures your PR is well-received.

## Unlocking the Secrets: Reading the Project Documentation

It might seem tempting to jump straight into the code, but taking the time to read the project documentation, such as the README and the contributing guidelines, will save you and the reviewers valuable time and avoid headaches in the long run.

One of the reasons I have rejected PRs is that the contributor didn't follow the contributing guidelines or the instructions to run the project, which caused the project rendering or building not to work correctly.

Project documentation is like a treasure map, guiding you through the project's structure, design decisions, and contribution guidelines. It holds the secrets to understanding the project itself and the do's and don'ts of contributing.

Every project is unique, and contributing to open source requires understanding and respecting the project's specific guidelines. Some projects might have strict coding style guidelines, while others may have particular requirements for commit messages or PR descriptions.

So, before you start coding, invest some time in reading the docs. It's an investment that will pay off in the form of smoother PR reviews and a deeper understanding of the project as a whole.

## Branching Out: Creating a New Branch for Changes

Always create a new branch before making any changes. This may seem like an obvious step, but it's worth emphasizing. Working directly on the default branch (usually the `main` branch) can lead to chaos and version control nightmares, especially in larger projects with multiple contributors.

Imagine working on a painting. You wouldn't want to experiment with new colors directly on the finished piece, would you? Creating a new branch ensures that your changes are isolated from the main codebase until they are ready for merging. It allows you to experiment, make mistakes, and refine your code without affecting others.

When creating your branch, give it a descriptive name that reflects your changes. For example, "fix-login-bug" or "feat/add-submit-button" clearly communicate the scope of your work.

You must know that PRs with changes made directly on the default branch often get rejected. So, always create a new branch as a safe space to work on your changes. It's a simple yet crucial step towards a smoother PR process.

## A Peek into the Past: Learning from Merged and Closed PRs

Take some time to browse through previously merged and closed PRs.

Study the merged PRs. See how other contributors have structured their pull requests, the level of detail they provide, and how they respond to feedback. This can be a great way to understand what reviewers look for and ensure your PR is clear and detailed.

Even more importantly, analyze closed PRs. Look for common reasons for rejection, such as missing information, incomplete tests, code that doesn't align with the project's style or vision, etc. By doing so, you can avoid making the same mistakes in your PR.

## Fill in the Blanks: Complete the PR Form with Detail

Many projects have a PR template. Don't treat these as "just" formalities; don't remove any part of the template just because you think it is unnecessary or would make your PR look clean.

The PR template guides you in giving all the information the maintainers need to review your PR. You must fill it out thoroughly, clearly describing your changes and the problem you're solving.

Typically, here is what to include:

- **Descriptive Title**

  Keep it short, informative, and directly related to your changes. For example, "Fix: Broken links on the navbar".

- **Detailed Description**

  Walk reviewers through your code, highlighting your changes' "what" and "why." Be generous with examples and explanations. Think of it as a user guide for your changes. If your PR contains several changes, as in [this example](https://github.com/open-sauced/intro/pull/138), consider using bullet points or checklists. **Bottom line**: The PR description should give reviewers an immediate understanding of your changes.

- **Testing Steps**

  Provide clear instructions on how to test your changes. This helps reviewers verify that your contribution works as intended.

- **Visual Aids**

  Screenshots or screen recordings can be beneficial in illustrating your changes, especially for user interface modifications. Include before-and-after screenshots or a short demo video showcasing the impact of your work.

- **Link to an Issue**

  Include a reference to the issue your PR addresses, such as "Fixes #123" or "Closes #456". This will help the reviewer know that there is an issue related to your PR. Linking your PR to the related issue will also automatically close the issue once the PR is merged.

You can write the PR form from scratch with the above details if no template is provided.

Submitting an incomplete or carelessly written PR can lead to back-and-forth communication, delays, or even rejection. Take the time to fill out the form thoroughly, addressing each section with care.

## Stay Active: Keep Your Branch Up-to-Date

The review process can take some time. While waiting for your PR to be reviewed and merged, don't forget to keep your branch up-to-date with the `main` branch.

Periodically update your branch by pulling in the latest changes from the `main` branch. This way, you can quickly catch any potential conflicts and resolve them before they become a roadblock to your PR's acceptance.

If you need help resolving merge conflicts, read [this blog post](../2023/2023-07-31-keeping-your-branch-up-to-date-and-handling-merge-conflicts-while-waiting-for-pr-reviews.md) by [Bekah Hawrot Weigel](../authors/bekah-hw/).

## Final Words

Getting your pull requests reviewed and merged faster is not just about following a set of recipes; it's also about sharpening your communication skills and seizing networking opportunities.

Clear and concise communication is key to a smooth PR process. By effectively communicating your changes and addressing reviewer feedback, you demonstrate your commitment to the project and make the reviewer's job easier.

Additionally, engaging with the project maintainers and the community provides valuable networking opportunities. It shows your enthusiasm and willingness to collaborate and learn, increasing the chances of your PR being accepted and opening doors for future contributions or even job searching.

So, as you apply these secret recipes, remember that they are about more than technical proficiency. They are also about building relationships and effective communication.
