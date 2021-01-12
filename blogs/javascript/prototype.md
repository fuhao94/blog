---
title: 原型链
date: 2020-11-06
categories:
 - JavaScript
tags:
 - 原型链
---

### 定义

原型链是一种机制，指的是JavaScript每个对象 包括原型对象 都有一个内置的[[proto]]属性指向创建它的函数对象的原型对象，即prototype属性。 原型链的存在，主要是为了实现对象的 继承。

> 首先，我们来讲讲浏览器的初始状态，就是在无代码的情况下，浏览器所分配到的内存的使用情况，首先浏览器会创建一个全局对象global，而在这个全局对象global内含有许多的全局函数，例如global.parseInt、global.parseFloat、global.Number、global.String、global.Boolean、global.Object等等，函数也是对象的一种，因此也会具有属性，其中一种属性为prototype，这个属性的含义便是函数的原型对象

1. `prototype`是函数的原型对象，即`prototype`是一个对象，它会被对应的`__proto__`引用
2. 要知道自己的`__proto__`引用了哪个`prototype`，只需要看看是哪个构造函数构造了你，那你的`__proto__`就是那个构造函数的`prototype`。
3. 所有的构造函数的原型链最后都会引用`Object`构造函数的原型，即可以理解Object构造函数的原型是所有原型链的最底层，即`Object.prototype.__proto===null`

> 补充：__proto__ 是原型,prototype是函数默认的一个属性,它指向一个对象,这个对象的constructor属性指向函数本身.


## 例子

### 第一道：

```js
Object.__proto__ === ????填空???? // 为 true
```

求Object.__proto__，首先你要知道Object是什么数据类型，他是一个构造函数，也就是一个函数，来复习一下我们的第二句话，函数由哪个构造函数构造出来？那不是废话吗，当然是Function，因此很明显，答案就是：

```js
Object.__proto__ === Function.prototype // 为 true
```

### 第二道

```js
Function.__proto__ === ????填空???? // 为 true
```

求`Function.__proto__`，一样，你要先清楚`Function`是什么数据类型，他同样是一个构造函数，是来用来创建（构造）一个函数的构造函数（- -!有点拗口），所以同样的，用我们的第二句话即可解决，这个构造函数同样是函数，因此答案就是：

```js
Function.__proto__  === Function.prototype // 为 true
```

### 第三道

```js
true.__proto__ === ????填空???? // 为 true
```

求`true.__proto__`，有没有感觉是换汤不换药，`true`是什么数据类型，`Boolean`嘛，因此它是由构造函数Boolean构造出来的，所以答案显而易见：

```js
true.__proto__ === Boolean.prototype // 为 true
```

### 第四道

```js
Function.prototype.__proto__ === ????填空???? // 为 true
```

求`Function.prototype.__proto__`，好了，这里需要第一句话和第二句话一起用了，首先根据第一句话，prototype是一个对象，然后根据第二句话，那么既然它是一个对象，他的构造函数很明显就是`Object`，因此答案也呼之欲出了：

```js
Function.prototype.__proto__ ===Object.prototype // 为 true
```

### 第五道

```js
function Test(){}
var test=new Test()
test.__proto__===????填空???? // 为 true
```

```js
test.__proto__===Test.prototype // 为 true
```

### 最后一道

```js
Object.prototype.__proto__===null
```
