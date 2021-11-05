const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Open Sauced',
  tagline: 'The path to your next Open Source contribution',
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
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://dev.to/opensauced',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/open-sauced/docs.opensauced.pizza',
          label: 'GitHub',
          position: 'left',
        },
        {
          href: 'https://discord.gg/U2peSNf23P',
          label: 'Discord',
          position: 'left',
        },
        {
          href: 'https://opensauced.pizza/',
          label: 'Open Sauced',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Contributing guide',
              to: '/contributing/introduction-to-contributing/',
            },
            {
              label: 'Technical guide',
              to: '/technical/dark-mode-explained/',
            },
            {
              label: 'Maintainer guide',
              to: '/maintainers/setting-up-a-new-repository/',
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
            },
            {
              label: 'Download book',
              href: 'https://docs.opensauced.pizza/open-sauced-docs.pdf',
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
            'https://github.com/open-sauced/docs.opensauced.pizza/edit/main/',
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#313d3e',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.svg',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
