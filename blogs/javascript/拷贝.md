---
title: 深浅拷贝
date: 2020-11-06
author: 张福浩
categories:
 - Javascript
tags:
 - 拷贝
---

## 深拷贝

> Object.freeze() Object.assign() 都是浅拷贝

### 简易实现

```js
function cloneDeep(obj) {
    if(typeof obj !== 'object') return obj;

    let newObj = obj instanceof Array ? [] : {}

    for (let key in obj) {
        if(typeof obj[key] === 'object') {
            newObj[key] = cloneDeep(obj[key])
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}
```
