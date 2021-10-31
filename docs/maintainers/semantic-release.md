# @open-sauced/semantic-release-conventional-config

## Description

The `npm` package `@open-sauced/semantic-release-conventional-config` is designed to help `npm` packages auto-release to `npm` or `ghcr` registries while generating github releases and changelog using conventional commit convention.

## Dependencies

This package uses the following modules:

- [`conventional-changelog-conventionalcommits`](https://github.com/conventional-changelog/conventional-changelog)
- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release-plus/docker`](https://github.com/semantic-release-plus/semantic-release-plus/tree/master/packages/plugins/docker)

## Installation

```shell
npm install --save-dev @open-sauced/semantic-release-conventional-config
```

Create a [release.config.js](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file) file and populate it with the preset:

```shell
module.exports = {
 extends: '@open-sauced/semantic-release-conventional-config',
};
```

## Usage

Add `semantic-release` to the `scripts` section to your `package.json` file:

```json
{
  "scripts": {
    "semantic-release": "npx semantic-release"
  }
}
```

The reason why we provide `npx` in the `scripts` section is for the people using this as a development enhancement, interactive configurations or trimmed dependency trees, where using `npx` is preferred over installing all the dependencies at once.

In your release step run the `semantic-release` script now:

```shell
npm run semantic-release
```

You can skip the `scripts` section however `semantic-release` will still be a peer dependency of `@open-sauced/semantic-release-conventional-config`. 

Like that it is enough to just run this command in the workflow:

```shell
npx semantic-release
```

## Configuration

Set `DISABLE_DOCKER` to any value if you want to disable the docker docker plugin.

Set `private` to true in `package.json` if you want to disable `npm` releases.

An example leveraging `node` and `docker` build artifacts can be found in [open-sauced](https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/release.yml). 

A few less inter dependent configurations will be described in the next section. 

## Workflow examples

### Node application

```yaml
release:
    environment:
      name: production
      url: https://github.com/${{ github.repository }}/releases/tag/v${{ steps.release.outputs.version }}
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
          node-version: 14

      - name: "🔧 setup cache"
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/npm-shrinkwrap.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: "🔧 install npm@latest"
        run: npm i -g npm@latest

      - name: "📦 install dependencies"
        run: npm ci

      - name: "🚀 static app"
        run: npm run build

      - name: "🚀 release"
        id: release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          DISABLE_DOCKER: true
          GIT_AUTHOR_NAME: ${{ github.event.commits[0].author.username }}
          GIT_AUTHOR_EMAIL: ${{ github.event.commits[0].author.email }}
        run: |
          npm run semantic-release
          echo "::set-output name=version::$(cat package.json | jq -r '.version')"
```

### Npm library

For `npm` libraries we need to set the environment URL manually and set a `NPM_TOKEN` environment variable.

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
      url: https://www.npmjs.com/package/@open-sauced/semantic-release-conventional-config/v/${{ steps.release.outputs.version }}
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
          node-version: 14

      - name: "🔧 setup cache"
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: "🔧 install npm@latest"
        run: npm i -g npm@latest

      - name: "📦 install dependencies"
        run: npm ci

      - name: "🚀 release"
        id: release
        env:
          DISABLE_DOCKER: true
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
          GIT_AUTHOR_NAME: ${{ github.event.commits[0].author.username }}
          GIT_AUTHOR_EMAIL: ${{ github.event.commits[0].author.email }}
        run: |
          npm run semantic-release
          echo "::set-output name=version::$(cat package.json | jq -r '.version')"
```

An up-to-date version of the example above is available at [@open-sauced/semantic-release-conventional-config](https://github.com/open-sauced/semantic-release-conventional-config/blob/main/.github/workflows/release.yml).

### Docker image

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

      - name: "📦 docker build"
        uses: docker/build-push-action@v2
        with:
          context: .
          tags: ${{ github.repository }}:latest
          outputs: type=docker,dest=/tmp/docker.tar
          push: false

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
          node-version: 14

      - name: "🔧 setup cache"
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/npm-shrinkwrap.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: "🔧 install npm@latest"
        run: npm i -g npm@latest

      - name: "📦 install dependencies"
        run: npm ci

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
      url: https://github.com/${{ github.repository }}/releases/tag/v${{ steps.release.outputs.version }}
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

      - name: "🔧 setup node"
        uses: actions/setup-node@v2.1.5
        with:
          node-version: 14

      - name: "🔧 setup cache"
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/npm-shrinkwrap.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: "🔧 install npm@latest"
        run: npm i -g npm@latest

      - name: "📦 install dependencies"
        run: npm ci

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
        id: release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          DOCKER_USERNAME: ${{ github.repository_owner }}
          DOCKER_PASSWORD: ${{ secrets.GITHUB_TOKEN }}
          GIT_AUTHOR_NAME: ${{ github.event.commits[0].author.username }}
          GIT_AUTHOR_EMAIL: ${{ github.event.commits[0].author.email }}
        run: |
          cp -R /tmp/build ./build
          npm run semantic-release
          echo "::set-output name=version::$(cat package.json | jq -r '.version')"

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

## FAQ

## Contributing

We're always happy to onboard people into open source!

Check out the repository at [@open-sauced/semantic-release-conventional-config](https://github.com/open-sauced/semantic-release-conventional-config) ❤️
