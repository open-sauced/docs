---
id: pizza-action
title: "Pizza CLI Action"
sidebar_label: "Pizza Action"
keywords: 
- "codeowners" 
- "codeowners automation" 
- "CLI codeowners" 
- "GitHub Actions"
- "Codeowners GitHub Action"
---

To automatically update your CODEOWNERS file every week, you can use the OpenSauced Pizza GitHub Action. This action runs the Pizza CLI in a GitHub Actions workflow.

To set up the action:

1. Create a new file in your repository at `.github/workflows/pizza-action.yml`
2. Add the following content to the file:

```yaml
name: OpenSauced Pizza Action

on:
  schedule:
    # Run once a week on Sunday at 00:00 UTC
    - cron: "0 0 * * 0"
  workflow_dispatch: # Allow manual triggering

jobs:
  pizza-action:
    runs-on: ubuntu-latest
    steps:
      - name: Pizza Action
        uses: open-sauced/pizza-action@v2.3.0
        with:
          # optional and false by default
          commit-and-pr: "true"

```

This workflow will run the Pizza CLI's `generate codeowners ./` command once a week, ensuring your CODEOWNERS file stays up-to-date.

:::info

- The action uses `fetch-depth: 0` to ensure all historical commits are available for analysis.
- The `commit-and-pr` input determines whether to commit changes and create a pull request (default is `false`).
- You can customize the `pizza-args` input to pass different arguments to the Pizza CLI (default is `generate codeowners ./`).

:::

For more information about the Pizza Action, visit the [open-sauced/pizza-action repository](https://github.com/open-sauced/pizza-action).

### Troubleshooting

If you encounter the error "pull request create failed: GraphQL: GitHub Actions is not permitted to create or approve pull requests (createPullRequest)", go to your repository settings under the Actions section and check "Allow GitHub Actions to create and approve pull requests".