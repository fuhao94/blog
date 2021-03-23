---
title: Vue - 组件通信
date: 2020-11-06
categories:
 - Vue
---

## EventBus通信

### 原理

原理为发布/订阅方法 通常称为 Pub/Sub

项目如果是中大型的不适合用，推荐使用Vuex;

### 全局注册

```js
// 入口文件
const eventBus = {
    install(Vue,options) {
        Vue.prototype.$bus = vue
    }
};
Vue.use(eventBus);
```

```js
this.$bus.$emit('todoSth', params);  //params是传递的参数
```

```js
this.$bus.$on('todoSth', (params) => {  //获取传递的参数并进行操作
  //todo something
})
```
