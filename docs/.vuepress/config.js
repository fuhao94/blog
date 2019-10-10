// .vuepress/config.js
module.exports = {
  base: "/blog/", // 仓库名字是blog

  title: "Eddrick",
  description: "Personal technical documentation blog",

  themeConfig: {
    sidebarDepth: 2,

    nav: [
      { text: "Home", link: "/" }, // 根路径
      { text: "Guide", link: "/guide/" }
    ]
  }
};
