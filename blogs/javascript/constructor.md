---
title: 构造函数
date: 2020-11-06
categories:
 - Javascript
tags:
 - new
---

## new Function()发生了什么

```js
function Person(name) {
    this.name = name;
}
const Tom = new Person('Tom');
```
1. const Tom = new Person('Tom');
2. Tom.__proto__ = Person.prototype; 实例Tom原型 指向 原型对象 Person
3. Person.call(Tom) 把Tom的this指向Person

## return值问题

```javascript
function Person(name) {
    this.name = name;
    return {} // new Person返回return的对象；
    // return '123' / 123 / Boolean 还是返回Person对象
}
```
