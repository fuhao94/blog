---
title: webpack系列（五）通过源码掌握webpack打包原理
date: 2021-01-08
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
5. [webpack系列（五）通过源码掌握webpack打包原理](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/通过源码掌握webpack打包原理.html)
6. [webpack系列（六）webpack系列（六）编写loader和plugins](https://iseddrick.github.io/blog/blogs/webpack/webpack系列/编写loader和plugins.html)
:::

## 从命令开始

webpack 最终找到 webpack-cli (webpack-command) 这个 npm 包，并且 执行 CLI

**node_modules\webpack\bin\webpack.js**

```js
// @ts-ignore
process.exitCode = 0; // 状态码 正常执行返回0

/** 运行某个命令 例如： npm install
 * @param {string} command process to run
 * @param {string[]} args commandline arguments
 * @returns {Promise<void>} promise
 */
const runCommand = (command, args) => {
	const cp = require("child_process");
	return new Promise((resolve, reject) => {
		const executedCommand = cp.spawn(command, args, {
			stdio: "inherit",
			shell: true
		});

		executedCommand.on("error", error => {
			reject(error);
		});

		executedCommand.on("exit", code => {
			if (code === 0) {
				resolve();
			} else {
				reject();
			}
		});
	});
};

/**
 * 判断某个包是否安装
 * @param {string} packageName name of the package
 * @returns {boolean} is the package installed?
 */
const isInstalled = packageName => {
	try {
		require.resolve(packageName);

		return true;
	} catch (err) {
		return false;
	}
};

// webpack 可用的 CLI: webpack-cli 和 webpack-command
const CLIs = [
	{
		name: "webpack-cli",
		package: "webpack-cli",
		binName: "webpack-cli",
		alias: "cli",
		installed: isInstalled("webpack-cli"),
		recommended: true,
		url: "https://github.com/webpack/webpack-cli",
		description: "The original webpack full-featured CLI."
	},
	{
		name: "webpack-command",
		package: "webpack-command",
		binName: "webpack-command",
		alias: "command",
		installed: isInstalled("webpack-command"),
		recommended: false,
		url: "https://github.com/webpack-contrib/webpack-command",
		description: "A lightweight, opinionated webpack CLI."
	}
];

// 判断两个CLI是否安装
const installedClis = CLIs.filter(cli => cli.installed);

if (installedClis.length === 0) {
  // 提示没有安装
  // 调用 runCommand 方法安装
  // ...
} else if (installedClis.length === 1) {
  // 使用已安装的那个CLI
} else {
  // 两个都安装 提示删除一个
  // @ts-ignore
  process.exitCode = 1;
}
```

## webpack-cli 做的事情

1. 引入 yargs，对命令行进行定制
2. 分析命令行参数，对各个参数进行转换，组成编译配置项
3. 引用webpack，根据配置项进行编译和构建

