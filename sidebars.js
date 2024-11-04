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
      items: ["welcome/opensauced-intro", "welcome/key-metrics-guide", "welcome/glossary", "welcome/faqs"],
    },
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "features/star-search",
        "features/workspaces",
        "features/repo-insights",
        "features/contributor-insights",
        "features/repo-pages",
        "features/highlights",
        "features/dev-card",
      ],
    },
    {
      type: "category",
      label: "Guides to OpenSauced",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Job Seekers Guide",
          collapsed: true,
          items: [
            "opensauced-guides/job-seekers-guide/job-seekers-guide-introduction",
            "opensauced-guides/job-seekers-guide/how-to-translate-open-source-contributions-into-career-opportunities",
          ],
        },
        {
          type: "category",
          label: "Student's Guide",
          collapsed: true,
          items: ["opensauced-guides/students-guide/students-guide"],
        },
        {
          type: "category",
          label: "OSCR Score Guide",
          collapsed: true,
          items: ["opensauced-guides/oscr-score-guide/oscr-guide"],
        },
      ],
    },
    {
      type: "category",
      label: "Maintainers Guide to OpenSauced",
      collapsed: true,
      items: [
        "maintainers/maintainers-guide-to-open-sauced",
        "maintainers/understanding-repo-insights",
        "maintainers/understanding-contribs-insights",
      ],
    },
    {
      type: "category",
      label: "Contributors Guide to OpenSauced",
      collapsed: true,
      items: ["contributors/contributors-guide-to-open-sauced"],
    },
    {
      type: "category",
      label: "Community",
      collapsed: true,
      items: [
        "community/welcome-to-the-community",
        "community/100-days-of-oss",
        {
          type: "link",
          label: "Open Source Education Path",
          href: "https://opensauced.pizza/learn/#/",
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsed: true,
      items: [
        "tools/hot-opensauced",
        {
          type: "category",
          label: "Pizza CLI",
          collapsed: true,
          items: ["tools/pizza-cli/pizza-cli", "tools/pizza-cli/codeowners", "tools/pizza-cli/pizza-action"],
        },
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
                  label: "feature 3",
                  type: "doc",
                  id: "tools/chrome-extension/highlights",
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
        {
          type: "category",
          label: "OpenSauced Maintainers Guides",
          collapsed: true,
          items: [
            "contributing/opensauced-maintainers-guide/maintainers-guide",
            "contributing/opensauced-maintainers-guide/community-maintainers-guide",
          ],
        },
        "contributing/set-up-authentication",
        {
          type: "category",
          label: "Technical Guide",
          collapsed: true,
          items: ["contributing/technical/setup-repo-with-git", "contributing/technical/resolve-merge-conflicts"],
        },
        {
          type: "category",
          label: "OpenSauced Writers Guides",
          collapsed: true,
          items: ["contributing/opensauced-writers-guide/writers-guide"],
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
