// .vuepress/config.js
module.exports = {
  title: "ZhangFuHao",
  description: "Personal technical documentation blog",

  themeConfig: {
    sidebarDepth: 1,

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
            '/note/js/let和const命令',
            '/note/js/构造函数',
            '/note/js/深浅拷贝',
            '/note/js/防抖',
            '/note/js/节流',
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
