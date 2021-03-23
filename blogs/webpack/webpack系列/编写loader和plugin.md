---
title: webpack系列（四）编写loader和plugin
date: 2021-01-10
categories:
 - webpack
---

:::tip
1. [webpack系列（一）基础用法](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/基础用法.html)
2. [webpack系列（二）进阶用法](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/进阶用法.html)
3. [webpack系列（三）webpack构建速度和体积优化策略](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/webpack构建速度和体积优化策略.html)
4. [webpack系列（四）编写loader和plugin](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/编写loader和plugin.html)
:::

## loader

### loader的链式调用与执行顺序

定义：loader 只是一个导出为函数的 JavaScript 模块

```js
// 最简单的 loader
module.exports = function(source) {
  return source;
}; 
```

**链式调用，从后往前**

webpack 采用 Compose 形式 `compose = (f, g) => (...args) => f(g(...args));`

```js
// a-loader.js
module.exports = function(source) {
	console.log ('loader a is executed');
	return source;
};

// b-loader.js
module.exports = function(source) {
	console.log ('loader b is executed');
	return source;
};
```

执行 webpack 启动，命令行打印结果

```js
// loader b is executed
// loader a is executed
```

### 使用loader-runner高效进行loader的调试

定义: loader-runner 允许你在不安装 webpack 的情 况下运行 loaders

作用: 作为 webpack 的依赖，webpack 中使用它执行 loader；进行 loader 的开发和调试

使用方法：

```js
import { runLoaders } from "loader-runner";

runLoaders({
	resource: "/abs/path/to/file.txt?query",
	// String: Absolute path to the resource (optionally including query string)

	loaders: ["/abs/path/to/loader.js?query"],
	// String[]: Absolute paths to the loaders (optionally including query string)
	// {loader, options}[]: Absolute paths to the loaders with options object

	context: { minimize: true },
	// Additional loader context which is used as base context

	processResource: (loaderContext, resourcePath, callback) => { ... },
	// Optional: A function to process the resource
	// Must have signature function(context, path, function(err, buffer))
	// By default readResource is used and the resource is added a fileDependency

	readResource: fs.readFile.bind(fs)
	// Optional: A function to read the resource
	// Only used when 'processResource' is not provided
	// Must have signature function(path, function(err, buffer))
	// By default fs.readFile is used
}, function(err, result) {
	// err: Error?

	// result.result: Buffer | String
	// The result
	// only available when no error occured

	// result.resourceBuffer: Buffer
	// The raw resource as Buffer (useful for SourceMaps)
	// only available when no error occured

	// result.cacheable: Bool
	// Is the result cacheable or do it require reexecution?

	// result.fileDependencies: String[]
	// An array of paths (existing files) on which the result depends on

	// result.missingDependencies: String[]
	// An array of paths (not existing files) on which the result depends on

	// result.contextDependencies: String[]
	// An array of paths (directories) on which the result depends on
})
```

### 开发一个 raw-loader

将文件转换成 string

**raw-loader.js**

```js
module.exports = function(source) { 
  const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  return `export default ${json}`; 
};
```

**run-loader.js**

```js
const fs = require("fs");
const path = require("path");
const { runLoaders } = require("loader-runner");
runLoaders(
	{
		resource: "./src/demo.txt",
		loaders: [
			path.resolve(__dirname, "./loaders/raw-loader")
		],
		readResource: fs.readFile.bind(fs),
	},
	(err, result) => (err ? console.error(err) : console.log(result))
);
```

```text
test demo
```

**执行 node run-loader.js 结果**

```json
{ 
  result: [ 'export default "test demo"' ],
  resourceBuffer: <Buffer 74 65 73 74 20 64 65 6d 6f>,
  cacheable: true,
  fileDependencies: [ './src/demo.txt' ],
  contextDependencies: [],
  missingDependencies: [] 
}
```

### 使用loader-utils获取参数

```js
const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const options = loaderUtils.getOptions(this);
};
```

### loader 异常处理

1. loader 内直接通过 throw 抛出
2. 通过 this.callback 传递错误

### loader 的异步处理

通过 this.async 来返回一个异步函数 第一个参数是 Error，第二个参数是处理的结果

```js
module.exports = function(input) { 
	const callback = this.async();
	// No callback -> return synchronous results 
	// if (callback) { ... }
	callback(null, input + input); 
};
```

### loader 如何进行文件输出

```js
const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const url = loaderUtils.interpolateName(this, "[hash].[ext]", {
    content, 
  });
  this.emitFile(url, content);
  const path = `__webpack_public_path__ + ${JSON.stringify(url)};`;
  return `export default ${path}`; 
};
```

## plugin

### 基本结构

apply是必备的方法，webpack 执行时候是 `new MyPlugin().apply(compiler)`

```js
class MyPlugin {                                        // 名称
  apply(compiler) {                                     // apply方法
    compiler.hooks.done.tap('My Plugin', (stats) => {   // 插件hooks
      console.log('hello world')                        // 处理逻辑
    })
  }
}

module.exports = MyPlugin;
```

使用：`plugins: [ new MyPlugin() ]`

### 开发一个最简单的插件

**src/my-plugin.js**

```js
module.exports = class MyPlugin { 
  constructor(options) {
    this.options = options;
  } 
  apply() {
    console.log("apply", this.options);
  } 
};
```

**webpack.config.js**

```js
module.exports = {
  // ...
  plugins: [new MyPlugin({ name: "demo" })] 
};
```
