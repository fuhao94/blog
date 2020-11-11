---
title: 图片懒加载
date: 2020-11-11
categories:
 - Javascript
tags:
 - 懒加载
---

## 背景

一直没做过相关需求，秉着好奇心，了解下原理。

## 原理

首先，先不给图片设置src，出现在可视区域的时候，动态设置src。大致是这样：

```js 
<img data-src="https://iseddrick.github.io/blog/avatar.jpeg" />
```

这样图片就不会先加载，等滚动到的时候：

```js
const img = document.querySelector('img');
img.src = 'https://iseddrick.github.io/blog/avatar.jpeg';
```

这样就能加载了。


## 实现

上代码

```js
import { throttle } from 'lodash';

//立即执行函数
(function(){
    let imgList = [], offset = 0;
    // 执行图片加载
    function _loadImg(){
        for(let i = 0,len = imgList.length; i < len; i++){
            if(_isShow(imgList[i])){
                imgList[i].src = imgList[i].getAttribute('data-src');
                imgList.splice(i,1);
            }
        }
    }
    // 判断img是否出现在可视窗口
    function _isShow(el){
        let coords = el.getBoundingClientRect();
        return (coords.left >= 0 && coords.left >= 0 && coords.top) <= (document.documentElement.clientHeight || window.innerHeight) + parseInt(offset);
    }
    //获取所有需要实现懒加载图片对象引用并设置window监听事件scroll
    function imgLoad(selector){
        let nodes = document.querySelectorAll(selector);
        imgList = Array.apply(null, nodes);
        window.addEventListener('scroll', throttle(_loadImg, 250), false)
    }
    imgLoad('.imgLazyLoad');
})()
```

参考资料：

* [web 前端图片懒加载实现原理](https://juejin.im/entry/6844903482164510734)
