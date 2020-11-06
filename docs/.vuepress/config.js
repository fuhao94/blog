const themeConfig = require('./menu');

module.exports = {
  base: "/blog/", // 仓库名字是blog

  title: "笔记",
  description: "随手笔记",

  themeConfig,

  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-checkbox'));
    }
  }
};
