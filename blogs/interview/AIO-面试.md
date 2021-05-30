---
title: 招人啦~
date: 2021-05-18
keys:
- '670b14728ad9902aecba32e22fa4f6bd'
---

## JS

* 基本数据类型和引用数据类型区别；function是基本还是引用；
* this 指向问题；改变 this 指向有哪些方法？三者有什么区别？
* 显示绑定(`call/apply/bind/new`)和隐式绑定(`调用关系`)优先级
* setInterval 和 setTimeout 应用问题；setInterval 存在什么缺陷？
* 前端路由
* 单页应用vs多页应用
* 缓存方式有哪些？
  localStorage、sessionStorage、cookie
* 防抖节流使用场景，如何实现
* Map、Set、Symbol
* 继承的方法
* 设计模式知道哪些？常用的是？具体场景呢？
* 多次请求，只取最后一次数据
  * cancel request (XMLHttpRequest - cancel; axios - cancelToken)
  * 记录 requestId 渲染最后一个请求数据 
* 地址栏输入url之后发生什么

## Css

* display: none / opacity: 0 / visibility: hidden / pointer-events: none 作用是什么?
* 垂直居中实现方案
* BFC含义和应用
* z-index 什么时候会生效？
* % 相对于谁？ `height: 50%`
* rem vw vh 概念
* 生成主题色

::: details 点击查看代码
现给定一组颜色(如下)：
```less
@colors: { blue: #1890ff; purple: #722ed1; cyan: #13c2c2; }
```
```scss
$colors: ( blue: #1890ff, purple: #722ed1, cyan: #13c2c2 );
```
根据这组颜色生成主题颜色样式类(以下是最终生成的css)：
```css
.theme-blue { background: #1890ff }
.theme-purple { background: #722ed1 }
.theme-cyan { background: #13c2c2 }
```
```less
@colors: { blue: #1890ff; purple: #722ed1; cyan: #13c2c2; }

each(@colors, {
  .theme-@{key} {
    background: @value;
  }
});
```

```scss
$colors: ( blue: #1890ff, purple: #722ed1, cyan: #13c2c2 );

@each $name,$color in $colors {
  .theme-#{$name} {
    background: $color
  }
}
```
:::

## Html

* 介绍下你对浏览器内核的理解？你知道哪些内核和其所代表的浏览器呢？

## Vue

* 介绍下 virtual dom
* 生命周期介绍。DOM 在哪阶段挂载？
* computed && watch 区别 ？
* 双向绑定原理
* proxy 比较 Object.defineProperty 的优势
* Vuex 怎么修改状态？能直接改吗？
* diff 算法
* 请问下面代码在按下按钮的时候哪些 watch 监听器会触发。

::: details 点击查看代码
```js
<template>
  <div>
    <p>
      <button @click="setAccount">set account</button>
    </p>
    <h2>{{account.id}} - {{account.name}} <small>{{email}}</small></h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: {
          name: 'test',
          email: 'test@example.com'
      }
    }
  },

  computed: {
    email() {
      return this.account.email;
    }
  },

  watch: {
    ['account.name'](name) {
      console.log('name', name);
    },
    email(email) {
      console.log('email', email);
    }
  },

  methods: {
    setAccount() {
      this.account = {id: '233', name: 'test', email: 'test@example.com'}
    }
  }
}
</script>
```
:::

* 按下 `add random entrie` 按钮会出现什么情况？（freeze考察）

::: details 点击查看代码
```js
<template>
  <p>
    <button @click="addRandomEntries">add random entries</button>
  </p>
  <ul>
    <li v-for="entry in entries" :key="entry">
      {{entry}}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      entries: Object.freeze([])
    }
  },
  methods: {
    addRandomEntries() {
      this.entries.push(Math.random().toString())
    }
  },
}
</script>
```
:::

## React

为什么生命周期不需要绑定this 事件函数需要？

::: details 点击查看代码
```js
const obj = {
 name: 'Saurabh',
 display: function(){
   console.log(this.name);
  }
};

obj.display(); // 生命周期形式调用

var name = 'hello';
const outer = obj.display;
outer(); // 事件函数形式调用
```
:::

* JSX本质是什么？
  * 函数调用和表达式的语法糖
* 介绍下合成事件
* set state里面合成事件为什么是异步的？
* 介绍下 virtual dom，key 是否加了一定性能更好？
* react fiber
* redux 单向数据流
  * 核心概念：store、action（一定要有type字段）、reducer（根据type字段返回新state，state一定要用不可变值）
  * store调用dispatch(),发起一个action，通过reducer接收action，和旧的state。最终返回新的state。
* 为什么会有 hooks ？谈谈你的理解？
* useState 的原理（class 组件的 setState 和 FC 的 setState有什么区别）
* 生命周期方法要如何对应到 Hook ？
* hooks 如何获取上一轮的 props 或 state？

::: details 点击查看代码
```js
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```
:::

## TS

* Partial 实现

::: details 点击查看代码
```typescript
type Partial<T> = {
 [K in keyof T]?: T[K];
}
```
:::

* 有函数 function sum(x,y) { return x + y }, 需要将其写成 TS 的方法，满足如下需求
  * sum(4, 8); // 12
  * sum('foo', 'bar'); // foobar
  * sum('foo', 8); // Error

::: details 点击查看代码
```typescript
// 函数重载
function sum(x: number, y: number): number;
function sum(x: string, y: string): string;
function sum(x: any, y: any) {
  return x + y;
}
// 使用了强制类型转换
function sum<T extends Number | String>(x: T, y: T): T {
  return <any>x + <any>y;
}
```
:::

## webpack

1. webpack 原理（工作流程）
   
- 初始化：开始构建，读取与合并配置参数，加载plugin，实例化编译器对象 compiler。
- 编译：从entry出发，每个module串行的调用对应的loader，查找每个module依赖的module，递归的进行编译过程
- 输出：把module组合成chunk，转换为文件，输出到文件系统。

2. loader 和 plugin 区别？多个loader时，调用顺序是怎么样的？ 写过 loader 和 plugin 吗？

## Http

* 常见状态码
* keep-alive
* cache
* 跨域的方案
* 队头阻塞是什么情况会发生？http2解决后有没有缺陷？http3如何做的改进？

## 项目

1. 介绍项目
2. 难点，如何解决的？
3. 做过什么性能优化吗？

## 其他

1. 平时如何学习的？
2. 如果看待产品频繁改需求？
