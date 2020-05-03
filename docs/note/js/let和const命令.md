# let 和 const 命令

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
// var a = Object.freeze({key: 'value'})

// Object.defineProperty()
```

[JS作用域](https://www.cnblogs.com/fundebug/p/10535230.html)
