---
title: PWA 实践
date: 2023-09-27
categories:
  - 分享
---

## 简介

PWA 它不是特指某一项技术，而是应用多项技术来改善用户体验的 Web App，其核心技术包括 Web App Manifest，Service Worker 等，用户体验才是 PWA 的核心。

特点：

- 可靠 - 即使在网络不稳定甚至断网的环境下，也能瞬间加载并展现
- 用户体验 - 快速响应，具有平滑的过渡动画及用户操作的反馈
- 用户黏性 - 和 `Native App` 一样，可以被添加到桌面，具有沉浸式的用户体验

## 核心技术

### Web App Manifest

主要为 `manifest.json` ，提供浏览器安装 PWA 所需的信息，例如应用程序名称和图标等。`Web app manifests` 允许开发者配置隐藏浏览器多余的 UI（地址栏，导航栏等），让 PWA 具有和 `Native App` 一样的沉浸式体验。

### Service Worker

- 使用到的时候浏览器会自动唤醒，不用的时候自动休眠
- 可拦截并代理请求和处理返回，可以操作本地缓存，如 `CacheStorage`，`IndexedDB` 等
- 离线内容开发者可控
- 能接受服务器推送的离线消息
- 必须在 HTTPS 环境下才能工作（`localhost` `127.0.0.1` 为白名单ip）

生命周期如下：

1. 注册，使用 ServiceWorkerContainer.register() 方法首次注册 service worker
2. 下载，页面首次加载后会下载ServiceWorker或者过去 24 小时没有被下载会再次下载
3. 安装，首次启用 service worker，页面会首先尝试安装，如果现有 service worker 已启用，新版本会在后台安装，但仍不会被激活——这个时序称为 worker in waiting。
4. 激活，首次启用 service worker，安装结束后会直接激活，新版本的service worker会直到所有已加载的页面不再使用旧的 service worker 才会激活新的 service worker，但是可以通过ServiceWorkerGlobalScope.skipWaiting() 可以更快地进行激活。

![生命周期](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers/sw-lifecycle.svg)

## 项目实践

### 安装到主屏幕

1. 根目录下创建 `manifest.json`;

```json
{
  "short_name": "APP 简称",
  "name": "APP 名称",
  "icons": [
    {
      "src": "xx.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "xx.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "start_url": ".",
  "display": "minimal-ui",
  "background_color": "#fff",
  "theme_color": "#fff"
}
```

2. 引用 `manifest.json`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      id="scale-view"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </head>
</html>
```

### 配置缓存

#### webpack

引用了 `chrome` 官方出的插件 `workbox-webpack-plugin`;

该插件导出了两个插件 `GenerateSW` 和 `InjectManifest`; 如果使用简单配置，前者就可以满足。如果需要定制化缓存策略，预加载这些，使用后者；

一些名词解释：

- LRU算法

LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。

- 动态缓存策略
   1. CacheFirst: 会在有缓存的时候返回缓存，没有缓存才会去请求并且把请求结果缓存
   2. CacheOnly: 只返回缓存，不请求
   3. NetworkFirst: 请求将会发出，成功的话就返回结果添加到缓存中，如果失败则返回立即缓存
   4. NetworkOnly: 只请求，不读写缓存
   5. StaleWhileRevalidate: 类似于 CacheFirst，区别在于在返回 Cache 缓存结果的同时会在后台发起网络请求拿到请求结果并更新 Cache 缓存，如果本来就没有 Cache 缓存的话，直接就发起网络请求并返回结果

**umirc.ts**

```ts
import { defineConfig } from 'umi';
import { InjectManifest } from 'workbox-webpack-plugin';

export default defineConfig({
  chainWebpack(memo) {
    // workbox 配置
    memo.plugin('workbox').use(InjectManifest, [
      {
        swSrc: './service-worker.js', // 编写好的 service-worker.js 的位置，相对于根目录
        swDest: 'service-worker.js', // 经 webpack 处理后的 service-worker.js 位置，相对于 /public
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 适当调整预缓存的单个文件大小上限
      },
    ]);
  }
})
```

**service-worker.js**

```js
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  StaleWhileRevalidate,
  NetworkFirst,
  CacheFirst,
} from 'workbox-strategies';
import { setCacheNameDetails } from 'workbox-core';

