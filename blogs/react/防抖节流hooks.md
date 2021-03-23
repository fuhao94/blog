---
title: useDebounce && useThrottle
date: 2021-03-01
categories:
  - React
---

## 防抖

原生实现

```js
function debounce(fn, wait) {
	let timeout = null;

	return function () {
		const context = this;
		const args = arguments;

		if(timeout) clearTimeout(timeout);
		timeout = setTimeout(function () {
			fn.apply(context, args)
		}, wait);
	}
}
```

debounce hooks 写法

```js
import { useEffect, useRef } from 'react'

const useDebounce = (fn, ms = 30, deps = []) => {
    let timeout = useRef();
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            fn();
        }, ms)
    }, deps)

    const cancel = () => {
        clearTimeout(timeout.current);
        timeout = null;
    }
  
    return [cancel]
  }

export default useDebounce;
```

## 节流

原生实现

```js
function throttle(func, wait) {
  let context, args;
  let previous = 0;

  return function() {
    const now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}
```

throttle hooks 写法

```js
import { useEffect, useRef, useState } from 'react'

const useThrottle = (fn, ms = 30, deps = []) => {
    let previous = useRef(0);
    let [time, setTime] = useState(ms);
    useEffect(() => {
        let now = Date.now();
        if (now - previous.current > time) {
            fn();
            previous.current = now;
        }
    }, deps)

    const cancel = () => {
        setTime(0);
    }
  
    return [cancel];
  }

export default useThrottle;
```
