---
id: resolve-merge-conflicts
title: 'Resolve Merge Conflicts'
sidebar_label: Resolve Merge Conflicts
keywords:
  - resolve merge conflicts
---

You'll likely encounter merge conflicts when opening a pull request, as the release process generally updates `npm-shrinkwrap.json`.

To better illustrate the commands listed here, we will use commits and screenshots from [open-sauced#1078](https://github.com/open-sauced/open-sauced/pull/1078).

## Repository Setup

Fork and clone the project using the `gh` command line interface:

```shell
gh repo clone 0-vortex/open-sauced
```

Running `git remote -v` will output:

```shell
origin git@github.com:0-vortex/open-sauced.git (fetch)
origin git@github.com:0-vortex/open-sauced.git (push)
upstream git@github.com:open-sauced/open-sauced.git (fetch)
upstream git@github.com:open-sauced/open-sauced.git (push)
```

Fork and clone the project using the `git` command line interface:

```shell
git clone git@github.com:0-vortex/open-sauced.git
```

Running `git remote -v` will output:

```shell
origin git@github.com:0-vortex/open-sauced.git (fetch)
origin git@github.com:0-vortex/open-sauced.git (push)
```

As an additional step for this tutorial, we need to add the `upstream` remote:

```shell
git remote add upstream git@github.com:open-sauced/open-sauced.git
```

## Update

First, get the default branch changes:

```shell
git fetch origin --recurse-submodules=no --progress --prune
git checkout main --
git fetch upstream --recurse-submodules=no --progress --prune
git merge upstream/main --no-stat -v
```

## Merge with `upstream`

Then merge with the forked up-to-date `beta` (default branch):

```shell
git merge origin/main --no-ff -v
```

You will see something similar to:

![proper merge but results in conflicts](../../../static/img/contributing-resolve-merge-conflicts-merge-conflicts.png)

## Review Changes

To see what the changes are, run the command below:

```shell
git diff package.json
```

It will look like this:

![review merge conflicts](../../../static/img/contributing-resolve-merge-conflicts-review-conflicts.png)

## Resolve Conflicts

Since this pull request does not modify the `package.json` file, it is safe to fast-forward the changes from `origin/main`:

```shell
# overwrite with origin/main changes
git show :3:package.json > package.json
```

A more traditional way of doing the same thing is:

```shell
# make a local copy of all changes and use --theirs
# --theirs strategy overwrite with origin/main changes
git show :1:package.json > base.package.json
git show :2:package.json > branch.package.json
git show :3:package.json > head.package.json
git merge-file -p --theirs \
    branch.package.json base.package.json head.package.json > package.json
```

## Commit Changes

Not making any assumptions about editor preferences running this will open the configured editor with a default commit message:

```shell
git commit
```

That should look like this:

![commit merge message](../../../static/img/contributing-resolve-merge-conflicts-commit-message.png)

## Push Updated Pull Request

One more security check to make sure your branch has not diverged and push:

```shell
git status
git push
```

It should look something like this:

![push updated pr](../../../static/img/contributing-resolve-merge-conflicts-merge-success.png)

## Review Your Pull Request

The result of the above commands can be viewed at [283ff8cd788c550309ff0d1d5a9a5a97ec0731b2](https://github.com/open-sauced/open-sauced/pull/1078/commits/283ff8cd788c550309ff0d1d5a9a5a97ec0731b2)

GitHub will conveniently display only your merge conflict changes:

![view merge commit](../../../static/img/contributing-resolve-merge-conflicts-view-merge-commit.png)

And it's ready to merge:

![ready to merge](../../../static/img/contributing-resolve-merge-conflicts-ready-to-merge.png)

## Dependency Updates

When dealing with dependency and lock file updates, there are multiple use cases to consider; however, as a baseline, the OpenSauced triage team will not prioritize parallel main features as seen in the roadmap.

However when that happens, it is advised to:

- fast-forward `npm-shrinkwrap.json`
- fast-forward deleted and modified `upstream/beta` changes to `package.json`
- fast-forward your added lines to `package.json`
- run `npm ci` to delete local modules and create dependency resolution from `upstream/beta`

Visual diffing is advised; however, not following the git commit history procedure will result in a rogue pull request that creeps into dependency updates.

Generally speaking, just adding things to a lock file will not be troublesome, and since this is a licensed project, we should be careful when adding dependencies.