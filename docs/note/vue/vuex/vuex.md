# Vuex

## state的模拟实现

```js
function VueInit() {
    const options = this.$options;

    if(options.store) {
        // 组件内部设定了store,则优先使用组件内部的store
        this.$store = typeof options.store === 'function'
            ? options.store()
            : options.store;
    } else if(options.parent && options.parent.$store) {
        // 组件内部没有设定store,则从根App.vue下继承$store方法
        this.$store = options.parent.$store
    }
}

export class store {
    constructor(options = {}, Vue) {
        this.options = options;
        Vue.mixin({ beforeCreate: VueInit })
    }

    get state() {
        return this.options.state;
    }
}
```

## getters的模拟实现

```js

```

## 常见题目

[引用1](https://www.cnblogs.com/Ponlai/p/9967050.html)

[引用2](https://blog.csdn.net/weixin_44667072/article/details/101164766)
