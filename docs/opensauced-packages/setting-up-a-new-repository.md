---
id: setting-up-a-new-repository
title: Setting up a new repository
sidebar_label: Setting up a new repository
keywords:
  - setting up a new repository
---


## Requirements

For the purpose of this tutorial, our target demo repository will be called `open-sauced/npx-check-engines`.

The steps described here mirror [open-sauced/check-engines](https://github.com/open-sauced/check-engines).

The octoherd scripts assume you have exported a programmatic token similar to:

```shell
export GH_TOKEN="ghp_Q8TZZT9ypgqw3EeABoCWPcwZBHpjZJ9hI42n"
```

## Creating a new repo

Don't spend too much time thinking of a name or a catchy description, just set the license to MIT and rocket jump!

![create a new repository](../../static/img/contributing-maintainers-create-repository.png)

## Syncing settings with opensauced.pizza

Squashing pull requests is the minimum requirement but the other options are quite useful at various stages of development.

![minimum merge settings](../../static/img/contributing-maintainers-merge-settings.png)

Copy most of the relevant settings with:

```shell
npx octoherd-script-sync-repo-settings \
  --template "open-sauced/app" \
  -T $GH_TOKEN \
  -R "open-sauced/check-engines"
```
Otherwise you can disable "Projects" and "Wikis" for the selected repository as we are handling them on a larger scale.

## Syncing labels with opensauced.pizza

The default labels have some missing emojis. Copy the rest with:

```shell
npx octoherd-script-copy-labels \
  --template "open-sauced/open-sauced" \
  -T $GH_TOKEN \
  -R "open-sauced/check-engines"
```
Then go back to your repository and delete:
- documentation
- 👀 needs-triage (green background one)
- other potential duplicates if the above race condition is different

> In this context, `race condition` refers to a situation where multiple labels are being deleted simultaneously. This can cause issues if the order in which the labels are deleted affects the final outcome. Therefore, it's important to ensure that the deletion of labels is properly synchronized and controlled to avoid any race conditions.

In other words, if two of the directories (e.g., `👀 needs-triage` and `documentation` are deleted at the same, it is possible that the third directory(`potential duplicates`) will not be deleted.
To avoid the `race condition`, the code must delete the directories in a specific order. For example, it could delete the `documentation directory` first, then the `👀 needs-triage` directory, and then the other `potential duplicates` directory.

## Syncing branch protections with opensauced.pizza

This topic is more complex but in a sense tap the main branch and enable
everything except "Restrict who can dismiss pull request reviews" and "Restrict who can push to matching branches" in the first section.

![maximum merge protections](../../static/img/contributing-maintainers-merge-protections.png)

The "Rules applied to everyone including administrators" is more of an unused override.

Most of the time, this process is super manual, but in the limited cases where we need this run:

```shell
npx @octoherd/script-sync-branch-protections \
  --template "open-sauced/open-sauced" \
  -T $GH_TOKEN \
  -R "open-sauced/check-engines"
```

## Setting up workflows

Most collaborative projects require [compliance flows](https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/compliance.yml) powered by [amannn/action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request) and [actions/first-interaction](https://github.com/actions/first-interaction).

Pull requests require [triage](https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/triage.yml) powered by [bdougie/take-action](https://github.com/bdougie/take-action).

Most `node` projects will require [release automation](https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/release.yml) powered by [@open-sauced/semantic-release-conventional-config](https://github.com/open-sauced/semantic-release-conventional-config).

Other [development workflows](https://github.com/open-sauced/open-sauced/tree/main/.github/workflows) are less common and opinionated towards decentralized collaboration. Use these as examples of backbones for your new repository.

## Setting up environments and secrets

As you may have noticed in the previous step or in the action visualizations, the release workflows enable named environments.

These have to be manually set up, along with their secrets and branch protections.

![create environment](../../static/img/contributing-maintainers-env.png)

If using `npm` or `ghcr`, it is likely you will add a couple of variables here.
