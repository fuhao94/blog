---
title: Webpack
date: 2021-03-26
categories:
  - Webpack
---

## 执行过程

webpack的运行流程是一个串行的过程

- 初始化：开始构建，读取与合并配置参数，加载plugin，实例化编译器对象 compiler。
- 编译：从entry出发，每个module串行的调用对应的loader，查找每个module依赖的module，递归的进行编译过程
- 输出：把module组合成chunk，转换为文件，输出到文件系统。

[comment]: <> (## 有哪些文件系统、模块系统)

## module、chunk、bundle 区别

目录树

```
src/
├── index.css
├── index.html # 这个是 HTML 模板代码
├── index.js
├── common.js
└── utils.js
```

webpack 配置

```js
module.exports = {
  entry: {
    index: "../src/index.js",
    utils: '../src/utils.js',
  },
  output: {
    filename: "[name].bundle.js", // 输出 index.js 和 utils.js
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 创建一个 link 标签
          'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
        ],
      },
    ]
  },
  plugins: [
    // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件
    new MiniCssExtractPlugin({
      filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
    }),
  ]
}
```

打包结果

Asset | Size | Chunks | Chunk Names
---|---|---|---
favicon.ico | 33 Kib |  |  
index.bundle.css | 35 bytes | 0 | index
index.bundle.js | 1000 bytes | 0 |  index
index.html | 541 bytes |  |
utils.bundle.js | 1.05 Kib | 1 |  utils

**结论**

1. 对于一份同逻辑的代码，当我们手写下一个一个的文件，他们都是 module ；
2. module => webpack 进行打包时，webpack 会根据文件引用关系生成 chunk 文件，webpack 会对这个 chunk 文件进行一些操作；
3. webpack 处理好 chunk 文件后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。

ps: 一般来说，一个 chunk 生成一个 bundle， utils.js -> chunks 1 -> utils.bundle.js；但也有例外，如：index.bundle.css

我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。

## HMR

1. 当修改了一个或多个文件，文件系统接收更改并通知webpack；
3. webpack compiler重新编译构建一个或多个模块，并通知HMR服务器进行更新；
4. HMR Server 使用 webSocket 通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；
5. HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

## sourceMap

sourceMap 是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，
sourceMap 可以帮助我们快速定位到源代码的位置，提高我们的开发效率。
sourceMap 其实并不是 Webpack 特有的功能，而是 Webpack 支持 sourceMap，像 JQuery 也支持 sourceMap。

映射表通常以 `.map` 结尾，大概为：

```
{
  "version" : 3,                          // Source Map版本
  "file": "out.js",                       // 输出文件（可选）
  "sourceRoot": "",                       // 源文件根目录（可选）
  "sources": ["foo.js", "bar.js"],        // 源文件列表
  "sourcesContent": [null, null],         // 源内容列表（可选，和源文件列表顺序一致）
  "names": ["src", "maps", "are", "fun"], // mappings使用的符号名称列表
  "mappings": "A,AAAB;;ABCDE;"            // 带有编码映射数据的字符串
}
```

mappings 规则

* 生成文件中的一行的每个组用“;”分隔；
* 每一段用“,”分隔；
* 每个段由1、4或5个可变长度字段组成；

**development 开发模式下，每个 __webpack_modules__ 文件模块的代码最末端，都会加上 `//# sourceURL=webpack://file-path?`，从而实现对 sourceMap 的支持**
