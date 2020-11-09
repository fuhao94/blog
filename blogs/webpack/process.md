---
title: Webpack - 构建流程
date: 2020-11-06
categories:
 - Webpack
tags:
 - 构建流程
---

> webpack的运行流程是一个串行的过程

- 初始化：开始构建，读取与合并配置参数，加载plugin，实例化编译器对象 compiler。
- 编译：从entry出发，每个module串行的调用对应的loader，查找每个module依赖的module，递归的进行编译过程
- 输出：把module组合成chunk，转换为文件，输出到文件系统。
