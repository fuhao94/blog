new Promise(resolve => {
  console.log(1)
}).then(() => console.log(2)).then(console.log(3));
console.log(4);

// 1 3 4 undefined

function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}

Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};

function getName() {
  console.log(5);
}

/* --- 请问打印的值分别是多少 --- */
Foo.getName();            // 2
getName();                // 4
Foo().getName();          // 1
getName();                // 1
new Foo.getName();        // 2
new Foo().getName();      // 3
new new Foo().getName();  // 3

/**
 * --- 题目描述 ---
 *
 * 实现一个函数，不管执行多少次，只返回第一次执行的值
 *
 * --- 实例 ---
 *
 * const obj = {
 *   n: 3,
 *   test: function (x) {
 *     return this.n + x;
 *   }
 * }
 * obj.fn = once(obj.test);
 * obj.fn(1); // 4
 * obj.fn(2); // 4
 * obj.fn(3); // 4
 */
function once(fn) {
  let result;

  return function () {
    if (result !== undefined) {
      return result;
    }
    result = fn.apply(this, arguments);
    return result;
  }
}

/**
 * 深拷贝
 * @param obj {Record<string, any>}
 * @param map {Map}
 * @return {Record<string, any>}
 */
function cloneDeep(obj, map = new Map()) {
  if (typeof obj === 'object' && obj !== null) {
    let res = Array.isArray(obj) ? [] : {};
    const symbols = Object.getOwnPropertySymbols(obj);
    if (symbols.length > 0) {
      symbols.forEach(sym => {
        res[sym] = obj[sym];
      });
    }
    if (map.get(obj)) {
      return map.get(obj);
    }
    Object.keys(obj).forEach(key => {
      res[key] = cloneDeep(obj[key], map)
    });
    map.set(obj, res);
    return res;
  } else {
    return obj;
  }
}

/**
 * --- 题目描述 ---
 *
 * 实现一个函数，可以对数组中的数据按照某个 key 做归类，返回 { key: object } 形式
 *
 * --- 实例 ---
 *
 * 输入：data = [{name: '张三',age: '18',sex: 'male'}, {name: '李红',age: '16',sex: 'female'}], key = 'sex'
 * 输出：{ male: [{name: '张三',age: '18',sex: 'male'}], female: [{name: '李红',age: '16',sex: 'female'}] }
 */
function groupBy(data, key) {
  // TODO
}


/**
 * --- 题目描述 ---
 *
 * 实现一个函数，可以阻塞进程
 *
 * --- 实例 ---
 *
 * await sleep(3000);
 * console.log('sleep'); // 3秒后打印 sleep
 */
function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

/**
 * --- 题目描述 ---
 *
 * 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key: value 形式的 object
 *
 * --- 实例 ---
 *
 * 输入：'http://sample.com/?a=1&e&b=2&c=xx&d#hash'
 * 输出：{a: 1, b: 2, c: 'xx', d: ''}
 */
function getQueryObj(url) {
  // TODO
}
// 最笨的方法(不会正则)
function getQueryObj(url, key) {
  const search = url.split('?')[1];
  const paths = search.split('&')
  return paths.reduce((result, item) => {
    const param = item.split('=');
    return {
      ...result,
      [param[0]]: param[1]
    }
  }, {})
}

function getQueryObj(url, key) {
  const params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });
  return params[key];
}


// 有函数 function sum(x,y) { return x + y }, 需要将其写成 TS 的方法，满足如下需求

function sum(x,y) { return x + y }

// 可以传入均为数组的参数，返回值也是数值
sum(4, 8); // 12
// 可以传入均为字符串的参数，返回值也为字符串
sum('foo', 'bar'); // foobar
// 不能传入一个参数传入字符串，一个参数传入数值
sum('foo', 8); // Error

/**
 * --- 题目描述 ---
 *
 * 有一组 URL 数组 array = [url1, url2...]，有一个获取数据的 fetch 方法，返回promise.resolve：fetch(url).then()，实现一个 execute 方法，保证同时只有 limit 个
 * fetch 同时执行，后面的需要排队。
 *
 */
function execute() {

}
