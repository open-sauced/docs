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

## Workflow setup

## FAQ

## Contributing

We're always happy to onboard people into open source!

Check out the repository at [@open-sauced/semantic-release-conventional-config](https://github.com/open-sauced/semantic-release-conventional-config) ❤️
