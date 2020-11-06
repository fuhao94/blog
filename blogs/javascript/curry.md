---
title: 柯里化
date: 2020-11-06
author: 张福浩
categories:
 - Javascript
tags:
 - curry
---

## 模拟实现

```js
function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
}

add(1)(2)(3)  // 6
add(1)(2)(3)(4)  // 10
```
