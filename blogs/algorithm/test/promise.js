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
        self.onFulfilled.forEach(fn => fn());
      }
    }

    // 异步处理失败调用的函数
    function reject(reason) {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.reason = reason;
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
  // PromiseA+ 2.3.1 如果promise和x引用同一对象，会以TypeError错误reject promise (循环引用)
  if (promise === x) {
    reject(new TypeError('Chaining Cycle'));
  }

  if (x && (typeof x === 'object' || typeof x === 'function')) {
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


const promise = new Promise((resolve, rejected) => {
  resolve('success');
});

promise.then((msg) => {
  console.log(msg)
})
