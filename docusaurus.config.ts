import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Suggestions Documentation',
  tagline:
      "The official documentation for the Suggestions bot. The most powerful suggestions feature set you'll find on Discord.",
  url: 'https://docs.suggestions.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          editUrl:
              'https://github.com/suggestionsbot/docs/tree/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve('docusaurus-plugin-fathom')],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    fathomAnalytics: {
      siteId: process.env.FATHOM_SITE_ID,
    },
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
          href: 'https://github.com/suggestionsbot/suggestions-bot',
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
            }
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
      copyright: `Copyright © ${new Date().getFullYear()} Oof Software Limited`,
    },
    metadata: [
      {
        name: 'theme-color',
        content: '#ffd663',
      },
      {
        property: 'og:image',
        content: 'img/logo.png',
      }
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '15W1VT42Q2',

      // Public API key: it is safe to commit it
      apiKey: '31cb42386dcee6c62941330985512931',

      indexName: 'suggestions',

      // Optional: see doc section below
      contextualSearch: true,
    },
    clientModules: [
      require.resolve('./modules/discordComponents.js'),
    ]
  } satisfies Preset.ThemeConfig,
};

export default config;
