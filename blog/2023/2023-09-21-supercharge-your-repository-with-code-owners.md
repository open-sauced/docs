---
title: "Supercharge your Repository with Code Owners"
tags: ["github", "opensource", "productivity", "security"]
authors: nickytonline
slug: supercharge-your-repository-with-code-owners
description: "As a maintainer of a repository, it’s in your best interest to automate processes as much as..."
---

As a maintainer of a repository, it’s in your best interest to automate processes as much as possible. The [CODEOWNERS file](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) is one of those tools to help with automating processes.

I decided to write a post about the CODEOWNERS file after reading this comment from one of our awesome [Octerns](https://education.github.com/students/octernships), Divyansh (@diivi), in a [pull request (PR) where I added the file](https://github.com/open-sauced/ai/pull/268).

![GitHub user diivi commenting that they weren't aware of the CODEOWNERS feature](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hpkmx91y66efqaa62umv.png)

A CODEOWNERS file in GitHub is a special file used to specify who reviews and maintains specific files or directories in a repository. It helps with identifying code ownership and who should be notified when pull requests are made to those repositories.

For example, in this particular CODEOWNERS file there is the `@open-sauced/engineering` team.

![A CODEOWNERS file with one team in it, @open-sauced/engineering](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0mg69ouah43ks9x3e0zh.png)

When someone creates a PR for that repository, that team is automatically added as a reviewer.

![Reviewers for a PR in the GitHub UI including the @open-sauced/engineering team](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hsevadw9yedmewgb0gya.png)

This is really handy because you don’t need to go and manually add reviewers, and when it’s a PR from an external contributor, they can’t add reviewers so this is super useful for them and can avoid comments like, “Can someone review my PR?”

Another nice feature of the CODEOWNERS file is that it can be used as part of [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule).

To enable this, go to the _Protect matching branches_ section of a branch protection rule, and ensure the _Require review from Code Owners_ option is checked.

![GitHub PR review file where the UI says that the CODEOWNERS file is valid](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b85pfint60i7h5ph9eoi.png)

One other thing to note is if you have permanent branches aside from `main`, like `beta`, `dev`, or whatever your team calls it, they can have different individuals and teams in those branches CODEOWNERS file.

## How to add a CODEOWNERS file to your project

The CODEOWNERS file is a special file that can reside in the root directory, in the `.github` directory or the `docs` directory (if you have one).

The `.github` folder might not exist in your project if you haven’t added other GitHub automated processes like [GitHub Actions](https://github.com/features/actions), [pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), or [issue templates](https://dev.to/opensauced/how-to-create-a-good-pull-request-template-and-why-you-should-add-gifs-4i0l).

Also note, GitHub looks for the first CODEOWNERS file it finds, searching first in the root directory, then the `.github` directory, and finally, the `docs` directory (if it exists).

You can add individual GitHub users, [a team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team), or a combination of them to a CODEOWNERS file.

![A CODEOWNERS file with teams an individuals in it](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jqjiucgu564d6dx5n89s.png)

A nice feature of adding or making changes to a CODEOWNERS file in a pull request is that GitHub validates it, letting you know if you are adding a non-existent user or team.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icix62kg1avsjy54enu2.png)

If you don’t already have a [CODEOWNERS file](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) file in your repository, I encourage you to add one. Let us know if you have any questions about this or other maintainer-related issues.

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
