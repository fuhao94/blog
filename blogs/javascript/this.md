---
title: this
date: 2020-11-06
categories:
- JS
---

## 整体概览
![整体概览](https://img-blog.csdnimg.cn/20190514213041549.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1lvbmd4aWFXdQ==,size_16,color_FFFFFF,t_70)

## 1、全局环境

全局环境下，this始终指向全局对象（window），无论是否严格模式；

```javascript
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

## 2、函数上下文调用

### 2.1普通函数

普通函数内部的this分两种情况，严格模式和非严格模式。

1. 非严格模式下，this 默认指向全局对象window。

```javascript
function f1(){
  return this;
}
f1() === window; // true
```

2. 严格模式下，this指向undefined。

```javascript
function f2(){
  "use strict"; // 这里是严格模式
  return this;
}
f2() === undefined; // true
```

### 2.2函数作为对象的方法

1. 当函数作为对象里的方法被调用时，它们的 this 是调用该函数的对象。
2. 多层嵌套的对象，内部方法的this指向离被调用函数最近的对象（window也是对象，其内部对象调用方法的this指向内部对象， 而非window）。

```javascript
//方式1
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
//当 o.f()被调用时，函数内的this将绑定到o对象。
console.log(o.f()); // logs 37

//方式2
var o = {prop: 37};
function independent() {
  return this.prop;
}
//函数f作为o的成员方法调用
o.f = independent; 
console.log(o.f()); // logs 37

//方式3
//this 的绑定只受最靠近的成员引用的影响
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

### 2.3 原型链中的this

1. 如果该方法存在于一个对象的原型链上，那么this指向的是调用这个方法的对象，就像该方法在对象上一样。

```javascript
var o = {
  f: function() { 
    return this.a + this.b; 
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```
上述例子中，对象p没有属于它自己的f属性，它的f属性继承自它的原型。当执行p.f()时，会查找p的原型链，找到f函数并执行。因为f是作为p的方法调用的，所以函数中的 this 指向p。

2. 相同的概念也适用于当函数在一个 getter 或者 setter 中被调用。用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象。

3. call()和apply()方法：当函数通过Function对象的原型中继承的方法 call() 和 apply() 方法调用时， 其函数内部的this值可绑定到 call() & apply() 方法指定的第一个对象上， 如果第一个参数不是对象，JavaScript内部会尝试将其转换成对象然后指向它。

```javascript
function add(c, d){
  return this.a + this.b + c + d;
}
var o = {a:1, b:3};

add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

function tt() {
  console.log(this);
}
// 第一个参数不是对象，JavaScript内部会尝试将其转换成对象然后指向它。
tt.call(5);  // 内部转成 Number {[[PrimitiveValue]]: 5} 
tt.call('asd'); // 内部转成 String {0: "a", 1: "s", 2: "d", length: 3, [[PrimitiveValue]]: "asd"}
```

4. `bind()`方法：由ES5引入， 在`Function`的原型链上， `Function.prototype.bind`。通过bind方法绑定后， 函数将被永远绑定在其第一个参数对象上， 而无论其在什么情况下被调用。

```javascript
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"}); 
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty
```

### 2.4 构造函数中的this

当一个函数用作构造函数时（使用new关键字），它的this被绑定到正在构造的新对象。
构造器返回的默认值是this所指的那个对象，也可以手动返回其他的对象。

```javascript
function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2(){
  this.a = 37;
  return {a:38}; //手动设置返回{a:38}对象
}

o = new C2();
console.log(o.a); // logs 38
```

### 2.5 setTimeout & setInterval

1. 对于延时函数内部的回调函数的this指向全局对象window；
2. 可以通过bind()方法改变内部函数this指向。

```javascript
//默认情况下代码
function Person() {  
    this.age = 0;  
    setTimeout(function() {
        console.log(this);
    }, 3000);
}

var p = new Person();//3秒后返回 window 对象

//通过bind绑定
function Person() {  
    this.age = 0;  
    setTimeout((function() {
        console.log(this);
    }).bind(this), 3000);
}

var p = new Person();//3秒后返回构造函数新生成的对象 Person{...}
```

## 3、在DOM事件中

### 3.1 作为一个DOM事件处理函数

当函数被用作事件处理函数时，它的this指向触发事件的元素（针对addEventListener事件）。

```javascript
// 被调用时，将关联的元素变成蓝色
function bluify(e){
  //this指向所点击元素
  console.log(this === e.currentTarget); // 总是 true

  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target);        
  this.style.backgroundColor = '#A5D9F3';
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName('*');

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
```

### 3.2 作为一个内联事件处理函数

1. 当代码被内联处理函数调用时，它的this指向监听器所在的DOM元素；
2. 当代码被包括在函数内部执行时，其this指向等同于 普通函数直接调用的情况，即在非严格模式指向全局对象window，在严格模式指向undefined：

![image](https://img-blog.csdnimg.cn/20190514202505505.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1lvbmd4aWFXdQ==,size_16,color_FFFFFF,t_70)

![image](https://img-blog.csdnimg.cn/20190514202603360.png)

## 4、箭头函数

### 4.1 全局环境中
在全局代码中，箭头函数被设置为全局对象：

```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

### 4.2 this捕获上下文

箭头函数没有自己的this，而是使用箭头函数所在的作用域的this，即指向箭头函数定义时（而不是运行时）所在的作用域。

```javascript
//1、箭头函数在函数内部，以非方法的方法使用
function Person() {  
    this.age = 0;  
    setInterval(() => {
        console.log(this)
        this.age++;
    }, 3000);
}
var p = new Person(); //Person{age: 0}

//普通函数作为内部函数
function Person() {  
    this.age = 0;  
    setInterval(function(){
        console.log(this);
        this.age++;
    }, 3000);
}
var p = new Person(); //Window{...}
```

### 4.3 箭头函数作为对象的方法使用

箭头函数作为对象的方法使用，指向全局window对象；而普通函数作为对象的方法使用，则指向调用的对象。

```javascript
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b();  // undefined window{...}
obj.c();  // 10 Object {...}
```

### 4.4 箭头函数中，call()、apply()、bind()方法无效

```javascript
var adder = {
  base : 1,
  //对象的方法内部定义箭头函数，this是箭头函数所在的作用域的this，
  //而方法add的this指向adder对象，所以箭头函数的this也指向adder对象。
  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },
  //普通函数f1的this指向window
  add1 : function() {
    var f1 = function(){
    console.log(this); 
    } 
    return f1();
  },
  addThruCall: function inFun(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };
            
    return f.call(b, a);
  }
};

console.log(adder.add(1));         // 输出 2
adder.add1();       //输出全局对象 window{...}
console.log(adder.addThruCall(1)); // 仍然输出 2（而不是3，其内部的this并没有因为call() 而改变，其this值仍然为函数inFun的this值，指向对象adder
```

### 4.5 this指向固定化

箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。

```javascript
var handler = {
  id: '123456',

  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};
```

上面代码的init方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。如果不使用箭头函数则指向全局document对象。

### 4.6 箭头函是不适用场景

**箭头函数不适合定义对象的方法（方法内有this），因为此时指向window；**
**需要动态this的时候，也不应使用箭头函数。**

```javascript
//例1，this指向定义箭头函数所在的作用域，它位于对象cat内，但cat不能构成一个作用域，所以指向全局window，改成普通函数后this指向cat对象。
const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}

//例2，此时this也是指向window，不能动态监听button，改成普通函数后this指向按钮对象。
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
```
