---
title: 招人啦~
date: 2021-06-29
keys:
 - 'a5f8a1272a231c5ca126bb04de177e71'
---

## JS

* 基本数据类型和引用数据类型区别；function是基本还是引用； 
* Object.create
  * Object.create(null) 作用？使用场景？
  * 'toString' in Object.create(null) 结果
  * 'toString' in Object.assign([], Object.create(null))
* this 指向问题；改变 this 指向有哪些方法？三者有什么区别？箭头函数可以改变 this 吗？
* setInterval 和 setTimeout 应用问题；setInterval 存在什么缺陷？ 
* 当一个CSS文件很大的时候，如果文件没下载完成，js会不会执行
* 前端路由
* 单页应用vs多页应用
* 缓存方式有哪些？
  localStorage、sessionStorage、cookie
* 防抖节流使用场景，如何实现
* Map、Set、Symbol
  * Map 和 Object 区别；WeakMap 和 Map 区别（WeakMap只接受对象作为键名（null除外），WeakMap的键名所指向的对象，不计入垃圾回收机制）
  * set 和 WeakSet 区别（WeakSet 的成员只能是对象；WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用）；
  * Symbol 使用场景
* 继承的方法
* 设计模式知道哪些？常用的是？具体场景呢？
* 多次请求，只取最后一次数据
* 地址栏输入url之后发生什么
* 执行顺序

::: details 点击查看
```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
```
`1 2 4 timerStart timerEnd success`

```js
Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');
```
`start promise1 timer1 promise2 timer2`
:::

## Css

* display: none / opacity: 0 / visibility: hidden / pointer-events: none 作用是什么?
* 垂直居中实现方案
* BFC(块级格式化上下文)含义和应用
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
* Vue3.0 编译做了哪些优化？
* Composition API 与 React.js 中 Hooks 的异同点

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

* useState 模拟 this.setState 的回调函数

::: details 点击查看代码
```tsx
function useCallbackState(state: any) {
  const cbRef = useRef<any>();
  const [data, setData] = useState(state);

  useEffect(() => {
    cbRef.current && cbRef.current(data);
  }, [data]);

  return [
    data,
    function (val: any, callback: any) {
      cbRef.current = callback;
      setData(val);
    }
  ];
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

* Record 类型是怎么实现的

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

* webpack编译过程
* loader 和 plugin 区别？多个loader时，调用顺序是怎么样的？ 写过 loader 和 plugin 吗？

## babel

* preset的作用，和plugin的关系

## Http

* 常见状态码
* keep-alive
* cache
* 跨域的方案
* 队头阻塞是什么情况会发生？http2解决后有没有缺陷？http3如何做的改进？

## 项目

* 介绍项目
* 难点，如何解决的？
* 做过什么性能优化吗？ 
* 说一个你比较擅长的领域，做了哪些事情

## 其他

1. 平时如何学习的？
2. 如果看待产品频繁改需求？
