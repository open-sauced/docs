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
<<<<<<< HEAD
        'AppOpensauce/introduction-to-storybook',
        'AppOpensauce/dark-mode-explained',
        'AppOpensauce/fetching-data-from-github',
        'AppOpensauce/resolve-merge-conflicts',
=======
        'appopensauce/introduction-to-storybook',
        'appopensauce/dark-mode-explained',
        'appopensauce/fetching-data-from-github',
>>>>>>> 012a579 (fix: Move resolve-merge-conflicts to contributing and rename Appopensauce)
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
