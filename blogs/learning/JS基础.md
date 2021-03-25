---
title: JS 基础
date: 2021-03-23
categories:
  - JS
---

## 实现 call、apply、bind

```js
Function.prototype.myCall = function (context, ...args) {
  // 传入null、指向window
  context = context || window;
  // fn === 当前这个 function
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  const result = args ? context.fn(args) : context.fn();
  delete context.fn;
  return result;
}

Function.prototype.myBind = function (context) {
  context = context || window;
  // 截取传入参数
  const args = [...arguments].slice(1);
  const _this = this;

  return function fn() {
    if (this instanceof fn) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, [...args, ...arguments])
  }
}
```

## 前端路由

```
hash 模式的原理是 onhashchange 事件，可以在 window 对象上监听这个事件。

history ：hashchange 只能改变 # 后面的代码片段，history api （pushState、replaceState、go、back、forward） 则给了前端完全的自由，通过在window对象上监听popState()事件。
```

```
// history 模式下需要重定向操作 不然会404
location / {
    try_files $uri $uri/ /index.html;
}
```

## 多个请求并发控制

有一组 URL 数组 array = [url1, url2...]，有一个获取数据的 fetch 方法，返回promise.resolve：fetch(url).then()，实现一个 execute 方法，保证同时只有 limit 个
fetch 同时执行，后面的需要排队。

```js
// 普通方式
function execute(array, limit = 5) {
  let i = 0;
  for (; i < limit; i++) {
    dispatch(i);
  }

  function dispatch(j) {
    if (j > array.length - 1) return;
    fetch(array[j]).then(() => dispatch(i++));
  }
}

// Promise.rice 写法
const limitLoad = (array, limit = 3) => {
  const sequence = [...array];
  let promises = sequence.splice(0, limit).map((url, index) =>
    fetch(url).then(() => index)
  )

  let done = Promise.race(promises);

  for (let i = 0; i < sequence.length; i++) {
    done = done.then((index) => {
      promises[index] = fetch(sequence[i]).then(() => index);
      return Promise.race(promises);
    })
  }
}
```

## forEach 如何跳出循环

```js
try {
  arr.forEach((item, index) => {
    if (item === 'b') throw new Error('exist')
    console.log(item)
  })
} catch (e) {
  if (e.message == 'exist') throw e
} finally {
  console.log('done')
}

// lodash forEach 
// return false 可以 break;
function arrayEach(array, iteratee) {
  let index = -1
  const length = array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}
```

## once 函数实现

```js
function once(fn) {
  let isFirst = true;
  let result;
  return function () {
    if (!isFirst) {
      return result;
    }
    isFirst = false;
    result = fn.apply(this, arguments);
    // clear the `func` variable so the function may be garbage collected
    fn = null;
    return result;
  }
}


// test
function test() {
  console.log(1);
}

const initialize = once(test);
initialize(); // 1
initialize(); //
```

## reduce 实现 map

```js
Array.prototype.reduceMap = function (fn, callbackThis) {
  const CBThis = callbackThis || null;
  return this.reduce(function (res, item, index, arr) {
    res.push(fn.call(CBThis, item, index, arr));
    return res;
  }, []);
}

// test
const result = [1, 2, 3].reduceMap((item, index) => item * index);
console.log(result); // [0, 2, 6]
```

## 实现一个简化版本 JSON.stringify()

```js
function stringify(obj) {
  const type = typeof obj;
  const simplyReg = /string|undefined|function/
  if (type !== 'object' || obj === null) {
    if (simplyReg.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    const json = [];
    const isArray = Array.isArray(obj);
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        let value = obj[k];
        const vType = typeof value;
        if (simplyReg.test(vType)) {
          value = '"' + value + '"';
        } else if (vType === 'object') {
          value = stringify(value);
        }
        json.push((isArray ? "" : '"' + k + '":') + String(value));
      }
    }
    return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}");
  }
}
```

## 原型链

概念: 每个 JS 对象在创建的时候都会关联一个对象(null除外)，这个对象就是原型，创建的对象会继承原型的属性。

```js
// demo
function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person = new Person();

// 结果
person.__proto__ === Person.prototype;
Person.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;

// 扩展
Object.__proto__ === Function.prototype;
Function.__proto__  === Function.prototype;
Function.prototype.__proto__ ===Object.prototype;
```

## 执行上下文栈

```js
function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3();
}

function fun1() {
    fun2();
}

fun1();
```

伪代码模拟压栈出栈

```
// 伪代码
ECStack = [];

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```

## 词法作用域和动态作用域

```js
// JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。
// 因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。
var value = 1;
function foo() {
    console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar(); // 1
```

