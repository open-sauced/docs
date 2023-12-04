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
      label: "Getting Started",
      collapsed: false,
      items: [
        "welcome/opensauced-intro",
        "welcome/glossary",
        "welcome/faqs"
      ],
    },
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "features/highlights",
        "features/insights",
        "features/dev-card",
        "features/lists",
        "features/connections",
      ],
    },
    {
      type: "category",
      label: "Maintainers",
      collapsed: false,
      items: [
        "maintainers/maintainers-guide-to-open-sauced",
        "maintainers/understanding-insights",
        "maintainers/understanding-lists",
      ],
    },
    {
      type: "category",
      label: "Community",
      collapsed: false,
      items: [
        "community/welcome-to-the-community",
        "community/100-days-of-oss",
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsed: false,
      items: [
        "tools/hot-opensauced",
        "tools/pizza-cli",
        {
          type: "category",
          label: "Chrome Extension Usage",
          collapsed: true,
          items: [
            "tools/chrome-extension/introduction-to-the-chrome-extension",
            {
              type: "category",
              label: "Using the Chrome Extension",
              items: [
                {
                  type: "file",
                  label: "feature 1",
                  type: "doc",
                  id:"tools/chrome-extension/code-explanation",
                },
                {
                  type: "file",
                  label: "feature 2",
                  type: "doc",
                  id: "tools/chrome-extension/pr-description",
                },
                {
                  type: "file",
                  label: "feature 3",
                  type: "doc",
                  id: "tools/chrome-extension/highlights",
                },
                {
                  type: "file",
                  label: "feature 5",
                  type: "doc",
                  id: "tools/chrome-extension/refactoring-and-testing",
                },
                {
                  type: "file",
                  label: "feature 6",
                  type: "doc",
                  id: "tools/chrome-extension/viewing-insights-and-invitations",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Contributing Guide",
      collapsed: true,
      items: [
        "contributing/introduction-to-contributing",
        "contributing/code-of-conduct",
        "contributing/triage-guide",
        "contributing/set-up-authentication",
        "contributing/maintainers-guide",
        {
          type: "category",
          label: "Technical Guide",
          collapsed: true,
          items: [
            "contributing/technical/introduction-to-storybook",
            "contributing/technical/setup-repo-with-git",
            "contributing/technical/resolve-merge-conflicts",
          ],
        },
      ],
    },

    {
      type: "category",
      label: `OpenSauced Packages`,
      collapsed: true,
      items: [
        "opensauced-packages/check-engines",
        "opensauced-packages/conventional-commit",
        "opensauced-packages/semantic-release",
      ],
    },

  ],
};
