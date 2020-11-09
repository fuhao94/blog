---
title: 事件机制
date: 2020-11-06
categories:
 - Javascript
tags:
 - 事件
---

# 事件机制

## DOM事件流

事件流(Event Flow)指的就是「网页元素接收事件的顺序」。事件流可以分成两种机制：

- 事件捕获(Event Capturing)
- 事件冒泡(Event Bubbling)
当一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段：

1. 捕获阶段：事件从window对象自上而下向目标节点传播的阶段；
2. 目标阶段：真正的目标节点正在处理事件的阶段；
3. 冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。


## 事件监听

**EventTarget.addEventListener()**

addEventListener()基本上有三个参数，分别是「事件名称」、「事件的处理程序」(事件触发时执行的function)，以及一个「Boolean」值，由这个Boolean决定事件是以「捕获」还是「冒泡」机制执行，若不指定则预设为「冒泡」。

由于addEventListener()可以同时针对某个事件绑定多个函数，所以通过removeEventListener()解除事件的时候，第二个参数的函数必须要与先前在addEventListener()绑定的函数是同一个「实体」。
