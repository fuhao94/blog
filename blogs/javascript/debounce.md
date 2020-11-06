---
title: 防抖
author: 张福浩
date: 2020-11-06
categories:
 - Javascript
tags:
 - 防抖
---

## 使用场景

- search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
- window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

## 简易实现

```js
function debounce(fn, wait) {
	let timeout = null;

	return function () {
		const context = this;
		const args = arguments;

		if(timeout) clearTimeout(timeout);
		timeout = setTimeout(function () {
			fn.apply(context, args)
		}, wait);
	}
}
```
