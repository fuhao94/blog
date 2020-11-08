---
title: 数据不可变性
author: 张福浩
date: 2020-11-06
categories:
 - Javascript
tags:
 - 性能
---

## 不可变数据的好处

### 简化复杂的功能

不可变性使得复杂的特性更容易实现。撤销和恢复功能在开发中是一个很常见的需求。不直接在数据上修改可以让我们追溯并复用历史记录。

### 跟踪数据的改变

如果直接修改数据，那么就很难跟踪到数据的改变。跟踪数据的改变需要可变对象可以与改变之前的版本进行对比，这样整个对象树都需要被遍历一次。

跟踪不可变数据的变化相对来说就容易多了。如果发现对象变成了一个新对象，那么我们就可以说对象发生改变了。

### 确定在 React 中何时重新渲染

不可变性最主要的优势在于它可以帮助我们在 React 中创建 pure components。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。