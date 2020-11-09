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
        link: 'https://github.com/isEddrick/blog',
        icon: 'reco-github',
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
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
};
