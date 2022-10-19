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
    'introduction',
    {
      type: 'category',
      label: 'Contributing guide',
      collapsed: false,
      items: [
        'contributing/introduction-to-contributing',
        'contributing/code-of-conduct',
        'contributing/triage-guide',
        'contributing/resolve-merge-conflicts',
      ],
    },
    {
      type: 'category',
      label: 'app.opensauced.pizza',
      collapsed: false,
      items: [
        'appOpensauced/introduction-to-storybook',
        'appOpensauced/dark-mode-explained',
        'appOpensauced/fetching-data-from-github',
      ],
    },
    {
      type: 'category',
      label: `Maintainer guide`,
      collapsed: true,
      items: [
        'maintainers/setting-up-a-new-repository',
        'maintainers/check-engines',
        'maintainers/conventional-commit',
        'maintainers/semantic-release',
      ]
    },
  ],
};
