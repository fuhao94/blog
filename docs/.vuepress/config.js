// .vuepress/config.js
module.exports = {
  base: "/blog/", // 仓库名字是blog

  title: "ZhangFuHao",
  description: "Personal technical documentation blog",

  themeConfig: {
    sidebarDepth: 2,

    lastUpdated: "上次更新", // 文档更新时间

    // displayAllHeaders: true, // 显示所有标题链接

    sidebar: {
      "/Frontend/": [
        "CSS" /* /Frontend/Css.html */,
        "" /* /Frontend/ */,
        "Vue" /* /Frontend/Vue.html */,
        "设计模式" /* /Frontend/设计模式.html */,
        "数据结构" /* /Frontend/数据结构.html */
      ]
    },

    nav: [
      { text: "Home", link: "/" }, // 根路径
      { text: "Guide", link: "/guide/" }
    ]
  }
};
