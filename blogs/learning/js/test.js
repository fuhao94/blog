function bar() {
  console.log('name')
  console.log(this.name)
}

// 初始化构造函数
class Parent {
  name = '张三';

  foo() {
    bar.call(this);
  }

  instanceFunc() {
    this.foo();
    console.log('可以访问实例方法');
  }

  static staticFunction() {
    console.log('可以访问静态方法');
  }
}
// 添加原型方法
Parent.prototype.protoFunc = function () {
  console.log('可以访问原型方法');
}
// 生成实例化对象
const parent = new Parent()
// 方法调用测试
console.log('/* 静态方法测试 */');
console.log('构造函数', Parent.staticFunction); // function () { console.log('可以访问静态方法'); }
console.log('实例化对象', parent.staticFunction); // undefined
console.log('/* 实例方法测试 */');
console.log('构造函数', Parent.instanceFunc); // undefined
console.log('实例化对象', parent.instanceFunc); // function () { console.log('可以访问实例方法'); }
console.log('/* 原型方法测试 */');
console.log('构造函数', Parent.protoFunc); // undefined
console.log('实例化对象', parent.protoFunc); //  function () { console.log('可以访问原型方法'); }
