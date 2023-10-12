---
id: setup-repo-with-git
title: Setting up a repository with Git and GitHub
sidebar_label: Setting up a repository with Git and GitHub
keywords:
  - Setting up a repository with Git and GitHub
---

## Using the GitHub CLI

### How to install the GitHub CLI

The [GitHub CLI](https://cli.github.com/) allows you to fork repositories, create issues, pull requests, and more from the command line.

The GitHub CLI can be installed on Mac, Windows or Linux. You can find the complete installation instructions [here](https://github.com/cli/cli#installation).

### How to authenticate with the GitHub CLI

From the terminal, you will need to authenticate with the GitHub CLI. You can do this by running the following command:

```shell
gh auth login
```

Follow the on screen prompts to authenticate with the GitHub CLI.

### How to fork and clone a repository with the GitHub CLI

A fork is a copy of a repository and it allows you to freely experiment with changes without affecting the original project.

A clone is a local copy of a repository that includes all the files, branches, and commits.

To fork and clone a repository with the GitHub CLI, run the following command:

```shell
gh repo fork open-sauced/REPO_NAME
```

The GitHub CLI will fork the project in your GitHub account and will ask you if you want to clone the repository on your local machine.

### How to view the remote repositories locally

To view the remote repositories that your local repository is connected to, run the following command:

```shell
git remote -v
```

You should see the following output:

```shell
origin git@github.com:YOUR_GITHUB_USERNAME/open-sauced.git (fetch)
origin git@github.com:YOUR_GITHUB_USERNAME/open-sauced.git (push)
upstream git@github.com:open-sauced/open-sauced.git (fetch)
upstream git@github.com:open-sauced/open-sauced.git (push)
```

### How to add a remote repository

To pull in changes from the original repository, you will need to add a remote repository. To do this, run the following command:

```shell
git remote add upstream git@github.com:open-sauced/open-sauced.git
```

This will allow you to pull in changes from the original repository and keep your forked copy of the repository up to date.

## Using the GitHub website and the command line

If you prefer to setup your repository using the GitHub website and the command line, then you can follow this detailed guide from the [official GitHub documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
