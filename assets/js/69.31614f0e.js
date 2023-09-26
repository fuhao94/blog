(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{484:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[s._v("#")]),s._v(" 工程化")]),s._v(" "),a("h2",{attrs:{id:"babel-是如何编译-async-和-generator-的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-是如何编译-async-和-generator-的"}},[s._v("#")]),s._v(" Babel 是如何编译 Async 和 Generator 的")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://libin1991.github.io/2020/02/26/Babel%E6%98%AF%E5%A6%82%E4%BD%95%E7%BC%96%E8%AF%91Async%E5%92%8CGenerator%E7%9A%84/",target:"_blank",rel:"noopener noreferrer"}},[s._v("戳这里"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"从输入-url-到打开页面发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到打开页面发生了什么"}},[s._v("#")]),s._v(" 从输入 URL 到打开页面发生了什么？")]),s._v(" "),a("h1",{attrs:{id:"安全问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全问题"}},[s._v("#")]),s._v(" 安全问题")]),s._v(" "),a("h2",{attrs:{id:"xss-和-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-和-csrf"}},[s._v("#")]),s._v(" XSS 和 CSRF")]),s._v(" "),a("h1",{attrs:{id:"性能相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能相关"}},[s._v("#")]),s._v(" 性能相关")]),s._v(" "),a("h2",{attrs:{id:"如何减少白屏时间-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何减少白屏时间-优化"}},[s._v("#")]),s._v(" 如何减少白屏时间&优化")]),s._v(" "),a("p",[a("strong",[s._v("从大方向出发")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("加速或减少HTTP请求损耗：使用CDN加载公用库，使用强缓存和协商缓存，使用域名收敛，小图片使用Base64代替，使用Get请求代替Post请求，设置 Access-Control-Max-Age 减少预检请求，页面内跳转其他域名或请求其他域名的资源时使用浏览器prefetch预解析等；\n\n浏览器渲染原理：优化关键渲染路径，尽可能减少阻塞渲染的JS、CSS\n\n减少请求内容的体积：压缩、SSR\n\n延迟加载：非重要的库、非首屏图片延迟加载，路由和组件懒加载等；\n\n优化用户等待体验：白屏使用加载进度条、loading图、骨架屏代替等\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("从技术角度出发")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("HTML + CSS 优化\n1. 压缩体积\n2. css 放在 head 进行加载\n\nJavaScript优化（js 的解析线程是和 ui 渲染的线程公用）\n1. 压缩JS文件，放到 html 底部\n2. 巧用 script 的 defer 和 async 属性\n\n资源加载优化\n1. 利用 webpack 进行拆分，利用浏览器提供的并发加载来加速资源的加载速度。\n2. 利用 webpack 的异步加载或者利用框架自带的一些工具进行组件抽离，尽可能减少首屏加载时的业务代码体积。\n3. 图片使用懒加载的形式\n4. 可以使用 preload 对本页资源进行预加载，例如字体文件，可以让css使用的字体可以提前进行加载\n5. 可以使用 prefetch 对之后其他页面可能用到的资源进行预加载。优先级会比preload低。\n6. DNS 预解析 dns-prefetch，对一些常用的域名进行预解析，提高dns的速度。\n\n网络优化\n1. 静态资源上 cdn\n2. 启用 http2.0，使用多路复用，提高并发请求中的 tcp 重复握手问题。\n3. 对资源按需处理过期时间，对于长久的资源使用超长过期时间，并通过 webpack 构建出带有文件 md5 的文件名，对文件进行强制更新\n\n运行优化\n1. 慎用定时器\n2. 虚拟滚动，长列表优化\n3. 图片按需加载\n4. 事件委托\n5. 减少阻塞线程操作，例如数据量大的循环，频繁的事件响应（节流，防抖）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);