---
id: introduction-to-contributing
title: Introduction to contributing
sidebar_label: Introduction to contributing
keywords:
  - introduction to contributing
---

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](./code-of-conduct.md).

Some thoughts to help you contribute to this project

## Recommended communication style

1. Always leave screenshots for visuals changes
1. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer.
1. Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer.
1. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.

## Setup

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) one of the repositories from [github/open-sauced](https://github.com/open-sauced) to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Run `npm ci` to install the dependencies and set up the project.

You can also use the shell commands below to get started once you have forked the repository.
Make sure to replace `<your-name>` with your GitHub username.

```shell
git clone https://github.com/<your-name>/open-sauced
cd open-sauced
npm ci
```

## Building

```shell
npm run build
```

## Testing

For running the test suite, use the following command. Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to [install watchman](https://facebook.github.io/watchman/docs/install.html).

```shell
# the tests will run in watch mode by default
npm test
```

For more info on testing React and JavaScript, check out this course [Testing JavaScript](https://testingjavascript.com/)

## Applying Lint Styleguide

To check the code for formatting and linting errors, run the following command:

```shell
npm run lint
```

These errors will also be displayed during development, but won't prevent the code from compiling.

To fix the formatting and linting errors, run the following command instead:

```shell
npm run format
```

These commands use [ESLint](https://eslint.org/) to check and fix the code.

The automated PR checks will also run these commands, and the PR will be blocked if there are any errors, so it's a good idea to run them before submitting a PR.

## Pull requests

**_We actively welcome your pull requests, however linking your work to an existing issue is preferred._**

1. Fork the repo and create your branch from the default branch.
1. Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-mobile
1. If you've added code that should be tested, add tests.
1. If you've changed APIs, update the documentation.
1. If you make visual changes, screenshots are required.
1. Ensure the test suite passes.
1. Make sure you address any lint warnings.
1. If you make the existing code better, please let us know in your PR description.
1. A PR description and title are required. The title is required to begin with: "feat:" or "fix:"
1. [Link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) in the project. Unsolicited code is welcomed, but an issue is required for an announcement your intentions. PR's without a linked issue will be marked invalid and closed.

_note for maintainers: All pull requests need a label to assist automation. See the [template](https://github.com/open-sauced/open-sauced/blob/HEAD/.github/release-drafter.yml) to guide which labels to use._

### PR validation

Examples for valid PR titles:

- fix: Correct typo.
- feat: Add support for Node 12.
- refactor!: Drop support for Node 6.

_Note that since PR titles only have a single line, you have to use the ! syntax for breaking changes._

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

_[3 tips for getting your Pull Request reviewed](https://youtu.be/cuMeC-eZJJ4)_

You can also experiment with conventional commits by doing:

```shell
npm run push
```
Using the `npm run push` command is an interactive replacement for `git commit`. It enforces the conventional commits specification for writing commit messages, making it easier for developers and maintainers to understand the changes made in a particular commit.

Assuming you are dealing with code changes and you add them using `git add`, once you are ready to commit, there are 2 ways we can proceed: `git commit` or `npm run push`. The second method is preferred, as doing a subsequent `git push` and then opening a PR would ensure the title is conforming to our standards.

### Work in progress

GitHub has support for draft pull requests, which will disable the merge button until the PR is marked as ready for merge.

## Issues

If you wish to work on an open issue, please comment on the issue with `.take` and it will be assigned to you. If an issue is not assigned, it is assumed to be open for anyone to work on. Please assign yourself to an issue before beginning work on it to avoid conflicts.
 
If you are contributing to the project for the first time, please consider checking the [bug](https://github.com/open-sauced/hot/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/open-sauced/hot/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels.

In case you get stuck, please feel free to ask for help in the [Discord](https://discord.gg/U2peSNf23P) server or GitHub Discussions.

Please note that we have a [code of conduct](./code-of-conduct.md), please follow it in all your interactions with the project and it's contributors.


## Triage team

The Triage team is inspired by [expressjs/express](https://github.com/expressjs/express/blob/HEAD/Triager-Guide.md). This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow this guide: [TRIAGE_GUIDE.md](./triage-guide.md)

> **There are no minimum requirements to become a member of the Triage Team.**

For those interested in getting involved in the project or just open source in general, please request an invite to the Triage Team in [this discussion.](https://github.com/open-sauced/open-sauced/discussions/638)

## Funding

OpenSauced is a part of GitHub Sponsors. If you would like to contribute, please note the [sponsor page](https://github.com/sponsors/open-sauced) for details on how funds are distributed. If you have made any contributions to the projectd directly or indirectly, please consider adding your profile to the [FUNDING.yml](https://github.com/open-sauced/.github/blob/main/FUNDING.yml).

## Community

Do you have questions? Join the conversation in our [Discord](https://discord.gg/U2peSNf23P).

## Coding tips

- Ask questions if you are stuck.
- Use [CSS variables](https://github.com/open-sauced/open-sauced/blob/HEAD/src/styles/variables.js)
- Always use [rel="noreferrer" on all target="\_blank" links](https://web.dev/external-anchors-use-rel-noopener/).

## License

By contributing to the OpenSauced project, you agree that your contributions will be licensed
under its [MIT license](https://raw.githubusercontent.com/open-sauced/open-sauced/main/LICENSE).
