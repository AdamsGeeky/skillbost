// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GDSC GSU',
  tagline: 'Connect Learn And Growth',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gdscgsu.web.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-B7JVLTQ7YF',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/GDSC-GSU',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/GDSC-GSU',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme:  {light: 'neutral', dark: 'forest'}
          },
      // Replace with your project's social card
      image: 'img/logo.png',
      metadata: [
        
      ],
       // Announcement  
       announcementBar: {
        id: 'announcementBar-1', // Increment on change
        isCloseable: false,
        content: 
         'Join SkillBoost Today ! <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/KP13Ym7bWRnDeNPx7">Register here</a>',
         backgroundColor: 'orange',
        //  #4fddbf ,#fafbfc
         textColor: 'black',
        //  `⭐️️⭐️️⭐️️⭐️️⭐️️`,
      },
      navbar: {
        title: 'GDSC GSU',
        logo: {
          alt: 'GDSC GSU',
          src: 'img/log.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Resources',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/GDSC-GSU',
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
                label: 'Resources',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://chat.whatsapp.com/IhAlIg7g0NZFOB4qriXlZ6',
              },
              {
                label: 'Linkdin',
                href: 'https://www.linkedin.com/company/gdsc-gombe-state-university/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gdsc_gsu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GDSC-GSU',
              },
            ],
          },
        ],
        logo: {
          alt: 'GDSC GSU Logo',
          src: '/img/logo.png',
          href: 'https://gdsc.community.dev/gombe-state-university/',
      
        },
        copyright: `Copyright © ${new Date().getFullYear()} GDSC GSU`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
