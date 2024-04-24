---
id: semantic-release
title: "@open-sauced/semantic-release-conventional-config"
sidebar_label: "@open-sauced/semantic-release-conventional-config"
keywords: 
- "semantic release"
---

## Description

The `npm` package `@open-sauced/semantic-release-conventional-config` is designed to help `npm` packages auto-release to `npm` or [`ghcr`](https://ghcr.io) registries while generating GitHub releases and changelog using conventional commit convention.

Version 2 supports alpha and beta pre-releases using corresponding branches.

## Dependencies

This package uses the following modules:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@conventional-changelog/conventional-changelog`](https://github.com/conventional-changelog/conventional-changelog)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@google/semantic-release-replace-plugin`](https://github.com/google/semantic-release-replace-plugin)
- [`@cbhq/semantic-release-license`](https://github.com/cbhq/semantic-release-license)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@eclass/semantic-release-docker`](https://github.com/eclass/semantic-release-docker)
- [`@semantic-release/exec`](https://github.com/semantic-release/exec)
- [`execa`](https://github.com/sindresorhus/execa)

## 🖥️ Requirements

Most important limitations are:

- `GITHUB_TOKEN` for everything
- `NPM_TOKEN` for public `npm` library
- `docker` containers need to be built beforehand

You can skip here if you are using an elevated [Private Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). However, we don't recommend going down that path.

No force push or admin cherries branch protections for the following branches:

- `main` - required
- `alpha` - optional, pre-release branch
- `beta` - optional, pre-release branch
- `next` - optional, next channel
- `next-major` - optional, next major
- `vX[.X.X]` - maintenance releases

If you use more than the `main` branch, optionally create an environment that limits where pushes can come from and enable the merge strategy.

We use `production` in our examples; if you copy-paste them, you will find this new environment generated in your settings! 🍕

## 🧪 GitHub Actions Usage

Since version 3, it has been possible to use `semantic-release` without any trace of it or the OpenSauced configuration anywhere in the dependency tree.

Docker containers are pushed as part of the release, so they mirror the availability of `npm` packages.

The simplest use case for a typical `npm` package is almost zero install downtime from `ghcr` and no more local tooling:

```yaml
name: "Release container"

on:
  push:
    branches:
      - main

jobs:
  release:
    environment:
      name: production
      url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: "🚀 release"
        id: semantic-release
        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: "♻️ cleanup"
        run: |
          echo ${{ env.RELEASE_TAG }}
          echo ${{ env.RELEASE_VERSION }}
```

Marketplace actions should default to the major tag and are essentially more stable as we have to curate every release.

A more traditional approach, the only thing really different here is a minor pull overhead and using set outputs instead of environment variables:

```yaml
name: "Release"

on:
  push:
    branches:
      - main

jobs:
  release:
    environment:
      name: production
      url: https://github.com/${{ github.repository }}/releases/tag/${{ steps.semantic-release.outputs.release-tag }}
    name: Semantic release
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: "🚀 release"
        id: semantic-release
        uses: open-sauced/semantic-release-conventional-config@v3
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: "♻️ cleanup"
        run: |
          echo ${{ steps.semantic-release.outputs.release-tag }}
          echo ${{ steps.semantic-release.outputs.release-version }}
```

## 📦 `npm` Usage

You can opt to use this package in your local tooling. Proceed as you would normally would, replacing `npm` with your package manager of choice and install the package:

```shell
npm install --save-dev @open-sauced/semantic-release-conventional-config
```

The shareable config can then be configured in the [ `semantic-release` configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@open-sauced/semantic-release-conventional-config"
}
```

Now, all you need to do is create a release:

```shell
npx semantic-release
```

## 🔧 Configuration

See each plugin official documentation for the required installation and configuration steps.

### `npm`

Set `private` to true in `package.json` if you want to disable `npm` or change the scope of package using `publishConfig`.

Keep one of the `files` or `main` keys in your `package.json` accurate, depending on whether you are building a library or an application.

If you publish, make sure to also provide a valid `NPM_TOKEN`, as `.npmrc` authentication is ignored in our config!

### GitHub Actions

Unless you have an `action.yml` present in your root folder, this module is not added to the release config.

If you have an `action.yml` present, our config will attempt to adjust the container version to the newly pushed `npm` and `docker` tags.

### Docker

Unless you have a `Dockerfile` present in your root folder, this module is not added to the release config.

If you have a `Dockerfile` present, our config will attempt to push to `ghcr.io`.

### Environment Variables

Using our configuration comes with some sensible defaults:

- `DOCKER_USERNAME=$GITHUB_REPOSITORY_OWNER`
- `DOCKER_PASSWORD=$GITHUB_TOKEN`
- `GIT_COMMITTER_NAME="open-sauced[bot]"`
- `GIT_COMMITTER_EMAIL="63161813+open-sauced[bot]@users.noreply.github.com"`
- `GIT_AUTHOR_NAME` - parsed from commit `$GITHUB_SHA`
- `GIT_AUTHOR_EMAIL` - parsed from commit `$GITHUB_SHA`

Feel free to change any of the above to whatever suits your purpose. Our motivation is to keep `GITHUB_TOKEN` and/or `NPM_TOKEN` the only necessary requirements.

We are actively investigating ways to drop the two remaining variables as well!

## Workflow Examples

### Node Application

This example requires `"private": true,` in your `package.json` and simplifies the workflow to lightning-fast deployment:

```yaml
release:
  environment:
    name: production
    url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}
  name: Semantic release
  runs-on: ubuntu-latest
  steps:
    - name: "☁️ checkout repository"
      uses: actions/checkout@v2
      with:
        fetch-depth: 0

    - name: "🔧 setup node"
      uses: actions/setup-node@v2.1.5
      with:
        node-version: 16

    - name: "🔧 install npm@latest"
      run: npm i -g npm@latest

    - name: "📦 install dependencies"
      uses: bahmutov/npm-install@v1

    - name: "🚀 static app"
      run: npm run build

    - name: "🚀 release"
      id: semantic-release
      uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### `npm` Library

For `npm` libraries, we need to set the environment URL manually and set a `NPM_TOKEN` environment variable. This also disables `docker builds`:

```yaml
name: "Release"

on:
  push:
    branches:
      - main

jobs:
  release:
    environment:
      name: npm
      url: https://www.npmjs.com/package/@open-sauced/semantic-release-conventional-config/v/${{ env.RELEASE_VERSION }}
    name: Semantic release
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: "🔧 setup node"
        uses: actions/setup-node@v2.1.5
        with:
          node-version: 16

      - name: "🔧 install npm@latest"
        run: npm i -g npm@latest

      - name: "📦 install dependencies"
        uses: bahmutov/npm-install@v1

      - name: "🚀 release"
        id: semantic-release
        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

An up-to-date version of the example above is available at [@open-sauced/semantic-release-conventional-config](https://github.com/open-sauced/semantic-release-conventional-config/blob/main/.github/workflows/release.yml).

### Docker Image

For `docker builds`, it's best to build your node application in parallel with the container and re-use the artifact at a later stage:

```yaml
name: "Release"

on:
  push:
    branches:
      - main

jobs:
  docker:
    name: Build container
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2

      - name: "🔧 setup buildx"
        uses: docker/setup-buildx-action@v1

      - name: "🔧 cache docker layers"
        uses: actions/cache@v2
        with:
          path: /tmp/.buildx-cache
          key: ${{ runner.os }}-buildx-${{ github.sha }}
          restore-keys: |
            ${{ runner.os }}-buildx-

      - name: "🔧 docker meta"
        id: meta
        uses: docker/metadata-action@v3
        with:
          images: ${{ github.repository }}
          tags: latest

      - name: "📦 docker build"
        uses: docker/build-push-action@v2
        with:
          context: .
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          outputs: type=docker,dest=/tmp/docker.tar
          push: false
          cache-from: type=gha, scope=${{ github.workflow }}
          cache-to: type=gha, scope=${{ github.workflow }}

      - name: "📂 docker artifacts"
        uses: actions/upload-artifact@v2
        with:
          name: docker
          path: /tmp/docker.tar

  build:
    name: Build application
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2

      - name: "🔧 setup node"
        uses: actions/setup-node@v2.1.5
        with:
          node-version: 16

      - name: "🔧 install npm@latest"
        run: npm i -g npm@latest

      - name: "📦 install dependencies"
        uses: bahmutov/npm-install@v1

      - name: "📊 repository visualizer"
        id: diagram
        uses: githubocto/repo-visualizer@0.7.1
        with:
          excluded_paths: "node_modules,build,.storybook,.netlify,.github,npm-shrinkwap.json"
          output_file: "public/diagram.svg"
          should_push: false
          artifact_name: "diagram"

      - name: "🚀 static app"
        run: npm run build

      - name: "📂 production artifacts"
        uses: actions/upload-artifact@v2
        with:
          name: build
          path: build

  release:
    environment:
      name: production
      url: https://github.com/${{ github.repository }}/releases/tag/${{ env.RELEASE_TAG }}
    name: Semantic release
    needs:
      - docker
      - build
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: "📂 download docker artifacts"
        uses: actions/download-artifact@v2
        with:
          name: docker
          path: /tmp

      - name: "📦 load tag"
        run: |
          docker load --input /tmp/docker.tar
          docker image ls -a

      - name: "📂 download build artifacts"
        uses: actions/download-artifact@v2
        with:
          name: build
          path: /tmp/build

      - name: "🚀 release"
        id: semantic-release
        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

  cleanup:
    name: Cleanup actions
    needs:
      - release
    runs-on: ubuntu-latest
    steps:
      - name: "♻️ remove build artifacts"
        uses: geekyeggo/delete-artifact@v1
        with:
          name: |
            build
            docker
```

An up-to-date version of the example above is available at [open-sauced/open-sauced](https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/release.yml).

### Pre-Releases

This workflow requires the creation of `alpha` and `beta` protected branches while templating every commit to be conventional. It does not support squashing without creating extremely complex conflict resolution:

```yaml
name: "Release"

on:
  push:
    branches:
      - main
      - beta
      - alpha

jobs:
  release:
    environment:
      name: npm
      url: https://www.npmjs.com/package/open-sauced-semantic-config-test/v/${{ steps.release.outputs.version }}
    name: Semantic release
    runs-on: ubuntu-latest
    steps:
      - name: "☁️ checkout repository"
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: "🚀 release"
        id: semantic-release
        uses: docker://ghcr.io/open-sauced/semantic-release-conventional-config:3.0.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## FAQs

### Which Assets are Pushed to Git?

The following assets are added to git using `@semantic-release/git`:

```json
{
  "assets": [
    "LICENSE",
    "LICENSE.md",
    "COPYING",
    "COPYING.md",
    "CHANGELOG.md",
    "package.json",
    "package-lock.json",
    "npm-shrinkwrap.json",
    "public/diagram.svg",
    "action.yml"
  ]
}
```

### What is the Commit Convention?

The following commit rules are enforced by `@semantic-release/commit-analyzer`:

```json
{
  "preset": "conventionalcommits",
  "releaseRules": [
    { "type": "build", "release": "minor" },
    { "type": "ci", "release": "patch" },
    { "type": "docs", "release": "minor" },
    { "type": "style", "release": "patch" },
    { "type": "refactor", "release": "patch" },
    { "type": "test", "release": "patch" },
    { "type": "revert", "release": "patch" },
    { "type": "chore", "release": false }
  ],
  "parserOpts": {
    "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
  }
}
```

### How to Enrich the Static Distribution?

The following assets are packed into the github release download using `@semantic-release/github`:

```json
{
  "assets": [
    {
      "path": "pack/*.tgz",
      "label": "Static distribution"
    }
  ]
}
```

### How to Start Using Pre-Releases?

Create the `alpha` and/or `beta` branches and protect them from being deleted or pushed directly by non-administrators.

Switch your branching strategy to `merge` and enable conventional commits checking.

As described in the [semantic-releases recipes](https://github.com/semantic-release/semantic-release/tree/master/docs/recipes), you will have to resolve merge conflicts between `alpha`, `beta`, and `main` branches.

## Contributing

We're always happy to onboard people into open source!

Check out the repository at [@open-sauced/semantic-release-conventional-config](https://github.com/open-sauced/semantic-release-conventional-config). ❤️
