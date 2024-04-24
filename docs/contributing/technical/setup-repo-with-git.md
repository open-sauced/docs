---
id: setup-repo-with-git
title: "Setting Up a Repository with Git and GitHub"
sidebar_label: "Setting Up a Repository with Git and GitHub"
keywords: 
- "setting up a repository with Git and GitHub" 
- "working with git and github" 
- "GitHub repository creation" 
- "GitHub repository workflow" 
- "GitHub repository initialization" 
- "GitHub repository hosting" 
- "GitHub repository collaboration" 
- "GitHub repository version control" 
- "GitHub repository deployment" 
- "GitHub repository setup" 
---


## Using the GitHub CLI

### How to Install the GitHub CLI

The [GitHub CLI](https://cli.github.com/) allows you to fork repositories, create issues, pull requests, and more from the command line.

Follow these [instructions to install GitHub CLI](https://github.com/cli/cli#installation) on Mac, Windows, or Linux.

### How to Authenticate with the GitHub CLI

From the terminal, you will need to authenticate with the GitHub CLI. You can do this by running the following command:

```shell
gh auth login
```

Then, follow the prompts to authenticate with the GitHub CLI.

### How to Fork and Clone a Repository with the GitHub CLI

A fork is a remote copy of a repository, allowing you to experiment freely with changes without affecting the original project.

A clone is a local copy of a repository that includes all the files, branches and commits.

To fork and clone a repository with the GitHub CLI, run the following command:

```shell
gh repo fork open-sauced/<REPO_NAME>
```

The GitHub CLI will fork the project in your GitHub account and will ask you if you want to clone the repository on your local machine.

### How to Add a Remote Repository

Adding a remote repository allows you to pull in changes from the original repository and keep your forked copy of the repository up to date.

To add a remote repository, run the following command:

```shell
git remote add upstream https://github.com/open-sauced/app.git
```

### How to View the Remote Repositories Locally

To view the remote repositories that your local repository is connected to, run the following command:

```shell
git remote -v
```

You should see the following output:

```shell
origin git@github.com:YOUR_GITHUB_USERNAME/app.git (fetch)
origin git@github.com:YOUR_GITHUB_USERNAME/app.git (push)
upstream git@github.com:open-sauced/app.git (fetch)
upstream git@github.com:open-sauced/app.git (push)
```

## Using the GitHub Website and the Command Line

If you prefer to set up your repository using the GitHub website and the command line, follow this detailed guide from the [official GitHub documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
