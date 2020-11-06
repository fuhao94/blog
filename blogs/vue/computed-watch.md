---
title: Vue - computed 和 watch 区别
author: 张福浩
date: 2020-11-06
categories:
 - Vue
tags:
 - Vue
---

## computed

computed看上去是方法，但是实际上是计算属性，它会根据你所依赖的数据动态显示新的计算结果。计算结果会被缓存，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算

**注意**

> 在Vue的 template模板内`（{{}}）`是可以写一些简单的js表达式的很便利，如上直接计算 {{this.firstName + ' ' + this.lastName}}，因为在模版中放入太多声明式的逻辑会让模板本身过重，尤其当在页面中使用大量复杂的逻辑表达式处理数据时，会对页面的可维护性造成很大的影响，而 computed 的设计初衷也正是用于解决此类问题。

**适用场景**

适用于重新计算比较费时不用重复数据计算的环境。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。如果一个数据依赖于其他数据，那么把这个数据设计为computed


## watch

watcher 更像是一个 data 的数据监听回调，当依赖的 data 的数据变化，执行回调，在方法中会传入 newVal 和 oldVal。可以提供输入值无效，提供中间值 特场景。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。如果你需要在某个数据变化时做一些事情，使用watch。


## 总结

1.如果一个数据依赖于其他数据，那么把这个数据设计为computed的  

2.如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化
