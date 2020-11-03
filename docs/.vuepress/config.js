// .vuepress/config.js
module.exports = {
  base: "/blog/", // 仓库名字是blog

  title: "笔记",
  description: "随手笔记",

  themeConfig: {
    sidebarDepth: 1,

    lastUpdated: "上次更新", // 文档更新时间

    // displayAllHeaders: true, // 显示所有标题链接

    sidebar: {
      "/note/": [
        {
          title: '工具',
          children: [
            'tools/工具',
          ]
        },
        {
          title: 'HTML && CSS',
          children: [
            'css/选择器',
            'css/position',
            'css/太极图',
            'css/垂直居中布局'
          ]
        },
        {
          title: 'JavaScript',
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
            'js/判断数据类型',
            'js/数据不可变性',
            'js/let和const命令',
            'js/设计模式/设计模式',
            'js/垃圾回收和内存泄漏',
          ]
        },
        {
          title: 'Vue',
          children: [
            'vue/组件通信',
            'vue/首屏优化',
            'vue/spa&mpa',
            'vue/vuex/vuex',
            'vue/Virtual DOM',
            'vue/router/router',
            'vue/双向绑定/双向绑定',
            'vue/动态加载并注册组件',
            'vue/computed && watch',
          ]
        },
        {
          title: 'React',
          children: [
            'react/使用',
            'react/概念/高阶组件',
          ]
        },
        {
          title: 'Webpack',
          children: [
            'webpack/构建流程',
            'webpack/使用姿势',
            'webpack/HMR',
          ]
        },
        {
          title: '网络',
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
            'algorithm/高频',
            'algorithm/promise',
          ]
        },
        // {
        //   title: '面试题',
        //   children: [
        //     'interview/JS',
        //     'interview/H5',
        //     'interview/铃盛',
        //     'interview/美团',
        //     'interview/滴滴',
        //   ]
        // },
        {
          title: '总结',
          children: [
            'summary/20-09-02',
            'summary/nEqual-serving',
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
