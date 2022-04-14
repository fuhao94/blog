---
title: Vue2 项目迁移 Vite 实践
date: 2021-04-14
categories:
 - 分享
---

:::tip
实际项目随着版本不断迭代，本地开发构建速度越来越慢，尝试使用 Vite 实现本地开发配置，本文是迁移过程中遇到的实际问题集合
:::

### `index.html` 位置

通过 `vue-cli` 构建的项目，`index.html` 是放在 `/public` 下的，需要迁移至根目录，并且需要在文件中加上一句

```html
<script type="module" src="/src/main.js"></script>
```

在浏览器端使用 `export` `import` 的方式导入和导出模块

### 文件引入需要精确到 `.vue` 级别

```js
const NoPermission = () => import(/* webpackChunkName: "home" */ '@/pages/error-page/no-permission')

// 错误信息
`Uncaught (in promise) TypeError: Failed to fetch dynamically imported module: http://localhost:3000/src/pages/error-page/no-permission`
```

### 需要精确到 `.vue`

```js
const NoPermission = () => import(/* webpackChunkName: "home" */ '@/pages/error-page/no-permission/index.vue')
```

### `cjs` 模块化不支持

1. `require` 语法改成 `import`，浏览器仅支持 `esm` 不支持 `cjs`

```js
const isBetween = require('dayjs/plugin/isBetween')

// 替换成
import isBetween from 'dayjs/plugin/isBetween'
```

2. 或者使用插件形式处理

```js
import { cjs2esmVitePlugin } from 'cjs2esmodule'

export default defineConfig({
  // ...
  
  plugins: [
    // others plugins
    // ...
    
    cjs2esmVitePlugin()
  ],
})
```

### scss 等预处理器需要注入 mixin

```js
export default defineConfig({
  // ...

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/sass/mixin.scss";',
      },
    },
  },
})
```

### `/deep/` 语法无法支持，使用 `:deep` 或者 `::v-deep` 代替

```scss
/deep/ &:nth-child(1) {
  padding-left: 24px;
}

// 替换成
:deep &:nth-child(1) {
  padding-left: 24px;
}
```

### `jsx`语法支持性 

需要把涉及的文件添加上 `lang=jsx`; `createVuePlugin` 需要开启 `jsx: true` 支持；

```html
<script lang="jsx">
  render() {
    return <div>测试一下</div>
  }
</script>
```

```js
export default defineConfig({
  // ...
  
  plugins: [
    // others plugins
    // ...

    createVuePlugin({
      jsx: true, // 支持 JSX
      jsxOptions: {
        injectH: false,
      },
    })
  ],
})
```

### `Failed to fetch dynamically imported module`

**有好几种原因造成**

1. 未正确引入文件，组件需要精确到 `.vue`
2. `vite` 对 `dynamic import` 有自己的方式，需要使用 `import.meta.glob`

原先写法

```js
const ComponentA = () => import(/* webpackChunkName: "component" */ '/src/pages/module-a/index.vue')
const ComponentB = () => import(/* webpackChunkName: "component" */ '/src/pages/module-b/index.vue')
```

替换成

```js
const modules = import.meta.glob('/src/pages/**/*/*.vue');

const ComponentA = modules['/src/pages/module-a/index.vue']
const ComponentB = modules['/src/pages/module-b/index.vue']
```

**这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准**

### 未完...待总结







































