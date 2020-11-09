---
title: Promise
date: 2020-11-06
categories:
 - Javascript
tags:
 - promise
---

## Promise特点

1. new Promise时需要传递一个executor执行器,执行器会立刻执行

2. 执行器中传递了两个参数：resolve成功的函数、reject失败的函数，他们调用时可以接受任何值的参数value

3. promise状态只能从pending态转onfulfilled,onrejected到resolved或者rejected，然后执行相应缓存队列中的任务

4. promise实例,每个实例都有一个then方法，这个方法传递两个参数，一个是成功回调onfulfilled,另一个是失败回调onrejected

5. promise实例调用then时，如果状态resolved，会让onfulfilled执行并且把成功的内容当作参数传递到函数中

6. promise中可以同一个实例then多次,如果状态是pengding 需要将函数存放起来 等待状态确定后 在依次将对应的函数执行 (发布订阅)

### 乞丐版实现

```js
function Promise (executor) {
  var self = this;//resolve和reject中的this指向不是promise实例，需要用self缓存
  self.state = 'padding';
  self.value = '';//缓存成功回调onfulfilled的参数
  self.reson = '';//缓存失败回调onrejected的参数
  self.onResolved = []; // 专门存放成功的回调onfulfilled的集合
  self.onRejected = []; // 专门存放失败的回调onrejected的集合
  function resolve (value) {
    if(self.state==='padding'){
      self.state==='resolved';
      self.value=value;
      self.onResolved.forEach(fn=>fn())
    }
  }
  function reject (reason) {
    self.state = 'rejected';
    self.value = reason;
    self.onRejected.forEach(fn=>fn())
  }
  try{
    executor(resolve,reject)
  }catch(e){
    reject(e)
  }
}

Promise.prototype.then=function (onfulfilled,onrejected) {
  var self=this;
  if(this.state==='resolved'){
    onfulfilled(self.value)
  }
  if(this.state==='rejected'){
    onrejected(self.value)
  }
  if(this.state==='padding'){
    this.onResolved.push(function () {
      onfulfilled(self.value)
    })
  }
}
```

## 引用

[promise原理](https://blog.csdn.net/sinat_17775997/article/details/83376452)
