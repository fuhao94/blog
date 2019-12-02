# JS

## 技巧类

```javascript
/**
 * 编写一个函数，它接受一个由10个整数组成的数组（0到9之间的数组），该函数以形似(123) 456-7890的电话号码的形式返回这些数字的字符串。
 * @param numbers
 * @returns {string}
 */
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
createPhoneNumber("0123456789"); // "(012) 345-6789"

/**
 * 给定一个数组，找到出现奇数次的数字。
 * @param xs
 */
const findOdd = xs => xs.reduce((a, b) => a ^ b);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // -1

/**
 * "喜欢"系统
 * @param names
 * @returns {string}
 */
function likes(names) {
  let templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this"
  ];
  let idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}

/**
 * 给定一串单词，返回最短单词的长度。
 * @param s
 * @returns {*}
 */
const findShort1 = s =>
  s
    .split(" ")
    .map(w => w.length)
    .sort((a, b) => a - b)[0];
findShort1("bitcoin take over the world maybe who knows perhaps"); // returns 3

function findShort2(s) {
  return Math.min.apply(null, s.split(" ").map(w => w.length));
}

/**
 * digital_root
 * @param n
 * @returns {number}
 */
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

// 通过判断 `window` 对象是否存在即可
export const inBrowser = typeof window !== "undefined";

// 获取当浏览器的user Agent
// toLowerCase目的是 为了后续的各种环境检测
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
```

## 常用

```javascript
/**
 * 多维数组降维
 * @param arr
 * @return {*[]}
 */
const flattenDeep = arr =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];

flattenDeep([1, [[2], [3, [4]], 5]]); // [1, 2, 3, 4, 5]

/**
 * ES6一行去重
 * @type {number[]}
 */
const arr = [1, 13, 24, 11, 11, 14, 1, 2];
Array.from(new Set(arr));

/**
 * 统计一个字符串出现最多的字母
 * @param str
 * @returns {string}
 */
function findMaxDuplicateChar(str) {
  if (str.length === 1) {
    return str;
  }
  var charObj = {};
  for (var i = 0; i < str.length; i++) {
    if (!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1;
    } else {
      charObj[str.charAt(i)] += 1;
    }
  }
  var maxChar = "",
    maxValue = 1;
  for (var k in charObj) {
    if (charObj[k] >= maxValue) {
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  return "字符串出现最多的字母为:" + maxChar + "次数为:" + maxValue;
}
findMaxDuplicateChar("afjghdfraaaasdenas");

/**
 * 冒泡排序
 * @param arr
 */
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
      }
    }
  }
  return arr;
}

/**
 * 快速排序
 * @param arr
 * @returns {*}
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log([pivot]);
  return quickSort(left).concat([pivot], quickSort(right));
}

/**
 * 获取指定长度随机字符串
 * @param len
 * @returns {string}
 */
function getRandomStr(len) {
  var str = "";
  for (
    ;
    str.length < len;
    str += Math.random()
      .toString(36)
      .substr(2)
  );
  return str.substr(0, len);
}

/**
 * 获取数组最大最小值
 * @param arr
 * @returns {{max: number, min: number}}
 */
function maxAndMin(arr) {
  return {
    max: Math.max.apply(null, arr),
    min: Math.min.apply(null, arr)
  };
}

/**
 * 判断是否为数组
 * @param obj
 * @returns {boolean}
 */
function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

/**
 * 数组随机排序
 */
arr.sort(function() {
  return Math.random() - 0.5;
});

/**
 * 斐波那契数组 fibo[i] = fibo[i-1]+fibo[i-2];
 * @param n
 * @returns {Array}
 */
function getFibonacci(n) {
  var fibarr = [];
  var i = 0;
  while (i < n) {
    if (i <= 1) {
      fibarr.push(i);
    } else {
      fibarr.push(fibarr[i - 1] + fibarr[i - 2]);
    }
    i++;
  }

  return fibarr;
}

/**
 * 二分查找
 * @param start
 * @param end
 * @type {number[]}
 */
function binarySearch(data, dest, start, end) {
  var end = end || data.length - 1,
    start = start || 0,
    m = Math.floor((start + end) / 2);
  if (data[m] === dest) {
    return m;
  }
  if (dest < data[m]) {
    return binarySearch(data, dest, 0, m - 1);
  } else {
    return binarySearch(data, dest, m + 1, end);
  }

  return false;
}
const arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
binarySearch(arr, 4); // 3

/**
 * 二分查找（非递归）
 * @param data
 * @param dest
 * @returns {*}
 */
function binarySearch(data, dest) {
  var h = data.length - 1,
    l = 0;
  while (l <= h) {
    var m = Math.floor((h + l) / 2);
    if (data[m] === dest) {
      return m;
    }
    if (dest > data[m]) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return false;
}
const arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
binarySearch(arr, 4); // 3

/**
 * 数组彻底降维
 * @param arr
 * @return {*[]}
 */
const flattenDeep = arr =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];

flattenDeep([1, [[2], [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```
