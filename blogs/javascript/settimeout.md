---
title: 定时器
date: 2020-11-06
categories:
 - JS
---

## setInterval实现一个倒计时效果

```js
function countdown() {
  let count = 10;
  
  let timeout = setInterval(() => {
    count--;
    
    if(count === 0) {
      console.log('重新获取');
      clearInterval(timeout);
    } else {
      console.log(count)
    }
  }, 1000)
}
countdown();
```

## setTimeout模拟实现setInterval 

> setInterval会阻塞线程；setInterval间隔1000ms执行不会等待执行完上一个任务，各定时器之间的代码执行没有间隔。setTimeout会等待任务执行完再执行下一个setTimeout（链式调用setTimeout）;
i
```js
function countdown() {
  let count = 10;
  
  let timeout = () => {
  	count--;
    
    if(count === 0) {
      console.log('重新获取')
    } else {
      console.log(count);
      setTimeout(timeout, 1000)
    }
  }
  
  setTimeout(timeout, 1000)
}

countdown()
```

## 经典面试题

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i)
}
```

等同于生成了5个定时器 

```js
setTimeout(function() {
    console.log(5);
}, 0);
setTimeout(function() {
    console.log(5);
}, 1000);
setTimeout(function() {
    console.log(5);
}, 2000);
setTimeout(function() {
    console.log(5);
}, 3000);
setTimeout(function() {
    console.log(5);
}, 4000);
```

如何让其输出0, 1, 2, 3, 4 ？
> 给setTimeout定时器外层创建一个块作用域，或者是创建函数作用域以形成闭包。

```js
//方法一：ES6 let关键字，创建块作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i)
}

//方法二：IIFE
for (var i = 0; i < 5; i++) {
    (function iife(j) {     //闭包的函数作用域
        setTimeout(function() {
            console.log(j);
        }, 1000 * i);   //这里将i换为j, 可以证明以上的想法。
    })(i);
}
```
