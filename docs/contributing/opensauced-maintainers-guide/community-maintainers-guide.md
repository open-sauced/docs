---
id: community-maintainers-guide
title: "OpenSauced Community Maintainers Guidelines"
sidebar_label: "Community Maintainers Guidelines"
keywords: 
- "opensauced community maintainers guidelines" 
- "opensauced community maintainers" 
- "maintainers guidelines" 
- "open source maintainers guidelines" 
- "open source maintainer" 
- "open source project management" 
- "community management in open source" 
---

Welcome to OpenSauced Community Maintainers guidelines!

These guidelines provide expectations and responsibilities for OpenSauced Community Maintainers to foster a welcoming, supportive, and inclusive community and encourage healthy collaboration.

## Maintainers Best Practices

- **Open communication**: Always communicate everything as much as you can openly on GitHub to keep the community in the loop.
- **Courtesy**: Always use polite and clear words when asking for changes or giving feedback.
- **Intention**: Always tell the reason behind closing an issue or pull request.
- **Take the time needed**: Maintainers are human. It’s okay to take time to respond.

## Issues Management

### Triaging Issues

- Label issues to classify them. Refer to the "[Adding Issue and PR Labels](../triage-guide.md#adding-issue-and-pr-labels)" section on the OpenSauced docs.
- If a feature request needs to be more convincing, ask contributors to convince you why OpenSauced wants to enhance the project with the feature.
- When unsure whether to go on or close the issue, seek the opinions of other maintainers by tagging them in the comment.

### Creating Issues

- Create an issue whenever there's a necessity for change, even without discussing it first with the team.
- All issues should start with a descriptive title that begins with a verb. For example, "**Add** a section on how to use X feature."
- Creating several small issues is better than one consisting of big changes. Contributors can work on the issues faster, and it can save time for maintainers to review the pull requests.
- Leave the `needs triage` label and tag other maintainers to triage before releasing it for contributions when in doubt.
- Add a `beginner` label for low-effort issues requiring less expectation for the maintainers' time and support. Provide clear and enough information about how you want the change to be. For example, "Add a section about X. Give a brief explanation about it. You can read these resources to help you."

### Good First Issue

Good first issues mainly aim for complete beginners and someone new to OpenSauced projects. A good first issue has to have:

- **Clear description**: Why do you want to have the change? What do you want to achieve with the change?
- **Proposed solution**: How can this issue be solved?
- **Files and code blocks**: Point to the file and the code blocks causing the issue. Read the instructions on the GitHub documentation to [create a permanent link to a code snippet](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet).

**Tip**: Add checkboxes to the issue and ask the contributor to check them as they complete them to help create a clear path to completion.

### Assigning Issues

- The `good first issue` can only be assigned **once per contributor**. <br /> Respond with something like, "Hey \{@username}\, we appreciate all the contributions lately! We'd love to give someone new a chance to take on this good first issue, but keep checking back as we post new issues frequently."
- Issues outside the `good first issue` can be assigned **max. 2 issues per contributor at a time**. <br /> We love contributions. But we want to equip contributors to succeed by giving them time to complete issues. Through experience, we've found that two issues at a time allows them to focus on completing the issue and supports maintainers by not having issues open for long periods.

## Pull Request Management

### Timeline

- Small pull requests that don't require updates should be merged in up to one week.
- Take time to review long pull requests to prevent merging incomplete, broken, or unresolved pull requests. Communicate with contributors when more time is needed to review the pull requests.
- Pull requests that have requested updates that are stale after two weeks should be put into draft mode with a note to the contributor that says something like: "We haven’t seen any updates to this PR in the last two weeks, so we’ve put it in draft mode. Please let us know if you’re going to continue to work on it."
- Stale pull requests should be closed when unresolved or inactive (no commits, comment responses, etc.) in 5 weeks. In these circumstances, communicate with contributors that they may reopen if they want to continue working on it only when no one claims the issue. <br /> **Note**: If you close their pull request, you should also unassign any related issues.

### Pull Request Review

- Ensure that the pull request form is completed. Ask contributors to provide any missing information before reviewing.
- Always [pull the pull request's branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) and test the changes locally.
- Always provide feedback and suggestions when requesting changes. To give code suggestions, please read the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).
- Pull requests should only include what is requested in the issue. If there's another fix that someone (contributor or maintainer) wants to make, it requires another issue and a pull request. If the person has already made the fix in the pull request, politely ask them to remove the update, create a new issue, and wait to be assigned.
- [Creating saved replies](https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/creating-a-saved-reply) is helpful when frequently adding the same comment over and over, such as thanking contributors for pull requests or changes made, asking to resolve merge conflicts, etc.

### Merging Pull Request

- Always **squash and merge commits** when merging in a pull request.
- When two maintainers review and approve a pull request, the first reviewer is the one who merges the pull request if there are no requested changes.
- When there is a request for changes, the one who requested changes or the last one whose requests got resolved is the one who merges the pull request.
- Refrain from resolving conversations started by other maintainers even if the contributor has verified. When it's necessary to merge the pull request fast, tag the maintainer and ask them to do a final check before merging.
- Do not approve changes or dismiss reviews from a maintainer even if the contributor has completed the change requests. Re-request review instead.
- If you have the time, it's great to encourage contributors with a positive message like these:

  - "Thanks for contributing, \{@username}\. Join our [Discord](https://discord.com/invite/U2peSNf23P) community for more updates on OpenSauced and to find more projects."

  - A personal message acknowledging their impact.

  - Send a GIF like this one:

    ![git merge](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2JhdGI5czh4MDlyeWhlNXpicmdrbGZ2Znk0MnM4dnV0ZHMyamNkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFkiFMDg3iFoI/giphy.gif)

### Closing Pull Requests

Below are the circumstances when you can close pull requests:

- Stand-alone pull requests that don't have issues related to them.
- Pull requests for issues that are not assigned to the contributors.
- Stale pull requests.

## OpenSauced Community Maintainers

See the [@open-sauced/community](https://github.com/orgs/open-sauced/teams/community) team.

## OpenSauced Community Repositories

|     | **Repository Name**                                       |
| --- | --------------------------------------------------------- |
| 1.  | [guestbook](https://github.com/open-sauced/guestbook)     |
| 2.  | [pizza-verse](https://github.com/open-sauced/pizza-verse) |
| 3.  | [intro](https://github.com/open-sauced/intro)             |
