(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{488:function(t,v,_){"use strict";_.r(v);var a=_(0),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"状态转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态转换"}},[t._v("#")]),t._v(" 状态转换")]),t._v(" "),v("p",[t._v("三次握手和四次挥手的状态转换。")]),t._v(" "),v("ol",[v("li",[t._v("SYN(synchronous建立联机)")]),t._v(" "),v("li",[t._v("ACK(acknowledgement 确认)")]),t._v(" "),v("li",[t._v("PSH(push传送) FIN(finish结束)")]),t._v(" "),v("li",[t._v("RST(reset重置)")]),t._v(" "),v("li",[t._v("URG(urgent紧急)")]),t._v(" "),v("li",[t._v("Sequence number(顺序号码)")]),t._v(" "),v("li",[t._v("Acknowledge number(确认号码)")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-e8aaab48ff996e5cd8a5b39dc450bd6a_720w.jpg",alt:"状态转换图"}})]),t._v(" "),v("h2",{attrs:{id:"三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-07c065a0321f887ae69e269d8dda9f43_720w.jpg",alt:"三次握手"}})]),t._v(" "),v("blockquote",[v("p",[t._v("换个易于理解的视角；三次握手作用：双方都能明确自己和对方的收、发能力是正常的")])]),t._v(" "),v("ol",[v("li",[v("code",[t._v("第一次握手")]),t._v(" 客户端发送网络包，服务端收到了；")])]),t._v(" "),v("blockquote",[v("p",[t._v("客户端的发送能力、服务端的接收能力是正常的。")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("code",[t._v("第二次握手")]),t._v(" 服务端发包，客户端收到了；")])]),t._v(" "),v("blockquote",[v("p",[t._v("服务端的接收、发送能力，客户端的接收、发送能力是正常的。 从客户端的视角来看，我接到了服务端发送过来的响应数据包，说明服务端接收到了我在第一次握手时发送的网络包，并且成功发送了响应数据包，这就说明，服务端的接收、发送能力正常。而另一方面，我收到了服务端的响应数据包，说明我第一次发送的网络包成功到达服务端，这样，我自己的发送和接收能力也是正常的。")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("code",[t._v("第三次握手")]),t._v(" 客户端发包，服务端收到了；")])]),t._v(" "),v("blockquote",[v("p",[t._v("客户端的接收、发送能力，服务端的发送、接收能力是正常的。 第一、二次握手后，服务端并不知道客户端的接收能力以及自己的发送能力是否正常。而在第三次握手时，服务端收到了客户端对第二次握手作的回应。从服务端的角度，我在第二次握手时的响应数据发送出去了，客户端接收到了。所以，我的发送能力是正常的。而客户端的接收能力也是正常的。")])]),t._v(" "),v("h2",{attrs:{id:"四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-629f51f6f535ebd7683f944707b21d1e_720w.jpg",alt:"四次挥手"}})]),t._v(" "),v("h2",{attrs:{id:"为什么建立连接是三次握手-而关闭连接却是四次挥手呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立连接是三次握手-而关闭连接却是四次挥手呢"}},[t._v("#")]),t._v(" 为什么建立连接是三次握手，而关闭连接却是四次挥手呢？")]),t._v(" "),v("p",[t._v("这是因为服务端在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。而关闭连接时，当收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，己方是否现在关闭发送数据通道，需要上层应用来决定，因此，"),v("strong",[t._v("己方ACK和FIN一般都会分开发送")]),t._v("。")])])}),[],!1,null,null,null);v.default=s.exports}}]);