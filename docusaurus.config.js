const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Open Sauced',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.opensauced.pizza',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'open-sauced', // Usually your GitHub org/user name.
  projectName: 'docs.opensauced.pizza', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    algolia: {
      apiKey: '1691a4a5b06166984397aa30153f663c',
      indexName: 'opensauced',
      algoliaOptions: { 'facetFilters': ["type:$TYPE"] },
      debug: false,
      placeholder: 'Search Open Sauced Docs',
    },
    navbar: {
      logo: {
        alt: 'Open Sauced Logo',
        src: 'img/logo.svg',
        href: 'https://opensauced.pizza/'
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://opensauced.pizza/',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/open-sauced/docs.opensauced.pizza',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Contributing',
              to: '/contributing/getting-started/',
            },
            {
              label: 'Styling',
              to: '/styling/dark-mode/',
            },
            {
              label: 'Storybook',
              to: '/storybook/getting-started/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/open-sauced/open-sauced/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/U2peSNf23P',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/saucedopen',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://dev.to/opensauced',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Sauced. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
