---
title: Managing Community Health Files and Templates with a .github Repository
tags: [github]
authors: BekahHW
slug: managing-community-health-files-and-templates-with-a-github-repository
description: "I collect open source projects like some people collect discord servers. To be accurate, I have 525."
---

I collect open source projects like some people collect discord servers. To be accurate, I have 525 repositories. Now, before you yell at me, many of those are from my bootcamp lessons when I was learning to code. But I’ve been known to start and stop projects more than once. What I _have_ learned through that experience is the importance of consistency. If you’re in an organization that has multiple repositories, you might find yourself adding the same files over and over–files like the CODE_OF_CONDUCT.md, Pull Request (PR) and Issue templates, and CONTRIBUTING.md. As developers, adding these files repeatedly starts to feel like we’re violating [DRY code principles](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Fortunately, the .github repository can help solve this problem.

<!-- truncate -->

## What is a `.github` Repo?
A `.github` repository is a special type of repository in GitHub that allows maintainers to store community health files and templates for their projects. 

> Community Health files promote the well-being of the community and focus on communication, documentation, supporting members through a code of conduct, and community recognition. 

The `.github` repository–found at `https://github.com/<username/organization>/.github`- can house the community health files for your organization as the default files. According to [GitHub](https://github.blog/changelog/2019-02-21-organization-wide-community-health-files/), “While the file itself won’t appear in the file browser or Git history for each repository, it will be surfaced throughout developers’ workflows, such as when opening a new issue or when viewing the Community Profile, just as if it were committed to the repository directly.”


![Screenshot of the open-sauced/.github repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i41566ytubxwkz60kjh7.png)

Using a `.github` repository, allows maintainers to efficiently manage the files and templates that are important for their project's workflow and community and ensure consistency throughout the organization's repositories. So what do you add to the `.github` repository? One example is a Pull Request Template since they’re often standard across repos.

## How to Add a PR Template

Adding a PR template to your `.github`repository is straightforward. First, navigate to the repository in question and click on the "Create new file" button. Next, in the file name field, type `.github/PULL_REQUEST_TEMPLATE.md`.

In the main text field, you can add the content of your PR template. This can include prompts for information such as the purpose of the PR, the changes made, any potential issues or concerns, and any additional context or resources that may be helpful–check out ours [here](https://github.com/open-sauced/.github/blob/main/.github/PULL_REQUEST_TEMPLATE.md). You can also use markdown to format the template, making it more readable and easier to understand.

Once you have added your PR template, click the "Commit new file" button to save it to your repository. Now, every time a contributor opens a new PR, they will be prompted to use the template you created.

## Considerations for Maintainers

When creating a PR template, keep in mind that the template is easy to read and understand. Remember, the template is supposed to make things easier for you and the contributors. What information do you need to be able to review the PR more efficiently? What information can guide a new contributor through writing a PR for the first time?

Finally, the beauty of using one template for all your repositories is that if you decide to update it, you only need to do that in one location. As your project evolves and new requirements emerge, you may find that the template needs to be revised or you might feedback from contributors and other maintainers, and make changes as needed to ensure that the PR template remains effective and useful. If you're interested in more content on PRs, check out [Writing Your First Pull Request: Tips, Best Practices, and AI-Powered Tools for Success](https://dev.to/opensauced/writing-your-first-pull-request-tips-best-practices-and-ai-powered-tools-for-success-3bg9) and [How to Create a Good Pull Request Template (and Why You Should Add Gifs)](https://dev.to/opensauced/how-to-create-a-good-pull-request-template-and-why-you-should-add-gifs-4i0l).