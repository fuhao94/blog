---
title: Webpack - HMR热更新
date: 2020-11-06
categories:
 - Webpack
tags:
 - 热更新
---

## 流程

![流程图](https://pic1.zhimg.com/80/v2-f7139f8763b996ebfa28486e160f6378_1440w.jpg)

1. 当修改了一个或多个文件；

2. 文件系统接收更改并通知webpack；

3. webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；

4. HMR Server 使用webSocket通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；

5. HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

