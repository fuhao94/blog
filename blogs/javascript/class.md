---
title: 类的概念
date: 2020-11-06
categories:
 - Javascript
tags:
 - 类
---

## ES5的实现

先说说new一个构造函数发生了什么？

> 1. 创建一个空对象obj（{}）；
> 2. 将obj的[[prototype]]属性指向构造函数constrc的原型（即obj.[[prototype]] = constrc.prototype）。
> 3. 将构造函数constrc内部的this绑定到新建的对象obj，执行constrc（也就是跟调用普通函数一样，只是此时函数的this为新创建的对象obj而已，就好像执行obj.constrc()一样）；
> 4. 若构造函数没有返回非原始值（即不是引用类型的值），则返回该新建的对象obj（默认会添加return this）。否则，返回引用类型的值。

### 模拟实现new

```js
function myNew(constrc, ...args) {
    const obj = {}; // 创建一个空对象obj
    obj.__proto__ = constrc.prototype; // 将obj的[[prototype]]属性指向构造函数constrc的原型
    const result = constrc.apply(obj, args);
    return result instanceof Object ? result : obj;
}
```

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

const p = new Point(1, 2);
```

## ES6的class

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

// ES5 的构造函数Point，对应 ES6 的Point类的构造方法
Point === Point.prototype.constructor
```

