// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '天际正版公益服Wiki',
  tagline: '查询服务器的基本设定以及其它信息喵~',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.tianjimc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
        title: '天际服 Wiki',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            to: '/',
            position: 'left',
            label: '主页',
          },
          {
            type: 'doc',
            docId: '开始',
            position: 'left',
            label: '开始',
          },
          {
            type: 'doc',
            docId: '服务器相关/服务器规则',
            position: 'left',
            label: '规则',
          },
          // 搜索框
          {
            href: 'https://github.com/YuanYuanOwO/TianjiServer2thWiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
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
                to: '/开始',
              },
              {
                label: '规则',
                to: '/规则',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=ZHIBqXTe',
              },
              {
                label: 'Discord频道',
                href: 'https://discord.gg/8xH2a3vbnH',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
             {
               label: 'MineBBS宣传贴',
                href: 'https://www.minebbs.com/threads/1-21-4-11.34421/',
              },
              {
                label: 'MC百科宣传贴',
                href: 'https://play.mcmod.cn/sv20186348.html',
              },
             {
               label: '我的世界找服网宣传贴',
               href: 'https://www.mczfw.cn/server/881.html',
             },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © 2013-${new Date().getFullYear()} YuanYuanOwO, All Rights Reserved.`,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: 'light',
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
