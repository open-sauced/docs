/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        "community/welcome-to-the-community",
        "community/highlights",
        "community/100-days-of-oss",
        "community/faqs",
      ],
    },
    {
      type: "category",
      label: "Contributing guide",
      collapsed: false,
      items: [
        "contributing/introduction-to-contributing",
        "contributing/code-of-conduct",
        "contributing/triage-guide",
        "contributing/set-up-authentication",
      ],
    },
    {
      type: "category",
      label: "Technical guide",
      collapsed: false,
      items: ["technical/introduction-to-storybook", "technical/resolve-merge-conflicts"],
    },
    {
      type: "category",
      label: `Maintainer guide`,
      collapsed: true,
      items: [
        "maintainers/setting-up-a-new-repository",
        "maintainers/check-engines",
        "maintainers/conventional-commit",
        "maintainers/semantic-release",
      ],
    },
    {
      type: "category",
      label: "Chrome Extension Usage",
      collapsed: true,
      items: [
        "chrome-extension/introduction-to-the-chrome-extension",
        "chrome-extension/using-the-chrome-extension",
        {
          type: "category",
          label: "using the extension",
          items: [
            {
              type: "file",
              label: "feature 1",
              type: "doc",
              id: "ai-code-explanation"
            },
            {
              type: "file",
              label: "feature 2",
              path: "chrome-extension/generating-pr-descriptions.md",
              type: "markdown",
            },
            {
              type: "file",
              label: "feature 3",
              path: "chrome-extension/highlights.md",
              type: "markdown",
            },
            {
              type: "file",
              label: "feature 4",
              path: "chrome-extension/quick-access-to-opensauced-links.md",
              type: "markdown",
            },
            {
              type: "file",
              label: "feature 5",
              path: "chrome-extension/refactoring-and-testing.md",
              type: "markdown",
            },
            {
              type: "file",
              label: "feature 6",
              path: "chrome-extension/viewing-insights-and-invitations",
              type: "markdown",
            },
          ],
        },
      ],
    },
  ],
};