setCacheNameDetails({
  prefix: 'app',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
});

self.__WB_DISABLE_DEV_LOGS = true;

const precacheList = self.__WB_MANIFEST || [];
// 预缓存策略
precacheAndRoute(precacheList);

// 三方资源缓存
registerRoute(
  /.*(gif|jpg|jpeg|png|svg|otf|woff|woff2|ttf|mp4|pbf).*/,
  new CacheFirst({
    cacheName: 'app-cache-static',
    expiration: {
      maxEntries: 100, // 最多缓存 100 个，超过的按照LRU原则删除
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    },
  }),
);

// js缓存
registerRoute(
  /.*\.js.*/,
  new StaleWhileRevalidate({
    cacheName: 'app-cache-js',
    expiration: {
      maxEntries: 100, 
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    },
  }),
);

// 样式缓存
registerRoute(
  /.*\.css.*/,
  new StaleWhileRevalidate({
    cacheName: 'app-cache-style',
    expiration: {
      maxEntries: 100,
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    },
  }),
);

// 接口缓存
registerRoute(
  /^.*(-api\.).*$/,
  new NetworkFirst({
    cacheName: 'app-cache-api',
    cacheableResponse: {
      statuses: [200],
    },
  }),
);

// 兜底规则
registerRoute(
  ({ url }) => {
    // vms 视频流格式进行过滤，直播没必要缓存
    const reg = /.*(\.flv|\.m3u8|\.ts|\.tsx).*/;
    return !reg.test(url.href);
  },
  new NetworkFirst({
    cacheName: 'app-cache-others',
    cacheableResponse: {
      statuses: [200],
    },
  }),
);
```

#### vite

引用了 `vite` 官方的插件 `vite-plugin-pwa`;

**vite.config.ts**

```ts
import { VitePWA } from 'vite-plugin-pwa';

export const defineConfig({
  plugins: [
    VitePWA({
      // 开发环境开启，默认false；
      devOptions: {
        enabled: true,
      },
      registerType: "autoUpdate",
      // 生成 manifest
      manifest: {
        short_name: "APP 简称",
        name: "APP 名称",
        icons: [
          {
            src: "xx.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "xx.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          }
        ],
        start_url: ".",
        display: "minimal-ui",
        background_color: "#fff",
        theme_color: "#fff",
      },
      workbox: {
        // 开发环境禁止打印log
        disableDevLogs: true,
        // 删除过时、老版本的缓存
        cleanupOutdatedCaches: true,
        // 全局匹配的文件
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /.*\.js.*/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "app-cache-js",
              expiration: {
                maxEntries: 100, //最多缓存 100 个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /.*css.*/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "app-cache-style",
              expiration: {
                maxEntries: 100, //最多缓存 100 个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /.*(gif|jpg|jpeg|png|svg|otf|woff|woff2|ttf|mp4).*/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "app-cache-static",
              expiration: {
                maxEntries: 100, // 最多缓存 100 个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            // To match cross-origin requests, use a RegExp that matches
            // 开发、测试、正式、私有化 暂时以 -api. 去匹配
            urlPattern: /^.*(-api\.).*$/,
            // urlPattern: new RegExp('^https://lins-test1-api.'),
            // 请求类的缓存，强制要求 network 优先，再读取缓存（离线）
            handler: "NetworkFirst",
            options: {
              cacheName: "app-cache-api",
              // Configure which responses are considered cacheable.
              // networkTimeoutSeconds: 2,
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
          {
            // 兜底规则
            urlPattern: ({ url }) => {
              // vms 视频流格式进行过滤，直播没必要缓存
              const reg = /.*(\.flv|\.m3u8|\/hls\/live\/).*/;
              return !reg.test(url.href);
            },
            handler: "NetworkFirst",
            options: {
              cacheName: "app-cache-others",
              // Configure which responses are considered cacheable.
              // networkTimeoutSeconds: 2,
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
        ],
      },
    }),
  ]    
})
```