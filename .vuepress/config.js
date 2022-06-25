const sidebar = require('./menu');

module.exports = {
  base: '/blog/',
  title: '博客',
  author: 'Jimmy',
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
    sidebar,
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
        link: 'https://github.com/fuhao94',
        icon: 'reco-github',
      },
    ],
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
    author: '黄焖Jimmy饭',
    authorAvatar: '/avatar.jpg',
    record: 'xxxx',
    startYear: '2020',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    '@vuepress-reco/vuepress-plugin-back-to-top': {},
    // '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
    //   theme: ['koharu', 'miku', 'z16', 'blackCat'],
    //   messages: {
    //     welcome: '欢迎来到 隔壁老张头 的博客',
    //     home: '心里的花，我想要带你回家。',
    //     theme: '好吧帅帅，希望你能喜欢我的其他小伙伴。',
    //     close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    //   }
    // }
  }
};
