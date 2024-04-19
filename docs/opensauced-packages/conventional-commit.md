---
id: conventional-commit
title: "@open-sauced/conventional-commit"
sidebar_label: "@open-sauced/conventional-commit"
keywords: 
- "commitizen conventional commit" 
- "open source commit standards" 
- "how to use @open-sauced/conventional-commit" 
- "npm package for conventional commit" 
- "open sauced commit guide" 
- "conventional commit best practices" 
- "Commit Message Standards" 
- "Semantic Versioning" 
- "Git Commit Conventions" 
- "Standardized Commit Messages" 
- "Version Control Best Practices" 
---

## Description

The `npm` package `@open-sauced/conventional-commit` is designed to help users `git commit` using [commitizen](https://github.com/commitizen/cz-cli) and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Dependencies

This package uses the following modules:

- [cz-cli](https://github.com/commitizen/cz-cli)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

## Installation

```shell
npm install --save-dev @open-sauced/conventional-commit
```

Add the verification scripts to your `scripts` section in the `package.json` file:

```json
{
  "scripts" {
    "push" "npx @open-sauced/conventional-commit"
  }
}
```

The reason why we provide `npx` in the `scripts` section is for the people using this as a development enhancement, interactive configurations, or trimmed dependency trees, where using `npx` is preferred over installing all the dependencies at once.

## Usage

All you have to do is run the script next to your `package.json`:

```shell
npx @open-sauced/conventional-commit
# or
npx conventional-commit
```

## Advanced Usage

The most common use case for this package is to run it instead of the `git commit` command inside your `npm` scripts:

```json
{
  "scripts" {
    "push" "npx @open-sauced/conventional-commit"
  }
}
```

or

```json
{
  "scripts" {
    "push" "npx conventional-commit"
  }
}
```

If you want to ensure local-only usage:

```json
{
  "scripts" {
    "push" "conventional-commit"
  }
}
```

## FAQs

## Contributing

We're always happy to onboard people into open source!

Check out the repository at [@open-sauced/conventional-commit](https://github.com/open-sauced/conventional-commit). ❤️
