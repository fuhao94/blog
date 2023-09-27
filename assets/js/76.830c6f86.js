(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{491:function(t,s,a){"use strict";a.r(s);var v=a(0),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[t._v("#")]),t._v(" 组成")]),t._v(" "),s("p",[t._v("客户端发送一个HTTP请求到服务器的请求消息包括以下格式：")]),t._v(" "),s("p",[t._v("请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST / HTTP1.1\nHost:www.wrox.com\nUser-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)\nContent-Type:application/x-www-form-urlencoded\nContent-Length:40\nConnection: Keep-Alive\n\nname=Professional%20Ajax&publisher=Wiley\n第一部分：请求行，第一行明了是post请求，以及http1.1版本。\n第二部分：请求头部，第二行至第六行。\n第三部分：空行，第七行的空行。\n第四部分：请求数据，第八行。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"http一些状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http一些状态码"}},[t._v("#")]),t._v(" HTTP一些状态码")]),t._v(" "),s("ul",[s("li",[t._v("200：请求被正常处理")]),t._v(" "),s("li",[t._v("204：请求被受理但没有资源可以返回")]),t._v(" "),s("li",[t._v("206：客户端只是请求资源的一部分，服务器只对请求的部分资源执行GET方法，相应报文中通过Content-Range指定范围的资源。")]),t._v(" "),s("li",[t._v("301：永久性重定向")]),t._v(" "),s("li",[t._v("302：临时重定向")]),t._v(" "),s("li",[t._v("303：与302状态码有相似功能，只是它希望客户端在请求一个URI的时候，能通过GET方法重定向到另一个URI上")]),t._v(" "),s("li",[t._v("304：发送附带条件的请求时，条件不满足时返回，与重定向无关")]),t._v(" "),s("li",[t._v("307：临时重定向，与302类似，只是强制要求使用POST方法")]),t._v(" "),s("li",[t._v("400：请求报文语法有误，服务器无法识别")]),t._v(" "),s("li",[t._v("401：请求需要认证")]),t._v(" "),s("li",[t._v("403：请求的对应资源禁止被访问")]),t._v(" "),s("li",[t._v("404：服务器无法找到对应资源")]),t._v(" "),s("li",[t._v("500：服务器内部错误")]),t._v(" "),s("li",[t._v("503：服务器正忙")])]),t._v(" "),s("h2",{attrs:{id:"版本变动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本变动"}},[t._v("#")]),t._v(" 版本变动")]),t._v(" "),s("p",[t._v("HTTP1.1新改动：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("持久连接")])]),t._v(" "),s("li",[s("p",[t._v("请求管道化")])]),t._v(" "),s("li",[s("p",[t._v("增加缓存处理（新的字段如cache-control）")])]),t._v(" "),s("li",[s("p",[t._v("增加Host字段、支持断点传输等")])])]),t._v(" "),s("p",[t._v("HTTP2新改动：")]),t._v(" "),s("ol",[s("li",[t._v("二进制分帧")])]),t._v(" "),s("p",[t._v("帧是数据传输的最小单位，以二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("多路复用")])]),t._v(" "),s("p",[t._v("流的概念实现了单连接上多请求 - 响应并行，解决了线头阻塞的问题，减少了 TCP 连接数量和 TCP 连接慢启动造成的问题")]),t._v(" "),s("p",[t._v("所以 http2 对于同一域名只需要创建一个连接，而不是像 http/1.1 那样创建 6~8 个连接:")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("头部压缩")])]),t._v(" "),s("li",[s("p",[t._v("服务器推送")])])]),t._v(" "),s("p",[t._v("浏览器发送一个请求，服务器主动向浏览器推送与这个请求相关的资源，这样浏览器就不用发起后续请求。")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("请求优先级设置")])]),t._v(" "),s("p",[t._v("HTTP/2 里的每个 stream 都可以设置依赖 (Dependency) 和权重，可以按依赖树分配优先级，解决了关键请求被阻塞的问题")]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("HTTP/1 的几种优化可以弃用")])]),t._v(" "),s("p",[t._v("合并文件、内联资源、雪碧图、域名分片对于 HTTP/2 来说是不必要的，使用 http2 尽可能将资源细粒化，文件分解地尽可能散，不用担心请求数多")]),t._v(" "),s("h2",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),s("p",[t._v("所谓HTTPS，其实就是身披SSL协议这层外壳的HTTP。")]),t._v(" "),s("p",[t._v("HTTPS 协议的主要功能基本都依赖于 TLS/SSL 协议，TLS/SSL 的功能实现主要依赖于三类基本算法：散列函数 、对称加密和非对称加密，其利用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证信息的完整性。")])])}),[],!1,null,null,null);s.default=_.exports}}]);