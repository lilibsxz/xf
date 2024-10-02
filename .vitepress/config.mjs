import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-ling/",
  title: "一个普普通通的文档",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
   // 设置搜索框的样式
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },
    logo: '/风铃.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '云崽教程', items:[
        { text: 'Miao-Yunzai', link: '/Miao-Yunzai' },
        { text: 'TRSS-Yunzai', link: '/TRSS-Yunzai' },
        { text: 'FFmpeg安装', link: '/ffmpeg' },
        { text: '常见错误', link: '/error' }
      ]},
      { text: 'Linux教程', items:[
        { text: '基础工具安装', link: '/Linux' },
        { text: '常见问题', link: '/error1' }
      ]},
    ],

    sidebar: [
      {
        text: 'Windows教程',
        items: [
          { text: 'Miao-Yunzai', link: '/Miao-Yunzai' },
          { text: 'TRSS-Yunzai', link: '/TRSS-Yunzai' }
        ]
      },
      {
        text: 'Linux教程',
        items: [
          { text: 'Miao-Yunzai', link: '/Miao-Yunzai1' },
          { text: 'TRSS-Yunzai', link: '/TRSS-Yunzai1' }
        ]
      },
      {
        text: '安卓教程',
        items: [
          { text: 'Termux', link: '/Android' }
        ]
      },
      {
        text: '插件安装',
        items: [
          { text: 'Git', link: '/Git' },
          { text: '推荐插件', link: '/Plugin' },
         ]
      },
      {
        text: 'NTQQ(llonebot)',
        items: [
          { text: 'Win', link: '/llo' },
          { text: 'Linux', link: '/ncqq' }
         ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fl12352/' }
    ],
    footer:{
      copyright:"By 风铃文档 @2024",
    }
  }
})
