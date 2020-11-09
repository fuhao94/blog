---
title: 闭包
date: 2020-11-06
categories:
 - Javascript
tags:
 - 闭包
---

## 定义

「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。

## 例子

![image](https://pic4.zhimg.com/80/v2-2d16967becf2df18358d62a84d0595e7_1440w.jpg)

```js
function foo(){
  var local = 1
  function bar(){
    local++
    return local
  }
  return bar
}

var func = foo()
func()
```

这里面确实有闭包，local 变量和 bar 函数就组成了一个闭包（Closure）。

## 为什么要函数套函数呢？

闭包常常用来「间接访问一个变量」。换句话说，「隐藏一个变量」。

## 什么时候回收变量

在退出函数之前，将不使用的局部变量全部删除
