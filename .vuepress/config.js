module.exports = {
  base: '/blog/',
  title: '博客',
  author: 'zhangfuhao',
  description: 'my blog',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '文档',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/',
          },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/isEddrick',
        icon: 'reco-github',
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
      "/blogs/": [
        {
          title: '小工具',
          children: [
            'tools/tools',
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
            'javascript/ES6',
            'javascript/class',
            'javascript/promise',
            'javascript/extend',
            'javascript/closure',
            'javascript/防抖节流',
            'javascript/settimeout',
            'javascript/prototype',
            'javascript/curry',
            'javascript/深浅拷贝',
            'javascript/constructor',
            'javascript/event',
            'javascript/数组操作',
            'javascript/判断数据类型',
            'javascript/immutability',
            'javascript/let-const',
            'javascript/设计模式/设计模式',
            'javascript/gc',
            'javascript/spa-mpa',
            'javascript/img-lazy-load',
            'javascript/ssr',
            'javascript/输入URL发生了什么',
          ]
        },
        {
          title: 'TypeScript',
          children: [
            'typescript/interface和type区别',
          ]
        },
        {
          title: 'Vue',
          children: [
            'vue/router',
            'vue/first-screen',
            'vue/binding/observer',
            'vue/vuex/vuex',
            'vue/virtual-dom',
            'vue/router',
            'vue/dynamic-loading',
            'vue/computed-watch',
          ]
        },
        {
          title: 'React',
          children: [
            'react/原理',
            'react/使用',
            'react/进阶',
            'react/hooks',
          ]
        },
        {
          title: 'Webpack',
          children: [
            'webpack/HMR',
            'webpack/tips',
            'webpack/process',
          ]
        },
        {
          title: '网络',
          children: [
            'network/http',
            'network/cross-domain',
            'network/request-headers',
            'network/get-post',
            'network/3-4',
          ]
        },
        {
          title: '算法',
          children: [
            'algorithm/promise',
            'algorithm/高频',
          ]
        },
        {
          title: '总结',
          children: [
            'summary/direction',
            'summary/fixed',
            'summary/todo',
            'summary/nEqual-serving',
          ]
        },
      ]
    },
    type: 'blog',
    valineConfig: {
      appId: 'Voq2t3M8hYFqYaBsCzctqnTz-gzGzoHsz',// your appId
      appKey: '2sOE468gTVJBuEEmWJJ23aI3', // your appKey
    },
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    friendLink: [
      {
        title: 'chenjiehan',
        desc: '厦门后端扛把子',
        logo:
          'https://chenjiehan-blog-1259331812.cos.ap-guangzhou.myqcloud.com/image/chenjihean-blog-avatar.jpeg',
        link: 'https://chenjiehan.club/',
      },
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新时间',
    author: 'zhangfuhao',
    authorAvatar: '/avatar.jpeg',
    record: 'xxxx',
    startYear: '2020',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    '@vuepress-reco/vuepress-plugin-back-to-top': {},
    '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
      theme: ['koharu', 'miku', 'z16', 'blackCat'],
      messages: {
        welcome: '欢迎来到zhangfuhao的博客',
        home: '心里的花，我想要带你回家。',
        theme: '好吧帅帅，希望你能喜欢我的其他小伙伴。',
        close: '你知道我喜欢吃什么吗？痴痴地望着你。'
      }
    }
  }
};
