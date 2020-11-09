---
title: 实现一个简易Promise
date: 2020-11-08
categories:
 - Javascript
tags:
 - promise
---

## 特点

1. new Promise时需要传递一个executor执行器,执行器会立刻执行

2. 执行器中传递了两个参数：resolve成功的函数、reject失败的函数，他们调用时可以接受任何值的参数value

3. promise状态只能从pending态转onfulfilled,onrejected到resolved或者rejected，然后执行相应缓存队列中的任务

4. promise实例,每个实例都有一个then方法，这个方法传递两个参数，一个是成功回调onfulfilled,另一个是失败回调onrejected

5. promise实例调用then时，如果状态resolved，会让onfulfilled执行并且把成功的内容当作参数传递到函数中

6. promise中可以同一个实例then多次,如果状态是pengding 需要将函数存放起来 等待状态确定后 在依次将对应的函数执行 (发布订阅)

## 实现

```js
// 三种状态
const PENDING = 'pending'; // 初始状态
const FULFILLED = 'fulfilled'; // 完成
const REJECTED = 'rejected'; // 失败

class Promise {
  constructor(executor) {
    const self = this;
    self.status = PENDING; // 初始状态
    self.onFulfilled = []; // 成功回调
    self.onRejected = []; // 失败回调

    // 异步处理成功调用的函数
    function resolve(value) {
      if (self.status === PENDING) {
        self.status = FULFILLED;
        self.value = value;
        // PromiseA+ 2.2.6.1 相同promise的then可以被调用多次，当promise变为fulfilled状态，全部的onFulfilled回调按照原始调用then的顺序执行
        self.onFulfilled.forEach(fn => fn());
      }
    }

    // 异步处理失败调用的函数
    function reject(reason) {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.reason = reason;
        // PromiseA+ 2.2.6.2 相同promise的then可以被调用多次，当promise变为rejected状态，全部的onRejected回调按照原始调用then的顺序执行
        self.onRejected.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  // 将现有对象转为 Promise 对象
  static resolve(value) {
    // 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
    if (value instanceof Promise) return value;

    // 参数是一个thenable对象（具有then方法的对象）,Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
    if (typeof value === 'object' || typeof value === 'function') {
      try {
        let then = value.then;
        if (typeof then === 'function') {
          return new Promise(then.bind(value));
        }
      } catch (e) {
        return new Promise((resolve, reject) => {
          reject(e);
        })
      }
    }

    // 参数不是具有then方法的对象，或根本就不是对象,Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
    return new Promise((resolve, reject) => {
      resolve(value);
    })
  }

  // 返回一个新的 Promise 实例，该实例的状态为rejected。
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  }

  // 用于将多个 Promise 实例，包装成一个新的 Promise 实例。只有所有状态都变为fulfilled，p的状态才会是fulfilled
  static all(promises) {
    const values = [];
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        Promise.resolve(p).then(value => {
          resolvedCount++;
          values[index] = value;
          if (resolvedCount === promises.length) {
            resolve(values);
          }
        }, reason => {
          reject(reason);
        })
      })
    })
  }

  // 只要有一个实例率先改变状态，状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给回调函数。
  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        Promise.resolve(p).then(value => {
          resolve(value);
        }, reason => {
          reject(reason);
        })
      })
    })
  }

  then(onFulfilled, onRejected) {
    // PromiseA+ 2.2.1 onFulfilled和onRejected是可选参数
    // PromiseA+ 2.2.5 onFulfilled和onRejected必须被作为函数调用
    // PromiseA+ 2.2.7.3 如果onFulfilled不是函数且promise1状态是fulfilled，则promise2有相同的值且也是fulfilled状态
    // PromiseA+ 2.2.7.4 如果onRejected不是函数且promise1状态是rejected，则promise2有相同的值且也是rejected状态
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    };
    const self = this;

    const promise = new Promise((resolve, reject) => {
      const handle = (callback, data) => {
        // PromiseA+ 2.2.4 onFulfilled或者onRejected需要在自己的执行上下文栈里被调用，所以此处用setTimeout
        setTimeout(() => {
          try {
            // PromiseA+ 2.2.2 如果onFulfilled是函数，则在fulfilled状态之后调用，第一个参数为value
            // PromiseA+ 2.2.3 如果onRejected是函数，则在rejected状态之后调用，第一个参数为reason
            const x = callback(data);
            // PromiseA+ 2.2.7.1 如果onFulfilled或onRejected返回一个x值，运行这[[Resolve]](promise2, x)
            resolvePromise(promise, x, resolve, reject);
          } catch (e) {
            // PromiseA+ 2.2.7.2 onFulfilled或onRejected抛出一个异常e，promise2必须以e的理由失败
            reject(e);
          }
        })
      }

      if (self.status === PENDING) {
        self.onFulfilled.push(() => {
          handle(onFulfilled, self.value);
        });
        self.onRejected.push(() => {
          handle(onRejected, self.reason);
        })
      } else if (self.status === FULFILLED) {
        setTimeout(() => {
          handle(onFulfilled, self.value);
        })
      } else if (self.status === REJECTED) {
        setTimeout(() => {
          handle(onRejected, self.reason);
        })
      }
    })

    return promise;
  }

  // 是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  // 用于指定不管 Promise 对象最后状态如何，都会执行的操作。
  finally(callback) {
    return this.then(
      value => Promise.resolve(callback()).then(() => value),
      reason => Promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // PromiseA+ 2.3.1 如果promise和x引用同一对象，会以TypeError错误reject promise
  if (promise === x) {
    reject(new TypeError('Chaining Cycle'));
  }

  if (x && typeof x === 'object' || typeof x === 'function') {
    // PromiseA+ 2.3.3.3.3 如果resolvePromise和rejectPromise都被调用，或者对同一个参数进行多次调用，那么第一次调用优先，以后的调用都会被忽略。
    let used;
    try {
      // PromiseA+ 2.3.3.1 let then be x.then
      // PromiseA+ 2.3.2 调用then方法已经包含了该条（该条是x是promise的处理）。
      let then = x.then;

      if (typeof then === 'function') {
        // PromiseA+ 2.3.3.3如果then是一个函数，用x作为this调用它。第一个参数是resolvePromise，第二个参数是rejectPromise
        // PromiseA+ 2.3.3.3.1 如果resolvePromise用一个值y调用，运行[[Resolve]](promise, y)
        // PromiseA+ 2.3.3.3.2 如果rejectPromise用一个原因r调用，用r拒绝promise。
        then.call(x, (y) => {
          if (used) return;
          used = true;
          resolvePromise(promise, y, resolve, reject)
        }, (r) => {
          if (used) return;
          used = true;
          reject(r);
        })
      } else {
        // PromiseA+ 如果then不是一个函数，变为fulfilled状态并传值为x
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (e) {
      // PromiseA+ 2.3.3.2 如果检索属性x.then抛出异常e，则以e为原因拒绝promise
      // PromiseA+ 2.3.3.4 如果调用then抛出异常，但是resolvePromise或rejectPromise已经执行，则忽略它
      if (used) return;
      used = true;
      reject(e);
    }

  } else {
    // PromiseA+ 2.3.4 如果x不是一个对象或函数，状态变为fulfilled并传值x
    resolve(x);
  }
}

```
