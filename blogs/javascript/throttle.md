---
title: 节流
date: 2020-11-06
author: 张福浩
categories:
 - Javascript
tags:
 - 节流
---

## 使用场景

- 鼠标不断点击触发，mousedown(单位时间内只触发一次)
- 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断

## 简易实现

```js
// 定时器版本
function throttle(func, wait) {
	var timeout;

	return function() {
		const context = this;
		const args = arguments;
		if (!timeout) {
			timeout = setTimeout(function(){
				timeout = null;
				func.apply(context, args)
			}, wait)
		}

	}
}

// 时间戳 立即执行版本
function throttle(func, wait) {
	let context, args;
	let previous = 0;

	return function() {
		const now = +new Date();
		context = this;
		args = arguments;
		if (now - previous > wait) {
			func.apply(context, args);
			previous = now;
		}
	}
}
```
