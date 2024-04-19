---
id: triage-guide
title: "Triage Guide"
sidebar_label: "Triage Guide"
keywords: 
- "triage guide" 
- "Issue triage best practices" 
- "GitHub triage process" 
- "Pull request triage steps" 
- "Triage workflow tutorial" 
- "Effective issue management" 
- "Open source contribution triage" 
- "Triage for project maintainers" 
- "Streamlining triage efforts" 
- "Collaborative issue handling" 
- "Contributor triage assistance" 
---

## How to Join the Triage Team

1. Sign up for [opensauced.pizza](https://opensauced.pizza).
2. Leave a comment in the `🍕opensauced-contributors-chat` channel on [Discord](https://discord.com/channels/714698561081704529/928693344358514698).

## Triage Process

When a new issue or pull request (PR) is opened, the issue will be labeled with `needs triage`. If a triage team member is available, they can help ensure all the required information is provided.

### Adding Issue and PR Labels

Depending on the issue or PR, there are several labels the triage team can add for further classification, as follows:

- `needs triage`: This can be kept if the triager is unsure which next steps to take.
- `awaiting more info`: If more information has been requested from the author, apply this label.
- `question`: User questions that do not appear to be bugs or enhancements.
- `discuss`: Topics for discussion. It might end in an `enhancement` or `question` label.
- `bug`: Issues that present reasonable conviction there is a reproducible bug.
- `enhancement`: Issues that are found to be a reasonable candidate feature additions.
- `style`: Minor CSS or visual changes.

In all cases, maintainers may close issues if they don't receive a timely response when further information is sought or when additional questions are asked.

### Labeling `good first issue`

Issues labeled as `good first issue` represent a curated list of easy contributions for new contributors. These issues are meant to help folks make their first contribution to open source and should not require excessive research or triaging on the contributor's part.

All `good first issue` should include one or more of the following:

- A solution.
- A suggestion for a solution.
- Links to components or in which issue occurs.

Please be noted:

- Issues that `needs triage` cannot be labeled as `good first issues`.
- It is better to have no `good first issue` labeled issues than to have a `good first issue` confusing enough to deter a contributor from contributing.

## Approaches and Best Practices for Getting Into Triage Contributions

- Review the project's Contribution Guidelines if they are present. In a nutshell, commit to the community's standards and values.

- Review the documentation; for most projects, it is just the `README.md`. Ensure you understand the key APIs, semantics, configurations, and use cases.

- Writing your own test apps to reaffirm your understanding of the key functions might be helpful. This may identify some gaps in documentation; record those as they might be good PRs to open.

- Skim through the issues backlog; identify low-hanging and mostly new issues. From those, attempt to recreate issues based on the OP (Original Poster) description and ask questions if required. No question is a bad question!

## Removal of Triage Role

There are a few cases where members can be removed from the triage role:

- Breaking the [Code of Conduct](./code-of-conduct.md) or [project contributor guidelines](./introduction-to-contributing.md).
- Abuse or misuse of the role as deemed by the Triage Team.
- Lack of participation for more than six months.

If any of these happen, we will discuss them as a part of the triage portion of the regular Triage Team meetings. If you have questions, feel free to contact any Triage Team members.

## Helpful Hints

- When reviewing the list of open issues, there are some common types and suggested actions:
  - **New/unattended issues or simple questions**: A good place to start.
  - **Hard bugs & ongoing discussions**: Feel free to chime in and help.
  - **Issues that imply gaps in the documentation**: Open PRs with changes or help the user to do so.
- For recurring issues, it is helpful to create functional examples to demonstrate (publish as gists or a repo).
- Review and identify the maintainers. If necessary, mention one or more of them with `@` if you are unsure what to do.
- Ensure all your interactions are professional, welcoming, and respectful to the parties involved.
