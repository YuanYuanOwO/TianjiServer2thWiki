// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '天际正版公益服2周目Wiki',
  tagline: '欢迎来到天际服Wiki喵',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yuanyuanowo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TianjiServer2thWiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YuanYuanOwO', // Usually your GitHub org/user name.
  projectName: 'TianjiServer2thWiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/YuanYuanOwO/TianjiServer2thWiki/blob/main'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '天际正版公益服Wiki',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '开始',
          },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/YuanYuanOwO/TianjiServer2thWiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
            ],
          },
          {
            title: '服务器交流频道',
            items: [
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=ZHIBqXTe',
              },
              {
                label: 'Discord频道',
                href: 'https://discord.gg/8xH2a3vbnH',
              },
              {
                label: '渡渡DoDo频道',
                href: 'https://imdodo.com/s/243881',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'MCBBS宣传贴',
                href: 'https://www.mcbbs.net/thread-1390354-1-1.html',
              },
              {
                label: 'MC百科宣传贴',
                href: 'https://play.mcmod.cn/sv20186348.html',
              },
              {
                label: 'MyMCList宣传贴',
                href: 'https://mymclist.com/tianjifu-shengcungongyizhengbanfuwuqi',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} YuanYuanOwO, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
          docsRouteBasePath: "/"
        },
      ],
    ],
};

module.exports = config;
