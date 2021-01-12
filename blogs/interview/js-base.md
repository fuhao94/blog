---
title: JS 基础题
date: 2021-01-12
categories:
 - JavaScript
tags:
 - JavaScript
---

**BFC**

**原型链**

**typeof原理**

::: details 查看原理
js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息，如下所示

000：对象

010：浮点数

100：字符串

110：布尔

1：整数

null：所有机器码均为0

undefined：用 −2^30 整数来表示

js的typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待，这是自js诞生以来就一直留下的一个坑。
:::

**手写instanceOf**

```js
function instanceOf(a, b) {
  const L = a.__proto__;
  const R = b.prototype;
  if (L === null) { 
    return false;
  } 
  return  L === R;
}
```

**Map、weakMap**

Map: object 的一个升级，不局限于只能使用字符串作为键值，可以允许是，各种类型的值。

WeakMap: 其键值必须是一个对象，典型场合就是Dom节点作为键名。

**浏览器垃圾回收机制**

[垃圾回收和内存泄漏](https://iseddrick.github.io/blog/blogs/javascript/gc.html)

**源码部分 ： vue-router 、 vuex 、依赖收集(watcher、dep、数据更新时触发的时什么) 、 vue3.0 懒观察**

**eventLoop**

**防抖节流**

[防抖节流](https://iseddrick.github.io/blog/blogs/javascript/防抖节流.html)
