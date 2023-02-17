(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{607:function(e,n,t){"use strict";t.r(n);var o=t(13),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[t("p",[e._v("webpack  react 按需加载，构建 mode 为 development的时候，如果新增引入 路由模块，之前的模块 的chunkhash 不会改变，如果 mode 为 production 的话，chunkhash 全被改变。\n问题原因：有4个点\nmodule name 太长 如何优化")])]),e._v(" "),t("li",[t("p",[e._v("问题1的修改(mode: none)，导致失去了 tree sharking 的能力，。\n解决方案：在 optimization 选项添加 usedExports 为 true，就会有 tree sharking\n缺点：chunkhash 会被改变，因为文件会发生变化")])]),e._v(" "),t("li",[t("p",[e._v("想要重新定义 XMLHttpRequest.prototype.onreadystatechange 方法的时候报错\n解决方案一：利用 open（估计 send 也可以）对 onreadystatechange 做 monkey patch\n//   重写部分\nconst open = XMLHttpRequest.prototype.open;\n// 使用 puer 的时候 open 会被调用多次，因为 puer 也是用 xml\nXMLHttpRequest.prototype.open = function(...args) {\nlet onreadystatechange = this.onreadystatechange;\nthis.onreadystatechange = function() {\nonreadystatechange && onreadystatechange.apply(this, args);\n};")]),e._v(" "),t("p",[e._v("open.apply(this, args);\n};")])]),e._v(" "),t("li",[t("p",[e._v("页面刷新，因为部分组件没使用状态管理，所以在 didmount 钩子发送请求，没有办法让他触发。\n解决方案：forceupdate render方法返回 null，用于清空之前的 dom，之后再调用 forceupdate，返回render 的结果。\n碰到了另外一个问题，微应用里dom节点被删除了，要加载 single-spa 里的状态，删掉之前挂载的。\n最后的解决方案：主应用通过 actions 设置 global 变量 (storeId)，子应用再更新 redux 的值（storeId），触发刷新，但是存在的问题是：如果是类组件，那么 componentDicMounted 不会再触发，在这里写的获取接口的也就不会被调用，所以在最外层组件加了个 key 值为 storeId，如果单个节点 key 变化，就直接被删除。")])])]),e._v(" "),t("p",[e._v("5.webapp优化构建速度\n把 babel-loader 和 terser 打包出来的，压缩成 tar 包，打包的时候拿出来使用\nBabel-loader 存储与取出存储规则：文件 source，配置 config等等生成 md4 + .json 路径，打成 gzip 放到目录里，取的时候也是按路径取\nTerser 存储与取出存储规则：根据生成的内存中的文件字符串，contenthash，config 等等，生成唯一标识，然后存起来\nTerser 插件优化\n￼\n￼")]),e._v(" "),t("p",[e._v("Css插件压缩\n￼")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[e._v("useState，初始化的值有依赖外部的变量，每次 renderWitdhHook 的时候，useState 得到的 state 都是第一次调用时候被缓存的。并不会每次都更新")])]),e._v(" "),t("li",[t("p",[e._v("长列表渲染优化，分时渲染")])]),e._v(" "),t("li",[t("p",[e._v('qiankun本地开发，域名访问不了其他的微应用，目前是不同域名之前，使用 cookie 设置 token，应用域名为 admin.pupuvip.com 与 scm.pupuvip.com，所以设置域名的时候要改成 二级域 document.cookie="name=qhw; domain=.pupuvip.com”，之后就可以共享域名了。\nQiankun js隔离：')])]),e._v(" "),t("li",[t("p",[e._v("子应用绑定 window.onresize 失效\nwindow.onresize 改成     window.addEventListener(\"resize\", function(){\nconsole.log('resize');\n})\n因为 直接绑定 onresize 因为 configable 是 undefined，所以被忽略了，addEventListener 是真实的 window 上的，不是代理的")])]),e._v(" "),t("li",[t("p",[e._v("prerender 插件遇到的问题\n1）按需加载，首屏为空，需要某个时机点触发，有侵入性\n2）系统构建，需要安装谷歌浏览器（80mb），安装慢，影响整体构建速度慢，所以想要改成本地构建生成模板文件。")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);