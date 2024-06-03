---
id: introduction-to-contributing
title: "Introduction to Contributing"
sidebar_label: "Introduction to Contributing"
keywords: 
- "introduction to contributing" 
- "Getting started with contributions" 
- "New contributor guide" 
- "How to contribute effectively" 
- "Contribution essentials" 
- "Open source contribution guide" 
- "Making your first contribution" 
- "Beginner-friendly contributions" 
- "Contributing to open source projects" 
- "Starting your contribution journey" 
- "First time contributor tips" 
---

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [Code of Conduct](./code-of-conduct.md) and follow the directions below:

## Recommended Communication Style

1. Always leave screenshots for visual changes.
2. Always leave a detailed description in the pull request. Leave nothing ambiguous for the reviewer.
3. Always review your code first. Run the project locally and test it before requesting a review.
4. Always communicate in the GitHub repository. Whether in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Issues

- If you wish to work on an open issue, please comment on the issue with `.take`, and it will be assigned to you.

  :::info

  If an issue is not assigned, it is assumed to be available for anyone to work on. Please assign yourself to an issue _before_ working on it to avoid conflicts.

  :::

- Issues with the `needs triage` label are unavailable to `.take` until they are triaged and the label is removed. Feel free to check on the issue regularly if you want to work on it.
- If you contribute to the project for the first time, you can search for issues with `good first issue` or `bug` labels in the repository.

  :::note

  **Please only self-assign a `good first issue` one time**. <br /> Maintainers may remove you from the assignees and not accept your pull request if you choose to proceed.

  :::

In case you get stuck, feel free to ask for help in the [Community](https://github.com/orgs/open-sauced/discussions/1) or [GitHub Discussions](https://github.com/orgs/open-sauced/discussions).

Please follow our [Code of Conduct](./code-of-conduct.md) in all your interactions with the project and its contributors.

## Commits

When contributing to OpenSauced projects, use this command to follow our conventional commits:

```shell
npm run push
```

The `npm run push` command is an interactive replacement for `git commit`. It enforces the conventional commit specification for writing commit messages, making it easier for developers and maintainers to understand the changes made in a particular commit.

After running this command, you can push your changes to the remote repo.

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

## Pull Requests (PR)

---

We actively welcome your pull requests. However, you must ensure that **you are assigned** to an existing issue before working on changes, and you need to **link your work to the issue** in your PR form.

---

1. Fork and clone the repo.
2. Creating a new branch is a must. Before working on your changes, create a new branch from the default (`main`, `beta`, etc.) branch. Name your branch with something descriptive of your work, i.e., `add-navbar` or `fix/broken-links`.
3. If you've added code that should be tested, add tests.
4. If you've changed APIs, update the documentation.
5. If you make visual changes, screenshots are required.
6. Ensure the test suite passes.
7. Make sure you address any lint warnings.
8. If you improve the existing code, please let us know in your PR description.
9. Completing the PR form is required. Make sure to fill in the PR title, description, [link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls), and all the necessary areas.

   - The title must begin with `feat:`, `fix:`, or anything related to your changes. <br /> **TIP:** You can follow your chosen option when [committing](#commits) your changes.

   - Unsolicited code is welcomed, but an issue is required to announce your intentions.

   > _**Note for maintainers:** All PRs need a label to assist automation. See [this guide](./triage-guide.md#adding-issue-and-pr-labels) to determine which labels to use._

:::warning

**PRs will be marked as invalid and may be closed if:**

- the issue is not assigned to the contributor who opened the PR
- no issue is linked to the PR
- PR form is incomplete, or any section in the form is deleted
- changes are made directly on the default (`main`, `beta`, etc.) branch

:::

### PR Validation

Examples of valid PR titles:

- fix: Correct typo.
- feat: Add support for Node 12.
- refactor!: Drop support for Node 6.

:::note

For any breaking changes, you have to use the `!` syntax.

:::

### Work in Progress

GitHub supports [draft pull requests](https://github.blog/2019-02-14-introducing-draft-pull-requests/), which will disable the merge button until the PR is marked as ready for merge.

### Additional Resources

- _[3 tips for getting your Pull Request reviewed on GitHub](https://youtu.be/cuMeC-eZJJ4)_

## Getting Started

### Setting Up Projects Locally

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository you're working on from [github/open-sauced](https://github.com/open-sauced) to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Check the project's README to determine how to run the project locally.

#### Additional Information

For many of our repositories, you'll run `npm ci` to install the dependencies and set up the project locally.

From the [npm official docs](https://docs.npmjs.com/cli/v10/commands/npm-ci#description):

> The `npm ci` is a command that installs a project with a clean slate, skipping certain user-oriented features and being more strict than `npm install`.

You can also use the shell commands below to get started once you have forked the repository:

```shell
git clone https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
npm ci
```

Make sure to replace `<GITHUB_USERNAME>` with your GitHub username.

### Building

To generate a production-ready version of your code, run:

```shell
npm run build
```

### Testing

For running the test suite, use the following command:

```shell
# the tests will run in watch mode by default
npm test
```

Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to [install Watchman](https://facebook.github.io/watchman/docs/install.html).

Check out this course, [Testing JavaScript](https://testingjavascript.com/), for more info on testing React and JavaScript.

### Applying Lint Styleguide

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

### Coding Tips

- Ask questions if you are stuck.
- Use [CSS variables.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- Always use [rel="noreferrer" on all target="\_blank" links](https://web.dev/external-anchors-use-rel-noopener/).

## Community

Do you have questions? Join the conversation in our [Community](https://github.com/orgs/open-sauced/discussions/1).

:::info

**IMPORTANT** <br /> Please do not DM Maintainers or contact them outside of GitHub if you want a PR Review. If you haven't received a review within a week, please tag them in the PR comments to ask for an estimated time of review.

:::

## Funding

OpenSauced is a part of GitHub Sponsors. If you would like to contribute, please note the [sponsor page](https://github.com/sponsors/open-sauced) for details on how funds are distributed. If you have made any contributions to the project directly or indirectly, please consider adding your profile to the [`FUNDING.yml`](https://github.com/open-sauced/.github/blob/main/FUNDING.yml) file.

## License

By contributing to the OpenSauced project, you agree that your contributions will be licensed
by a specific License. You can find this information in the `LICENSE` file of the repo you are contributing to.
