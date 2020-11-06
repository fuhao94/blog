---
title: Vue - Vuex
author: 张福浩
date: 2020-11-06
categories:
 - Vue
tags:
 - Vuex
---

## state的模拟实现

```js
export class Store {
    constructor(options = {}, Vue) {
        this.options = options;
        Vue.mixin({ beforeCreate: vuexInit });
    }

    get state () {
        return this.options.state;
    }
}

function vuexInit() {
    const options = this.$options;
    if (options.store) {
        // 组件内部设定了store,则优先使用组件内部的store
        this.$store = typeof options.store === 'function' ?
            options.store() :
            options.store
    } else if (options.parent && options.parent.$store) {
        // 组件内部没有设定store,则从根App.vue下继承$store方法
        this.$store = options.parent.$store
    }
}
```

## getters的模拟实现

类似于computed，会对getters进行数据劫持，注入当前module下的state；

```js
// 劫持getters 注入store.state
function registerGetter(store, getterName, getterFn) {
    Object.defineProperty(store.getters, getterName, {
        get: () => {
            return getterFn(store.state)
        }
    })
}

// 将对象中的每一个值放入到传入的函数中作为参数执行
function forEachValue(obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key));
}

export class Store {
    constructor(options = {}, Vue) {
        this.options = options;
        this.getters = {}
        Vue.mixin({ beforeCreate: vuexInit });
        forEachValue(options.getters, (getterFn, getterName) => {
            registerGetter(this, getterName, getterFn);
        })
    }

    get state() {
        return this.options.state;
    }
}
```

## 常见题目

1. 使用Vuex只需执行 Vue.use(Vuex)，并在Vue的配置中传入一个store对象的示例，store是如何实现注入的？

> Vue.use(Vuex) 方法执行的是install方法，它实现了Vue实例对象的init方法封装和注入，使传入的store对象被设置到Vue上下文环境的$store中。因此在Vue Component任意地方都能够通过this.$store访问到该store。

2. state内部支持模块配置和模块嵌套，如何实现的？

> 在store构造方法中有makeLocalContext方法，所有module都会有一个local context，根据配置时的path进行匹配。所以执行如dispatch('submitOrder', payload)这类action时，默认的拿到都是module的local state，如果要访问最外层或者是其他module的state，只能从rootState按照path路径逐步进行访问。

3. 在执行dispatch触发action(commit同理)的时候，只需传入(type, payload)，action执行函数中第一个参数store从哪里获取的？

> store初始化时，所有配置的action和mutation以及getters均被封装过。在执行如dispatch('submitOrder', payload)的时候，actions中type为submitOrder的所有处理方法都是被封装后的，其第一个参数为当前的store对象，所以能够获取到 { dispatch, commit, state, rootState } 等数据。

4. Vuex如何区分state是外部直接修改，还是通过mutation方法修改的？

> Vuex中修改state的唯一渠道就是执行 commit('xx', payload) 方法，其底层通过执行 this._withCommit(fn) 设置_committing标志变量为true，然后才能修改state，修改完毕还需要还原_committing变量。外部修改虽然能够直接修改state，但是并没有修改_committing标志位，所以只要watch一下state，state change时判断是否_committing值为true，即可判断修改的合法性。

5. 调试时的”时空穿梭”功能是如何实现的？

> devtoolPlugin中提供了此功能。因为dev模式下所有的state change都会被记录下来，’时空穿梭’ 功能其实就是将当前的state替换为记录中某个时刻的state状态，利用 store.replaceState(targetState) 方法将执行this._vm.state = state 实现。

## 引用

参考文件-Vuex原理：[用150行代码实现Vuex 80%的功能](https://juejin.im/post/5c62ea95e51d457ffe60c084)

参考文件-常见题目：[常见面试题](https://tech.meituan.com/2017/04/27/vuex-code-analysis.html)

文中示例-入口文件 [main.js](https://github.com/isEddrick/blog/blob/master/docs/note/vue/vuex/main.js)

文中示例-模拟store [store.js](https://github.com/isEddrick/blog/blob/master/docs/note/vue/vuex/store.js)
