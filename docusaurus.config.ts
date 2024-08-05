import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "xibitdigital";
const projectName = "ai-ops-documentation";
// Determine if we're using the custom domain based on the CNAME file
// const fs = require('fs');
// const path = require('path');
// const cnamePath = path.join(__dirname, 'static', 'CNAME');
// const customDomain = fs.existsSync(cnamePath)
//   ? fs.readFileSync(cnamePath, 'utf8').trim()
//   : null;
const customDomain = true

const config: Config = {
  title: 'Xibit Digital AI OPS',
  tagline: 'GitOps AI for pipelines',
  favicon: 'img/favicon.png',

  url: customDomain ? `https://ai-ops.xibitdigital.com` : `https://${organizationName}.github.io`,
  baseUrl: `/`,

  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo.png',
    navbar: {
      title: 'XBT - AI OPS',
      logo: {
        alt: 'Xibit Digital LTD',
        src: 'img/logo.png',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Xibit Digital, LTD.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
