---
id: introduction-to-contributing
title: 'Introduction to Contributing'
sidebar_label: Introduction to Contributing
keywords:
  - introduction to contributing
---

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](./code-of-conduct.md) and follow the directions below:

## Recommended Communication Style

1. Always leave screenshots for visual changes.
2. Always leave a detailed description in the pull request. Leave nothing ambiguous for the reviewer.
3. Always review your code first. Be sure to run the project locally and test it before requesting a review.
4. Always communicate in the GitHub repository. Whether in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Setup

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository you're working on from [github/open-sauced](https://github.com/open-sauced) to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Check the project's README to determine how to run the project locally.

For many of our repositories, you'll find the directions below work for running the project locally:

Run `npm ci` to install the dependencies and set up the project.

You can also use the shell commands below to get started once you have forked the repository:

```shell
git clone https://github.com/<your-name>/open-sauced
cd open-sauced
npm ci
```

Make sure to replace `<your-name>` with your GitHub username.

## Building

To generate a production-ready version of your code, run:

```shell
npm run build
```

## Testing

For running the test suite, use the following command:

```shell
# the tests will run in watch mode by default
npm test
```

Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to [install Watchman](https://facebook.github.io/watchman/docs/install.html).

Check out this course, [Testing JavaScript](https://testingjavascript.com/), for more info on testing React and JavaScript.

## Applying Lint Styleguide

To check the code for formatting and linting errors, run the following command:

```shell
npm run lint
```

These errors will also be displayed during development but won't prevent the code from compiling.

To fix the formatting and linting errors, run the following command instead:

```shell
npm run format
```

These commands use [ESLint](https://eslint.org/) to check and fix the code.

If you forget to run this command, automated PR checks will also run these commands, but the PR will be blocked if there are any errors.

## Pull Requests (PR)

**_We actively welcome your pull requests; however, linking your work to an existing issue is preferred._**

1. Fork the repo and create your branch from the default branch.
2. Name your branch to something descriptive of the work you are doing. i.e., `adds-new-thing` or `fixes-mobile`.
3. If you've added code that should be tested, add tests.
4. If you've changed APIs, update the documentation.
5. If you make visual changes, screenshots are required.
6. Ensure the test suite passes.
7. Make sure you address any lint warnings.
8. If you improve the existing code, please let us know in your PR description.
9. Completing the PR form is required. Make sure to fill the PR title, description, [link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls), and all the necessary areas. 

   - The title is required to begin with "feat:" or "fix:"
   - Unsolicited code is welcomed, but an issue is required to announce your intentions. PRs without a linked issue will be marked invalid and closed.

_**Note for maintainers**: All pull requests need a label to assist automation. See the [template](https://github.com/open-sauced/open-sauced/blob/HEAD/.github/release-drafter.yml) to guide which labels to use._

### PR Validation

Examples of valid PR titles:

- fix: Correct typo.
- feat: Add support for Node 12.
- refactor!: Drop support for Node 6.

_**Note**: Since PR titles only have a single line, you have to use the `!` syntax for breaking changes._

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

_[3 tips for getting your Pull Request reviewed on GitHub](https://youtu.be/cuMeC-eZJJ4)_

When contributing to OpenSauced projects, you can use this command to follow our conventional commits:

```shell
npm run push
```

Using the `npm run push` command is an interactive replacement for `git commit`. It enforces the conventional commit specification for writing commit messages, making it easier for developers and maintainers to understand the changes made in a particular commit.

Assuming you are dealing with code changes and you add them using `git add`, once you are ready to commit, there are two ways we can proceed: `git commit` or `npm run push`. The second method is preferred, as doing a subsequent `git push` and opening a PR would ensure the title conforms to our standards.

### Work in Progress

GitHub supports [draft pull requests](https://github.blog/2019-02-14-introducing-draft-pull-requests/), which will disable the merge button until the PR is marked as ready for merge.

## Issues

If you wish to work on an open issue, please comment on the issue with `.take`, and it will be assigned to you. If an issue is not assigned, it is assumed to be available for anyone to work on. Please assign yourself to an issue before working on it to avoid conflicts.

If you contribute to the project for the first time, you can check issues with [good first issue](https://github.com/open-sauced/hot/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) or [bug](https://github.com/open-sauced/hot/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) labels.

In case you get stuck, feel free to ask for help in the [Discord](https://discord.gg/U2peSNf23P) server or [GitHub Discussions](https://github.com/orgs/open-sauced/discussions).

Please follow our [code of conduct](./code-of-conduct.md) in all your interactions with the project and its contributors.

## Triage Team

The Triage team is inspired by [expressjs/express](https://github.com/expressjs/express/blob/HEAD/Triager-Guide.md). This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow this guide: [TRIAGE_GUIDE.md](./triage-guide.md)

> **There are no minimum requirements to become a member of the Triage Team.**

For those interested in getting involved in the project or just open source in general, please request an invite to the Triage Team in [this discussion.](https://github.com/open-sauced/open-sauced/discussions/638)

## Funding

OpenSauced is a part of GitHub Sponsors. If you would like to contribute, please note the [sponsor page](https://github.com/sponsors/open-sauced) for details on how funds are distributed. If you have made any contributions to the project directly or indirectly, please consider adding your profile to the [FUNDING.yml](https://github.com/open-sauced/.github/blob/main/FUNDING.yml).

## Community

Do you have questions? Join the conversation in our [Discord](https://discord.gg/U2peSNf23P).

## Coding Tips

- Ask questions if you are stuck.
- Use [CSS variables.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- Always use [rel="noreferrer" on all target="\_blank" links](https://web.dev/external-anchors-use-rel-noopener/).

## License

By contributing to the OpenSauced project, you agree that your contributions will be licensed
by a specific License. You can find this information in the `LICENSE` file of the repo you are contributing to.
