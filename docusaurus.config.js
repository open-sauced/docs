const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
// This is defined in the Netlify environment variables on the Netlify UI
const { ADD_SLASH_DOCS_TO_URL } = process.env;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "OpenSauced",
  tagline: "The path to your next Open Source contribution",
  url: ADD_SLASH_DOCS_TO_URL ? "https://opensauced.pizza" : "https://docs.opensauced.pizza",
  baseUrl: ADD_SLASH_DOCS_TO_URL ? "/docs/" : "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "open-sauced", // Usually your GitHub org/user name.
  projectName: "docs.opensauced.pizza", // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    metadata: [{name: 'keywords', content: 'open source, open source insights, OSS'}],
    algolia: {
      appId: "RH1WG3CUDK",
      apiKey: "ea723aba7d69f2f36feac9292f2d2fe9",
      indexName: "dev_docs_index",
      algoliaOptions: { facetFilters: ["type:$TYPE"] },
      debug: false,
      placeholder: "Search OpenSauced Docs",
    },
    navbar: {
      logo: {
        alt: "OpenSauced Logo",
        src: "img/logo_lightmode.png",
        srcDark: "img/logo_darkmode.png",
        href: "https://opensauced.pizza/",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          label: "Docs",
          position: "left",
        },
        {
          alt: "OpenSauced Logo",
          src: "img/logo.svg",
          href: "https://opensauced.pizza/",
        },
        {
          href: "https://dev.to/opensauced",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/open-sauced/docs.opensauced.pizza",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://discord.gg/U2peSNf23P",
          label: "Discord",
          position: "left",
        },
        {
          href: "https://opensauced.pizza/",
          label: "OpenSauced",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      logo: {
        alt: "OpenSauced Logo",
        src: "img/logo_lightmode.png",
        href: "https://opensauced.pizza/",
        height: 40,
      },
      style: "light",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Contributing guide",
              to: "/contributing/introduction-to-contributing/",
            },
            {
              label: "Open Source Courses",
              to: "https://intro.opensauced.pizza/#/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/orgs/open-sauced/discussions",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/U2peSNf23P",
            },
            {
              label: "X",
              href: "https://x.com/saucedopen",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://dev.to/opensauced",
            },
            {
              label: "Watch our feature demos",
              href: "https://www.youtube.com/playlist?list=PLHyZ0Wz_A44VRlE-YS9me5qxDNRgK5T3H"
             }
          
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenSauced. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/open-sauced/docs.opensauced.pizza/edit/main/",
          lastVersion: "current",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.svg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#313d3e",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/logo.svg",
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/logo.svg",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
};
