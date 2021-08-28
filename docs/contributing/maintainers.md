# Maintainers Guide

## How do I Join the Maintainers Team?

1. Sign up for [opensauced.pizza](https://opensauced.pizza)
1. Join [discord](https://discord.gg/gZMKK5q). 
1. Prove your pizza worth!

## Requirements

For the purpose of this tutorial, our target demo repository will be called `open-sauced/npx-check-engines`.

The steps described here mirror [open-sauced/check-engines](https://github.com/open-sauced/check-engines).

The octoherd scripts assume you have exported a programatic token similar to:

```shell
export GH_TOKEN="ghp_Q8TZZT9ypgqw3EeABoCWPcwZBHpjZJ9hI42n"
```

## Creating a new repo

Don't spend too much time thinking of a name or a catchy description, just set license to MIT and rocket jump!

![create a new repository](../../static/img/contributing-maintainers-create-repository.png)

## Syncing settings with opensauced.pizza

Squashing pull requests is the minimum requirement but the other options are quite useful at various stages of development.

![minimum merge settings](../../static/img/contributing-maintainers-merge-settings.png)

Copy most of the relevant settings with:

```shell
npx octoherd-script-sync-repo-settings \
  --template "open-sauced/open-sauced" \
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

## Syncing branch protections with opensauced.pizza

This topic is more complex but in a sense tap the main branch and enable
everything except "Restrict who can dismiss pull request reviews" and "Restrict who can push to matching branches" in the first section.

![maximum merge protections](../../static/img/contributing-maintainers-merge-protections.png)

The "Rules applied to everyone including administrators" is more on an unused override.

Most of the time this process is super manual but in the limited cases where we need this run:

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

Other [development workflows](https://github.com/open-sauced/open-sauced/tree/main/.github/workflows) are less common and opinionated towards decentralised collaboration. Use these as example backbones for your new repository. 

## Setting up environments and secrets

As you may have noticed in the previous step or in the actions visualisations, the release workflows enable named environments.

These have to be manually set up, along with their secrets and branch protections.

![create environment](../../static/img/contributing-maintainers-env.png)

If using `npm` or `ghcr` it is likely you will add a couple variables here.
