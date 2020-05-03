# Vuex

## 引用

参考文件：[用150行代码实现Vuex 80%的功能](https://juejin.im/post/5c62ea95e51d457ffe60c084)

Vuex原理：[常见面试题](https://tech.meituan.com/2017/04/27/vuex-code-analysis.html)

入口文件 [main.js](https://github.com/isEddrick/blog/blob/master/docs/note/vue/vuex/main.js)

模拟store [store.js](https://github.com/isEddrick/blog/blob/master/docs/note/vue/vuex/store.js)

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

```js
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
