---
title: webpack系列（四）webpack构建速度和体积优化策略
date: 2021-01-03
categories:
 - webpack
tags:
 - webpack
---

:::tip
1. [webpack系列（一）基础用法](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/基础用法.html)
2. [webpack系列（二）进阶用法](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/进阶用法.html)
3. webpack系列（三）编写可维护的webpack构建配置
4. [webpack系列（四）webpack构建速度和体积优化策略](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/webpack构建速度和体积优化策略.html)
5. webpack系列（五）通过源码掌握webpack打包原理
6. webpack系列（六）编写loader和plugins
:::

## 速度分析

使用 speed-measure-webpack-plugin

```js
// webpack.config.js
// 可以看到每个 loader 和 plugin 执行耗时
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasureWebpackPlugin();

const webpackConfig = smp.wrap({
  plugins: []
})
```

## 体积分析

使用 webpack-bundle-analyzer 可以分析出：
1. 依赖的第三方模块文件大小
2. 业务里面的组件代码大小

```js
// webpack.config.js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin() // 开启后，默认在8888端口查看
  ]
}
```

## 使用最新版本

V4带来的升级

1. V8 带来的优化(for of 替代 forEach、Map 和 Set 替代 Object、includes 替代 indexOf) 
2. 默认使用更快的 md4 hash 算法
3. webpacks AST 可以直接从 loader 传递给 AST，减少解析时间 
4. 使用字符串方法替代正则表达式


## 多进程/多实例构建

> webpack3 使用的 happyPack 已经不维护了

webpack4 自带的 thread-loader

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'thread-loader',
            worker: 3 
          },
          // your expensive loader (e.g babel-loader)
        ],
      },
    ],
  },
};
```

## 多线程并行压缩

terser-webpack-plugin

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 并发运行可以显著提高构建速度，因此强烈建议添加此配置 。
      }),
    ],
  },
};
```

## 进一步分包

方法: 使用 DLLPlugin 进行分包，DllReferencePlugin 对 manifest.json 引用

**webpack.dll.js**

::: details 点击查看代码
<<< @/blogs/webpack/webpack系列/config/webpack.dll.js
:::

**webpack.config.js**

```js
module.exports = {
  //...
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./build/library/library.json')
    })
  ]
}
```

## 使用缓存提升二次构建速度

1. babel-loader 开启缓存
2. terser-webpack-plugin 开启缓存
3. 使用 cache-loader 或者 hard-source-webpack-plugin

## 缩小构建目标

目的: 尽可能的少构建模块；比如 babel-loader 不解析 node_modules；

减少文件搜索范围：
1. 优化 resolve.modules 配置(减少模块搜索层级)
2. 优化 resolve.mainFields 配置
3. 优化 resolve.extensions 配置
4. 合理使用 alias

**webpack.config.js**

```js
module.exports = {
  //...
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/umd/react-dom.production.min.js'),
    },
    extensions: ['.js'],
    mainFields: ['main']
  }
}
```

## 构建体积优化：动态 Polyfill

Polyfill Service原理：识别 User Agent，下发不同的 Polyfill


polyfill.io 官方提供的服务

`<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>`

## 体积优化策略总结

1. Scope Hoisting 
2. Tree-shaking 
3. 公共资源分离 
4. 图片压缩
5. 动态 Polyfill

