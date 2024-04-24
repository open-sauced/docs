---
id: check-engines
title: "@open-sauced/check-engines"
sidebar_label: "@open-sauced/check-engines"
keywords: 
- "check engines"
---

## Description

The `npm` package `@open-sauced/check-engines` is designed to help contributors install dependencies conforming to the `engines` property in `package.json`.

## Dependencies

This package uses the following modules:

- [npm-install-checks](https://github.com/npm/npm-install-checks)

## Installation

```shell
npm install --save-dev @open-sauced/check-engines
```

Add the verification scripts to your `scripts` section in the `package.json` file:

```json
{
  "scripts": {
    "preinstall": "npx @open-sauced/check-engines"
  }
}
```

The reason why we provide `npx` in the `scripts` section is for the people using this as a development enhancement, interactive configurations or trimmed dependency trees, where using `npx` is preferred over installing all the dependencies at once.

## Usage

Use your favorite package manager to install dependencies in your project or, if you set it as a global verification system:

```json
{
  "scripts": {
    "check-engines": "npx @open-sauced/check-engines"
    "preinstall": "npm run check-engines",
    "prestart": "npm run check-engines"
  }
}
```

## Advanced Usage

If you have an API or any other non-library type of application, you can decouple this package from any install scripts and just use it as a verification:

```json
{
  "scripts": {
    "check-engines": "npx @open-sauced/check-engines"
    "prestart": "npm run check-engines"
  }
}
```

A more traditional approach not using `pre` or `post` scripts, this example enables the check only for local machine development:

```json
{
  "scripts": {
    "check-engines": "npx @open-sauced/check-engines"
    "start": "...",
    "dev": "npm run check-engines && npm start -- --watch"
  }
}
```

## FAQs

### Usage on an Older `node` and `npm` Versions

Older `node` and `npm` versions won't be able to run this package; depending on the versions, the scripts section could be ignored completely.

If you have that use case, this package is only worth enabling for progressive contributors frequently missing the legacy support of the respective module and forcefully upgrading dependencies - them running newer versions will force the error message and explicitly disable.

### Why Not Use `check-engines` or `engine-strict`?

As described in the `npm@6` [engine-strict docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#enginestrict):

> Prior to npm 3.0.0, this feature was used to treat this package as if the user had set `engine-strict`. It is no longer used.

In `npm@6` and later, this was re-introduced as a [config flag](https://docs.npmjs.com/cli/v7/using-npm/config#engine-strict).

This package is designed with multiple legacy use cases in mind.

### Library Usage

If you use this module in a library package, be advised that any `*install` script will run in the parent module when installed.

For example, given a module `@demo-org/demo-package` with a `preinstall: "npx @open-sauced/check-engines"` script, running `npm install @demo-org/demo-package` will require your locally installed `node` and `npm` versions to match the `engines` section of your `package.json`. If that is not set, nothing should happen, and this package is a stray dependency in either `@demo-org/demo-package` or the module you are running this command in.

## Contributing

We're always happy to onboard people into open source!

Check out the repository at [@open-sauced/check-engines](https://github.com/open-sauced/check-engines). ❤️
