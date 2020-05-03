# ES6新特性

## Set

新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```js
const set = new Set([1, 2, 3, 4, 4]);
[...set] // [1, 2, 3, 4]

// 数组一行去重
Array.from(new Set([1,2,1]))
```

两个对象总是不相等的

```js
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```