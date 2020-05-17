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
            'css/选择器',
            'css/position',
            'css/太极图',
            'css/垂直居中布局'
          ]
        },
        {
          title: 'JavaScript篇',
          children: [
            'js/ES6',
            'js/class',
            'js/promise',
            'js/继承',
            'js/闭包',
            'js/防抖',
            'js/节流',
            'js/定时器',
            'js/原型链',
            'js/深浅拷贝',
            'js/构造函数',
            'js/事件机制',
            'js/数组处理',
            'js/类型判断',
            'js/let和const命令',
            'js/垃圾回收和内存泄漏',
          ]
        },
        {
          title: 'Vue篇',
          children: [
            'vue/组件通信',
            'vue/首屏优化',
            'vue/spa&mpa',
            'vue/vuex/vuex',
            'vue/Virtual DOM',
            'vue/router/router',
            'vue/双向绑定/双向绑定',
          ]
        },
        {
          title: 'Webpack篇',
          children: [
            'webpack/构建流程',
            'webpack/使用姿势',
            'webpack/HMR',
          ]
        },
        {
          title: '网络篇',
          children: [
            'network/HTTP',
            'network/请求跨域',
            'network/常用请求头',
            'network/GET&POST区别',
            'network/三次握手四次挥手',
            'network/输入URL发生了什么',
            'network/服务端渲染vs客户端渲染',
          ]
        },
        {
          title: '算法',
          children: [
            'algorithm/排序',
            'algorithm/二分查找',
          ]
        },
        {
          title: '面试题',
          children: [
            'interview/JS',
            'interview/H5',
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
