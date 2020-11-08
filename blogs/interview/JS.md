# JS相关

## 函数点击自增加1

```js
var getId = (function () {
    var i = 0;
    return function () {
        return i++;
    };
    
})();
```

## 函数表达式和函数声明有什么区别？

1. 以函数声明的方法定义的函数,函数名是必须的,而函数表达式的函数名是可选的。（函数声明整体会被提升到当前作用域的顶部，函数表达式也提升到顶部但是只有其变量名提升）

2. 以函数声明的方法定义的函数,函数可以在函数声明之前调用,而函数表达式的函数只能在声明之后调用。

3. 以函数声明的方法定义的函数并不是真正的声明,它们仅仅可以出现在全局中,或者嵌套在其他的函数中,但是它们不能出现在循环,条件或者try/catch/finally中,而函数表达式可以在任何地方声明。换句话说，函数声明不是一个完整的语句，所以不能出现在if-else,for循环，finally，try catch语句以及with语句中。

```js
fn1(); // 函数声明
fn2(); // undefined

function fn1() {
    console.log('函数声明')
}

const fn2 = function () {
    console.log('函数表达式')
}
```

如果函数表达式声明的函数有函数名,那么这个函数名就相当于这个函数的一个局部变量,只能在函数内部调用,举个栗子:

```js
var f = function fact(x) { 
	if (x <= 1) 
	     return 1;
	 else 
	     return x*fact(x-1);
	 };
 alert(fact());   // Uncaught ReferenceError: fact is not defined
```

## Object.freeze()

使用场景

1. 你需要一个非常干净且高度可定制的对象当作数据字典的时候；

2. 想节省hasOwnProperty带来的一丢丢性能损失并且可以偷懒少些一点代码的时候

### Object.freeze(null)

![对比图](https://user-gold-cdn.xitu.io/2018/4/11/162b2ef76658b2f1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 代码题1

```js
var foo = 1;
function main(){
    alert(foo);
    var foo = 2;
    alert(this.foo)
    this.foo = 3;
}
```
```
var m1 = main(); // undefined 1
var m2 = new main(); // undefined undefined
```
