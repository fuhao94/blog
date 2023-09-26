(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{512:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"完整的导航解析过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整的导航解析过程"}},[t._v("#")]),t._v(" 完整的导航解析过程")]),t._v(" "),a("ol",[a("li",[t._v("导航被触发。")]),t._v(" "),a("li",[t._v("在失活的组件里调用离开守卫。")]),t._v(" "),a("li",[t._v("调用全局的 beforeEach 守卫。")]),t._v(" "),a("li",[t._v("在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。")]),t._v(" "),a("li",[t._v("在路由配置里调用 beforeEnter。")]),t._v(" "),a("li",[t._v("解析异步路由组件。")]),t._v(" "),a("li",[t._v("在被激活的组件里调用 beforeRouteEnter。")]),t._v(" "),a("li",[t._v("调用全局的 beforeResolve 守卫 (2.5+)。")]),t._v(" "),a("li",[t._v("导航被确认。")]),t._v(" "),a("li",[t._v("调用全局的 afterEach 钩子。")]),t._v(" "),a("li",[t._v("触发 DOM 更新。")]),t._v(" "),a("li",[t._v("用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。")])]),t._v(" "),a("h2",{attrs:{id:"hash-和-history-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-和-history-区别"}},[t._v("#")]),t._v(" hash 和 history 区别")]),t._v(" "),a("p",[t._v("hash: 虽然出现在 URL 中，但不会被包含在 http 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。")]),t._v(" "),a("p",[t._v("history: history 利用了 html5 history interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求。")]),t._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("hash 模式的原理是 onhashchange 事件，可以在 window 对象上监听这个事件。")])]),t._v(" "),a("li",[a("p",[t._v("history ：hashchange 只能改变 # 后面的代码片段，history api （pushState、replaceState、go、back、forward） 则给了前端完全的自由，通过在window对象上监听popState()事件。")])])]),t._v(" "),a("h2",{attrs:{id:"组件缓存keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件缓存keep-alive"}},[t._v("#")]),t._v(" 组件缓存keep-alive")]),t._v(" "),a("ul",[a("li",[t._v("include - 字符串或正则表达式。只有名称匹配的组件会被缓存。")]),t._v(" "),a("li",[t._v("exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。")]),t._v(" "),a("li",[t._v("max - 数字。最多可以缓存多少组件实例。")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"动态移除缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态移除缓存"}},[t._v("#")]),t._v(" 动态移除缓存")]),t._v(" "),a("p",[a("code",[t._v("ps:尤大的意思是把 include 绑定一个计算属性")])]),t._v(" "),a("h2",{attrs:{id:"vuerouter遇到的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter遇到的一些问题"}},[t._v("#")]),t._v(" VueRouter遇到的一些问题")]),t._v(" "),a("h3",{attrs:{id:"点击相同tab-跳转相同路由-报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击相同tab-跳转相同路由-报错"}},[t._v("#")]),t._v(" 点击相同tab（跳转相同路由）报错")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fix Uncaught (in promise) 修复跳转相同路由报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originalPush "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("push")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("originalPush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);