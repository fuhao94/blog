---
title: React - 原理篇
date: 2020-11-06
author: 张福浩
categories:
 - React
tags:
 - React
---

# 原理

## 函数式编程（FP）

掌握 React 原理之前，不得不先了解下函数式编程。

![函数式编程](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e314b125aa6451b978bbf4fdc1dd58b~tplv-k3u1fbpfcp-zoom-1.image)

### 什么是函数式编程？

#### 举个🌰

```js
// 命令式
const fruitsName = [];
for (let i = 0; i < fruits.length; i++) {
  fruitsName.push(fruits[i].name);
}

// 声明式
const fruits = cars.map(fruit => fruit.name);
```

#### 为什么叫函数式编程？

数据可以不断的从一个函数的输出可以流入另一个函数输入，它其实就是强调在编程过程中把更多的关注点放在如何去构建关系。通过构建一条高效的建流水线，一次解决所有问题。而不是把精力分散在不同的加工厂中来回奔波传递数据。

#### 特点

##### 一等公民

这是函数式编程得以实现的前提：函数与其他数据类型一样，处于平等地位。

##### 声明式编程

声明我需要做什么，而非怎么去做

##### 惰性执行

函数只在需要的时候执行，即不产生无意义的中间变量

##### 无状态和数据不可变

这是函数式编程的核心概念

* **数据不可变**： 它要求你所有的数据都是不可变的，这意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象。
* **无状态**： 主要是强调对于一个函数，不管你何时运行，它都应该像第一次运行一样，给定相同的输入，给出相同的输出，完全不依赖外部状态的变化。

![函数式编程应具备的特性](https://user-gold-cdn.xitu.io/2019/9/5/16d00f438daa6474?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 没有副作用

我们函数中最主要的功能当然是根据输入**返回结果**，而在函数中我们最常见的副作用就是**随意操纵外部变量**

这里可以举个🌰（亲眼见过...）

```js
const data = [];
values.map(value => {
  data.push(value.label);
});
```

这样函数最主要的输出功能没有了，变成了直接修改了外部变量，这就是它的副作用。而没有副作用的写法应该是：

```js
const data = values.map(value => value.label);
```

> 传递引用一时爽，代码重构火葬场
> 
> 保证函数没有副作用，一来能保证数据的不可变性，二来能避免很多因为共享状态带来的问题。当你一个人维护代码时候可能还不明显，但随着项目的迭代，项目参与人数增加，大家对同一变量的依赖和引用越来越多，这种问题会越来越严重。最终可能连维护者自己都不清楚变量到底是在哪里被改变而产生 Bug。
  
##### 纯函数（pure functions）

纯函数的概念：

* **不依赖外部状态（无状态）**： 函数的的运行结果不依赖全局变量，`this` 指针，`IO` 操作等。

* **没有副作用（数据不变）**： 不修改全局变量，不修改入参。

纯函数的意义：

* 便于测试和优化：保证健壮性

* 可缓存性：相同的输入总是可以返回相同的输出。类似于 `memoize` 函数

* 自文档化：依赖很明确，更易于观察和理解

* 更少的 Bug：不存在指向不明的 this，不存在对全局变量的引用，不存在对参数的修改

### 柯里化（Currying）和函数组合（Compose）

#### 柯里化 

👇

`
f(a,b,c) → f(a)(b)(c)
`

容易跟 **部分函数应用** 混淆

```
// 柯里化
f(a,b,c) → f(a)(b)(c)
// 部分函数调用
f(a,b,c) → f(a)(b,c) / f(a,b)(c)
```

`lodash` `Ramda` 这些库里的curry是**高级柯里化**

#### 函数组合

```js
const compose = (f, g) => x => f(g(x))

const f = x => x + 1;
const g = x => x * 2;
const fg = compose(f, g);
fg(1) //3
```

模拟一个简化版 `compose`

```js
const compose = (...fns) => (...args) => fns.reduceRight((val, fn) => fn.apply(null, [].concat(val)), args);
```
### 总结

优点

* 代码简洁，开发快速
`
函数式编程大量使用函数的组合，函数的复用率很高，减少了代码的重复，因此程序比较短，开发速度较快。
`

* 接近自然语言，易于理解
`
函数式编程大量使用声明式代码，基本都是接近自然语言的，加上它没有乱七八糟的循环，判断的嵌套。
`
* 易于"并发编程"
`
函数式编程没有副作用
`

* 更少的出错概率
`
因为每个函数都很小，而且相同输入永远可以得到相同的输出，因此测试很简单，同时函数式编程强调使用纯函数，没有副作用，因此也很少出现奇怪的 Bug。
`

缺点

* 性能
`
函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销。同时，在 JS 这种非函数式语言中，函数式的方式必然会比直接写语句指令慢（引擎会针对很多指令做特别优化）。就拿原生方法 map 来说，它就要比纯循环语句实现迭代慢 8 倍。
`

* 资源占用
`
在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式。这在某些场合会产生十分严重的问题。
`

* 递归陷阱
`
在函数式编程中，为了实现迭代，通常会采用递归操作，为了减少递归的性能开销，我们往往会把递归写成尾递归形式，以便让解析器进行优化。但是众所周知，JS 是不支持尾递归优化的（虽然 ES6 中将尾递归优化作为了一个规范，但是真正实现的少之又少）
`

### 参考文章

[简明 JavaScript 函数式编程——入门篇](https://juejin.im/post/6844903936378273799#heading-0)