---
title: let 和 const 命令
date: 2020-11-06
categories:
 - JavaScript
tags:
 - 定义
---

## 区别

let与const都是只在声明所在的块级作用域内有。let声明的变量可以改变，值和类型都可以改变，没有限制。const声明的变量不得改变值,声明就必须立即初始化。

## 模拟实现

```js
// ES5实现let
(function(){
	var a = 1;
	console.log(a)
})();

// 实现const
function myConst(key, val) {
    window.key = val
    Object.defineProperty(window, key, {
        enumerable: false,
        configurable: false,
        get: function () {
            return val
        },
        set: function (value) {
            if (value !== val) {
                throw new TypeError('不能重复定义')
            } else {
                return val
            }
        }
    })
}
myConst('a',1)
a = 10 //Uncaught TypeError: 不能重复定义
```

[JS作用域](https://www.cnblogs.com/fundebug/p/10535230.html)
