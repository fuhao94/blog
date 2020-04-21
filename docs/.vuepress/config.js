// .vuepress/config.js
module.exports = {
  title: "ZhangFuHao",
  description: "Personal technical documentation blog",

  themeConfig: {
    sidebarDepth: 2,

    lastUpdated: "上次更新", // 文档更新时间

    // displayAllHeaders: true, // 显示所有标题链接

    sidebar: {
      "/note/": [
        {
          title: 'HTML && CSS', // 侧边栏名称
          children: [
            '/note/css/垂直居中布局'
          ]
        },
        {
          title: 'JavaScript', // 侧边栏名称
          children: [
            '/note/js/test'
          ]
        },
      ]
    },

    nav: [
      { text: "Home", link: "/" }, // 根路径
      { text: "Guide", link: "/guide/" }
    ]
  }
};
