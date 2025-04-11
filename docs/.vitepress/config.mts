import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "天际正版公益服Wiki",
  description: "天际正版公益服Wiki",
  cleanUrls: true,

  lastUpdated: true,
  sitemap: {
    hostname: 'https://wiki.tianjimc.com/'
  },

  lang: 'zh',
  appearance: true,


  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },
  themeConfig: {

    logo: '/favicon.ico',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: true,
    footer:{
      message: "～(∠・ω< )",
      copyright: 'Copyright © 2013-2025 YuanYuanOwO, All Rights Reserved.'
    },
    lastUpdated: {
      text: '上次更新'
    },
    outline: {
      'label': '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/YuanYuanOwO/TianjiServer2thWiki/edit/main/docs/:path',
      text: '帮助我们完善这个页面'
    },
    socialLinks: [
      { icon: 'qq', link: 'https://jq.qq.com/?_wv=1027&k=ZHIBqXTe'},
      { icon: 'discord', link:'https://discord.gg/8xH2a3vbnH'},
      { icon: 'github', link: 'https://github.com/YuanYuanOwO/TianjiServer2thWiki' }
    ],
    nav: [
      { text: '开始', link: '/welcome'},
      { text: '规定', link: '/rules'},
      { text: 'MineBBS宣传贴', link: 'https://www.minebbs.com/threads/1-21-4-11.34421/' },
      { text: 'MC百科宣传贴', link: 'https://play.mcmod.cn/sv20186348.html' },
      { text: '我的世界找服网宣传贴', link: 'https://www.mczfw.cn/server/881.html' }
    ],
    sidebar: [
      {
        text: '服务器介绍',
        items:[
          {
            text: '快速开始',
            link: '/welcome'
          },
          {
            text: '服务器规定',
            link: '/rules'
          }
        ]
      },
      {
        text: '服务器相关',
        items:[
          {
            text: '基本设定',
            link: '/server-related/core-rules',
          },
          {
            text: '招募',
            link: '/server-related/recruit'
          },
          {
            text: '小镇系统',
            link: '/server-related/town'
          },
          {
            text: '优化说明',
            link: '/server-related/optimization-notes'
          },
          {
            text: '捐助名单',
            link: '/server-related/donation-list'
          }
        ]
      },
      {
        text: '常见问题',
        link: '/faq',
        items:[
          {
            text: '进不去服务器',
            link: '/faq'
          },
          {
            text: '服务器为什么这么卡',
            link: '/faq#服务器为什么这么卡'
          },
          {
            text: '如何进行跨服',
            link: '/faq#如何进行跨服'
          },
          {
            text: '怎么赚钱',
            link: 'faq#怎么赚钱'
          },
          {
            text: '服务器人好少',
            link: 'faq#服务器人好少'
          }
        ]
      },
      {
        text: '插件教程',
        items:[
          {
            text: '全球市场',
            link: '/plugin-tutorial/global-market'
          },
          {
            text: '宠物系统',
            link: '/plugin-tutorial/pet'
          },
          {
            text: '常见指令',
            link: '/plugin-tutorial/command'
          },
          {
            text: '更多附魔',
            link: '/plugin-tutorial/more-enchant'
          },
          {
            text: '查询系统',
            link: '/plugin-tutorial/coreprotect'
          },
          {
            text: '箱子商店',
            link: '/plugin-tutorial/quickshop'
          },
          {
            text: '职业系统',
            link: '/plugin-tutorial/job'
          },
          {
            text: '誓约系统',
            link: '/plugin-tutorial/marry'
          },
          {
            text: '领地系统',
            link: '/plugin-tutorial/residence'
          }
        ]
      }
    ],
    search: {
      provider: 'local',
    }
  },
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },
  }
})
