// .vuepress/config.js
module.exports = {
  base: "/blog/", // 仓库名字是blog

  title: "张福浩",
  description: "随手笔记",

  themeConfig: {
    sidebarDepth: 1,

    lastUpdated: "上次更新", // 文档更新时间

    // displayAllHeaders: true, // 显示所有标题链接

    sidebar: {
      "/note/": [
        {
          title: 'HTML && CSS篇',
          children: [
            'css/垂直居中布局',
            'css/太极图'
          ]
        },
        {
          title: 'JavaScript篇',
          children: [
            'js/let和const命令',
            'js/构造函数',
            'js/深浅拷贝',
            'js/定时器',
            'js/原型链',
            'js/闭包',
            'js/防抖',
            'js/节流',
            'js/事件机制',
            'js/垃圾回收和内存泄漏',
            'js/数组处理',
            'js/promise',
          ]
        },
        {
          title: 'Vue篇',
          children: [
            'vue/双向绑定/双向绑定',
          ]
        },
        {
          title: 'Webpack篇',
          children: [
            'webpack/构建流程',
            'webpack/使用姿势',
          ]
        },
        {
          title: '网络篇',
          children: [
            'network/GET&POST区别',
            'network/HTTP状态码',
            'network/请求跨域',
            'network/浏览器加载过程',
          ]
        },
      ]
    },

    nav: [
      { text: "Home", link: "/" }, // 根路径
      { text: "Github", link: "https://github.com/isEddrick" }
    ]
  }
};
