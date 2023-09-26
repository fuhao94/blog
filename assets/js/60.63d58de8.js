(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{475:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"react-合成事件的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-合成事件的优点"}},[t._v("#")]),t._v(" React 合成事件的优点")]),t._v(" "),s("ol",[s("li",[t._v("更好的兼容性和跨平台")]),t._v(" "),s("li",[t._v("挂载到根 DOM 容器，减少内存消耗，避免频繁解绑")]),t._v(" "),s("li",[t._v("方便事件的统一管理（如事务机制）")])]),t._v(" "),s("h3",{attrs:{id:"react-哪些不能命中-batchupdate-机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-哪些不能命中-batchupdate-机制"}},[t._v("#")]),t._v(" React 哪些不能命中 batchUpdate 机制")]),t._v(" "),s("ol",[s("li",[t._v("setTimeout setInterval等（和它调用的函数）")]),t._v(" "),s("li",[t._v("自定义 DOM 事件（和它调用的函数）")]),t._v(" "),s("li",[t._v('React "管不到"的入口')])]),t._v(" "),s("h3",{attrs:{id:"fiber-如何优化性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber-如何优化性能"}},[t._v("#")]),t._v(" Fiber 如何优化性能")]),t._v(" "),s("p",[t._v("可能会遇到的性能问题：")]),t._v(" "),s("ol",[s("li",[t._v("JS 单线程，且和 DOM 渲染共用一个线程")]),t._v(" "),s("li",[t._v("当组件足够复杂，组件更新时计算和渲染压力大")]),t._v(" "),s("li",[t._v("同时再有 DOM 操作需求（动画，鼠标拖拽等）将卡顿")])]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("ol",[s("li",[t._v("将 "),s("code",[t._v("reconciliation")]),t._v(" 阶段进行任务拆分（commit 不能拆分）")]),t._v(" "),s("li",[t._v("DOM 需要渲染时暂停，空闲时恢复")]),t._v(" "),s("li",[t._v("requestIdleCallback polyfill - "),s("code",[t._v("Scheduler")])])]),t._v(" "),s("h3",{attrs:{id:"key-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-的作用"}},[t._v("#")]),t._v(" Key 的作用")]),t._v(" "),s("ul",[s("li",[t._v("diff 算法中通过 tag 和 key 判断是否是 sameNode")]),t._v(" "),s("li",[t._v("减少渲染次数，提升渲染性能")])]),t._v(" "),s("h3",{attrs:{id:"react-router-如何配置懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-router-如何配置懒加载"}},[t._v("#")]),t._v(" React-router 如何配置懒加载")]),t._v(" "),s("p",[s("code",[t._v("lazy")]),t._v(" 配合 "),s("code",[t._v("suspense")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" suspense "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Home "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes/Home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" About "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes/About'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Suspense"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" exact component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("About"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Suspense"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h3",{attrs:{id:"ajax、axios、fetch的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax、axios、fetch的对比"}},[t._v("#")]),t._v(" ajax、axios、fetch的对比")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ajax")]),t._v(" "),s("p",[s("code",[t._v("XMLHttpRequest")]),t._v(" 多个先后关系的请求容易出现 "),s("code",[t._v("回调地域")])]),t._v(" "),s("ol",[s("li",[t._v("本身是针对 MVC 的编程, 不符合现在前端 MVVM 的浪潮")]),t._v(" "),s("li",[t._v("基于原生的 XHR 开发，XHR 本身的架构不清晰。")]),t._v(" "),s("li",[t._v("JQuery 整个项目太大，单纯使用 ajax 却要引入整个 JQuery 非常的不合理（采取个性化打包的方案又不能享受CDN服务）")]),t._v(" "),s("li",[t._v("不符合关注分离（Separation of Concerns）的原则")]),t._v(" "),s("li",[t._v("配置和调用方式非常混乱，而且基于事件的异步模型不友好。")])])]),t._v(" "),s("li",[s("p",[t._v("axios")]),t._v(" "),s("ol",[s("li",[t._v("从 node.js 创建 http 请求")]),t._v(" "),s("li",[t._v("支持 Promise")]),t._v(" "),s("li",[t._v("客户端防止 CSRF")]),t._v(" "),s("li",[t._v("提供并发请求的接口")])])]),t._v(" "),s("li",[s("p",[t._v("fetch")]),t._v(" "),s("p",[t._v("ES6 中出现，使用 Promise 对象。fetch 和原生 js 没有关系")]),t._v(" "),s("ol",[s("li",[t._v("语法简洁，更加语义化")]),t._v(" "),s("li",[t._v("是ES规范里新的实现方式，基于标准 Promise 实现，支持 async/await")]),t._v(" "),s("li",[t._v("fetch 只对网络请求报错，对 400，500 都当做成功的请求，服务器返回 400，500 错误码时并不会 reject")]),t._v(" "),s("li",[t._v("fetch 不支持 abort，不支持超时控制")]),t._v(" "),s("li",[t._v("fetch 没有办法原生监测请求的进度，而 XHR 可以")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);