```
// 下面列子都是打印 local scope 
// 因为JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置。
var scope = "global scope";
function checkscope(){
  var scope = "local scope";
  function f(){
    return scope;
  }
  return f();
}
checkscope(); // local scope

// 调用栈伪代码
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();

var scope = "global scope";
function checkscope(){
  var scope = "local scope";
  function f(){
    return scope;
  }
  return f;
}
checkscope()(); // local scope

// 调用栈伪代码
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```

## 经典闭包

MDN: 闭包是指那些能够访问自由变量的函数。
概念: 闭包 = 函数 + 函数能够访问的自由变量

```js
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}
data[0]() // 3
data[1]() // 3
data[2]() // 3

for (var i = 0; i < 3; i++) {
  data[i] = (function (j) {
    console.log(j);
  })(i);
}
// 0 1 2
```

## new

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

```js
function myNew(construstor, ...args) {
  const obj = {};
  obj.__proto__ = construstor.prototype;
  const result = construstor.apply(obj, args);
  return typeof result === 'object' && result !== null ? result : obj;
}

// test
function Test1(name) {
  return {
    name
  }
}
function Test2(name) {}
const test1 = myNew(Test1, 'zhangsan');   // { name: 'zhangsan' }
const test2 = myNew(Test2);               // {}
```

## 继承

```js
// 例子函数
function Parent () {
  this.name = 'kevin';
}
```

```js
// 原型链模式
// 缺点：引用类型的属性被所有实例共享
function Child () {}
Child.prototype = new Parent();
```

```js
// 构造函数模式
// 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。
function Child () {
  Parent.call(this)
}
```

```js
// 组合继承
// 缺点：暂无
function Child() {
  Parent.call(this)
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
```

## 深拷贝

```js
const obj = {
  a: 1,
  b: 'zfh',
  c: undefined,
  d: function () {
    console.log('a function')
  }
};

// 阉割版 
// 缺点：undefined 函数 这些无法拷贝
JSON.parse(JSON.stringify(obj));

// 递归实现
function cloneDeep(obj, map = new Map()) {
  if (typeof obj === 'object' && obj !== null) {
    let res = Array.isArray(obj) ? [] : {};
    const symbols = Object.getOwnPropertySymbols(obj);
    if (symbols.length > 0) {
      symbols.forEach(sym => {
        res[sym] = obj[sym];
      });
    }
    if (map.get(obj)) {
      return map.get(obj);
    }
    Object.keys(obj).forEach(key => {
      res[key] = cloneDeep(obj[key], map)
    });
    map.set(obj, res);
    return res;
  } else {
    return obj;
  }
}

// test
const obj = {
  a: 1,
  b: [1, 2, 3],
  c: undefined,
  d: null,
  e: Symbol('name'),
  g: function (params) {
    return params
  },
  [Symbol('key')]: 'symbol',
}
obj.f = obj.b;
const newObj = cloneDeep(obj);
console.log(newObj) // isEqual(nweObj, obj)
```

## instanceof

instanceof 是用来判断 A 是否为 B 的实例

```js
function instanceOf(A, B) {
  const L = A.__proto__;
  const R = B.prototype;
  if (!L || !R) {
    return false;
  }
  return L === R;
}
```

## 判断俩对象是否相等

简易版

```js
export const deepEqual = (x, y) => {
  if (x === y) {
    return true;
  }
  if ((typeof x == "object" && x !== null) && (typeof y == "object" && y !== null)) {
    if (Object.keys(x).length !== Object.keys(y).length) {
      return false;
    }
    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}
```

## 手写 Promise

<<< @/blogs/learning/js/promise.js


## 简易发布/订阅

```js
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});

const handler = data => console.log(data);
const hub = createEventHub();
let increment = 0;

// 订阅，监听不同事件
hub.on('message', handler);
hub.on('message', () => console.log('Message event fired'));
hub.on('increment', () => increment++);

// 发布：发出事件以调用所有订阅给它们的处理程序，并将数据作为参数传递给它们
hub.emit('message', 'hello world'); // 打印 'hello world' 和 'Message event fired'
hub.emit('message', { hello: 'world' }); // 打印 对象 和 'Message event fired'
hub.emit('increment'); // increment = 1

// 停止订阅
hub.off('message', handler);
```


## this

New 绑定 > 显示绑定 > 隐式绑定 > 默认绑定

```js
function foo() {
 	console.log(this.a); 
}
var a = 1;
foo(); // 默认绑定

const obj = {
  a: 2,
  foo
}
obj.foo(); // 隐式绑定

const obj2 = {
  a: 3
}
foo.call(obj2); // 显示绑定
const bar = foo.bind(obj); // 显示绑定 - 硬绑定

function Foo(a) {
  this.a = a;
}
const bar = new Foo(2); // New 绑定 
```
