// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suggestions Documentation',
  tagline:
    "The official documentation for the Suggestions bot. The most powerful suggestions feature set you'll find on Discord.",
  url: 'https://docs.suggestions.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/suggestionsbot/docs/tree/main/docs/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Suggestions Documentation',
        logo: {
          alt: 'Suggestions Bot Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
          },
          {
            to: 'coming-soon',
            label: 'Coming Soon',
            position: 'left',
          },
          {
            to: 'changelog',
            label: 'Changelog',
            position: 'left'
          },
          {
            href: 'https://suggestions.gg/',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://discord.gg/suggestions',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/suggestionsbot',
            label: 'Contribute',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Suggestions Documentation',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://suggestions.bot/discord',
              },
              {
                label: 'Twitter',
                href: 'https://suggestions.bot/twitter',
              },
              {
                label: 'YouTube',
                href: 'https://suggestions.bot/youtube',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/suggestionsbot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthony Collier`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      metadata: [
        {
          name: 'theme-color',
          content: '#ffd663',
        },
        {
          property: 'og:image',
          content: 'img/logo.png',
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: '15W1VT42Q2',

        // Public API key: it is safe to commit it
        apiKey: '31cb42386dcee6c62941330985512931',

        indexName: 'suggestions_dev',

        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
  clientModules: [require.resolve('./modules/discordComponents.js')],
  plugins: [],
};

module.exports = config;
