---
title: 判断数据类型
author: 张福浩
date: 2020-11-06
categories:
 - Javascript
tags:
 - 数据类型
---

## typeof

对于基本类型，除 null 以外，均可以返回正确的结果。

对于引用类型，除 function 以外，一律返回 object 类型。

对于 null ，返回 object 类型。

对于 function 返回  function 类型。

## instanceof

instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：instanceof 检测的是原型，我们用一段伪代码来模拟其内部执行过程：


```js
instanceof (A, B) = {
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R) {
        // A的内部属性 __proto__ 指向 B 的原型对象
        return true;
    }
    return false;
}
```

特殊情况 instanceof []

![instanceof](https://images2015.cnblogs.com/blog/849589/201601/849589-20160112232510850-2003340583.png)

instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。


## constructor

![constructor](https://images2015.cnblogs.com/blog/849589/201705/849589-20170508131800457-2091987664.png)

1. null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。
  
2. 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object


## toString

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

```js
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(newFunction()) ; // [object Function]
Object.prototype.toString.call(newDate()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(newRegExp()) ; // [object RegExp]
Object.prototype.toString.call(newError()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
```

## 判断两个对象是否相等

### 转化成字符串比较方式
JSON.stringify()首先，我们可以通过将对象通过JSON.stringify()方法将对象转换成字符串，然后再比较
局限性：
如果对象里属性的位置发生变化，转换来的字符串就不相等，但实际我们只需要看他们的内容是否一致，与顺序没有关系，所以这种方法有局限性。

### 简易版实现

首先判断是不是引用类型的，如果有一个不是，那就进行直接判断。
若全是引用类型的，那就先看一下属性值的长度是否相等，若不相等，就直接false啦。
若相等，就接着遍历里边的每一个属性，还是先看里边的属性是哪一个类型，如果全是引用类型，那就接着对里边的属性调用equals递归函数。如果不全是引用类型，那就比较这两个值是否相等，若不相等就直接false啦。
若遍历一圈下来都没有返回false，说明都相等啦。所以返回true。

```js
function equals(x,y){
    var f1=x instanceof Object;
    var f2=y instanceof Object;
    if(!f1 || !f2){
        return x===y
    }
    if(Object.keys(x).length!== Object.keys(y).length){
        return false
    }
    for(var p in x){
        var a= x[p] instanceof Object; 
        var b= y[p] instanceof Object; 
        if(a && b){
            equals(x[p],y[p])
        }else if(x[p]!=y[p]){
            return false;
        }
    }
      return true;
}
```

## 判断是否是数组类型

```js
/**
 * 面试官期望的答案
 */
function isArray(str){
    return Object.prototype.toString.call(str) === "[object Array]";
}
```

扩展答案

```js
[].slice // 能力判断

[] instanceof Array //类型判断

[].proto === Array.prototype

Array.isArray([]) // 存在兼容问题
```
