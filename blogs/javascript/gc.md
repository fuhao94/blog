---
title: 垃圾回收和内存泄漏
date: 2020-11-06
categories:
 - Javascript
tags:
 - GC
---

# 垃圾回收和内存泄漏

## 标记清除、引用计数

- 标记清楚：**这是javascript中最常用的垃圾回收方式**。当变量进入执行环境是，就标记这个变量为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到他们。当变量离开环境时，则将其标记为“离开环境”。
- 引用计数：所谓"引用计数"是指语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。

```js
// 引用计数有个最大的问题： 循环引用
function func() {
    let obj1 = {};
    let obj2 = {};

    obj1.a = obj2; // obj1 引用 obj2
    obj2.a = obj1; // obj2 引用 obj1
}
// 当函数 func 执行结束后，返回值为 undefined，所以整个函数以及内部的变量都应该被回收，但根据引用计数方法，obj1 和 obj2 的引用次数都不为 0，所以他们不会被回收。
// 要解决循环引用的问题，最好是在不使用它们的时候手工将它们设为空。上面的例子可以这么做：
obj1 = null;
obj2 = null;
```


## 哪些情况会引起内存泄漏？

1. 意外的全局变量 

启用严格模式解析 JavaScript ，避免意外的全局变量。

2. 被遗忘的计时器或回调函数

```js
// 如果id为Node的元素从DOM中移除，该定时器仍会存在，同时，因为回调函数中包含对someResource的引用，定时器外面的someResource也不会被释放。
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        // 处理 node 和 someResource
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
```

3. 闭包

```js
// 将事件处理函数定义在外部，解除闭包，或者在定义事件处理函数的外部函数中，删除对dom的引用。
// 将事件处理函数定义在外面
function bindEvent() {
  var obj = document.createElement('xxx')
  obj.onclick = onclickHandler
}
// 或者在定义事件处理函数的外部函数中，删除对dom的引用
function bindEvent() {
  var obj = document.createElement('xxx')
  obj.onclick = function() {
    // Even if it is a empty function
  }
  obj = null
}
```

4. 没有清理的DOM元素引用

## 垃圾回收的使用场景优化

1. 数组array优化；arr.length = 0 取代 arr = [];
2. 对象尽量复用；不用的对象，尽可能设置为null，尽快被垃圾回收掉。
3. 在循环中的函数表达式，能复用最好放到循环外面。
