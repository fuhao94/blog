---
title: ES6新特性
date: 2020-11-06
categories:
 - JavaScript
tags:
 - es6
---

## Set

新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```js
const set = new Set([1, 2, 3, 4, 4]);
[...set] // [1, 2, 3, 4]

// 数组一行去重
Array.from(new Set([1,2,1]))
```

两个对象总是不相等的

```js
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

## Module

与CommonJS区别

1. CommonJS模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
