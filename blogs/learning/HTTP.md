---
title: HTTP
date: 2021-03-25
categories:
  - HTTP
---

## HTTP

### 报文结构

```
POST / HTTP1.1
Host:www.wrox.com
User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
Content-Type:application/x-www-form-urlencoded
Content-Length:40
Connection: Keep-Alive

name=Professional%20Ajax&publisher=Wiley
第一部分：请求行，第一行明了是post请求，以及http1.1版本。
第二部分：请求头部，第二行至第六行。
第三部分：空行，第七行的空行。
第四部分：请求数据，第八行。
```

### 请求方法

* GET: 通常用来获取资源
* HEAD: 获取资源的元信息
* POST: 提交数据，即上传数据
* PUT: 修改数据
* DELETE: 删除资源(几乎用不到)
* CONNECT: 建立连接隧道，用于代理服务器
* OPTIONS: 列出可对资源实行的请求方法，用来跨域请求
* TRACE: 追踪请求-响应的传输路径

### HTTP 状态码

* 101 Switching Protocols。在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码 101。
  
* 200 OK是见得最多的成功状态码。通常在响应体中放有数据。
* 204 No Content含义与 200 相同，但响应头后没有 body 数据。
* 206 Partial Content顾名思义，表示部分内容，它的使用场景为 HTTP 分块下载和断电续传，当然也会带上相应的响应头字段Content-Range。
  
* 301 Moved Permanently即永久重定向，对应着302 Found，即临时重定向。`比如你的网站从 HTTP 升级到了 HTTPS 了，以前的站点再也不用了，应当返回301，这个时候浏览器默认会做缓存优化，在第二次访问的时候自动访问重定向的那个地址。 而如果只是暂时不可用，那么直接返回302即可，和301不同的是，浏览器并不会做缓存优化。`
* 304 Not Modified: 当协商缓存命中时会返回这个状态码。详见浏览器缓存
  
* 400 Bad Request: 开发者经常看到一头雾水，只是笼统地提示了一下错误，并不知道哪里出错了。
* 403 Forbidden: 这实际上并不是请求报文出错，而是服务器禁止访问，原因有很多，比如法律禁止、信息敏感。
* 404 Not Found: 资源未找到，表示没在服务器上找到相应的资源。
* 405 Method Not Allowed: 请求方法不被服务器端允许。
* 406 Not Acceptable: 资源无法满足客户端的条件。
* 408 Request Timeout: 服务器等待了太长时间。
* 409 Conflict: 多个请求发生了冲突。
* 413 Request Entity Too Large: 请求体的数据过大。
* 414 Request-URI Too Long: 请求行里的 URI 太大。
* 429 Too Many Request: 客户端发送的请求过多。
* 431 Request Header Fields Too Large请求头的字段内容太大。

* 500 Internal Server Error: 仅仅告诉你服务器出错了，出了啥错咱也不知道。
* 501 Not Implemented: 表示客户端请求的功能还不支持。
* 502 Bad Gateway: 服务器自身是正常的，但访问的时候出错了，啥错误咱也不知道。
* 503 Service Unavailable: 表示服务器当前很忙，暂时无法响应服务。

### HTTP1.1 

1. 持久连接
2. 请求管道化
3. 增加缓存处理（新的字段如cache-control）
4. 增加Host字段、支持断点传输等

### HTTP2 新改动：

1. 二进制分帧 `帧是数据传输的最小单位，以二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧`
2. 多路复用 `流的概念实现了单连接上多请求 - 响应并行，解决了线头阻塞的问题，减少了 TCP 连接数量和 TCP 连接慢启动造成的问题 所以 http2 对于同一域名只需要创建一个连接，而不是像 http/1.1 那样创建 6~8 个连接`
3. 头部压缩
4. 服务器推送 `浏览器发送一个请求，服务器主动向浏览器推送与这个请求相关的资源，这样浏览器就不用发起后续请求。`
5. 请求优先级设置 `HTTP/2 里的每个 stream 都可以设置依赖 (Dependency) 和权重，可以按依赖树分配优先级，解决了关键请求被阻塞的问题`
6. HTTP/1 的几种优化可以弃用 `合并文件、内联资源、雪碧图、域名分片对于 HTTP/2 来说是不必要的，使用 http2 尽可能将资源细粒化，文件分解地尽可能散，不用担心请求数多`

### HTTPS

所谓HTTPS，其实就是身披SSL协议这层外壳的HTTP。

HTTPS 协议的主要功能基本都依赖于 TLS/SSL 协议，TLS/SSL 的功能实现主要依赖于三类基本算法：散列函数 、对称加密和非对称加密，其利用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证信息的完整性。h

### http 缓存机制

**强缓存和协商缓存**

1. 浏览器在加载资源时，根据请求头的 expires 和 cache-control 判断是否命中强缓存，是则直接从缓存读取资源，不会发请求到服务器。
2. 如果没有命中强缓存，则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的 If-Modified-Since 或者 If-None-Match 这些条件请求字段检查资源是否更新，若资源更新，返回资源和 200 状态码，否则，返回 304，告诉浏览器直接从缓存获取资源。
3. 如果前面两者都没有命中，直接从服务器加载资源

**相同点：如果命中，都是从客户端缓存中加载资源（资源更新除外），而不是从服务器加载资源数据；**

**不同点：强缓存不发请求到服务器，协商缓存会发请求到服务器。**

### GET 和 POST 有什么区别？

* 从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。
* 从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。
* 从参数的角度，GET 一般放在 URL 中（取决于浏览器和服务器，有长度限制），因此不安全，POST 放在请求体中，更适合传输敏感信息。
* 从幂等性的角度，GET是幂等的，而POST不是。(幂等表示执行相同的操作，结果也是相同的)
* 从TCP的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)

### 队头阻塞是什么情况会发生？http2解决后有没有缺陷？http3如何做的改进？

发生条件：当顺序发送的请求序列中的一个请求因为某种原因被阻塞时，在后面排队的所有请求也一并被阻塞，会导致客户端迟迟收不到数据。

HTTP2："多路复用" - 多个请求是跑在一个 TCP 管道中，HTTP/2 出现丢包时，整个 TCP 都要开始等待重传，那么就会阻塞该 TCP 连接中的所有请求。

HTTP3："多路复用" - 实现了在同一物理连接上可以有多个独立的逻辑数据流。实现了数据流的单独传输，就解决了 TCP 中队头阻塞的问题。

**QUIC 基于 UDP 实现，是 HTTP/3 中的底层支撑协议。该协议基于 UDP，又汲取了 TCP 中的精华，实现了既快又可靠的协议。**

### 说说 cors 跨域，简单请求和非简单请求区别

只要同时满足以下两大条件，就属于简单请求。

1. 请求方法是以下三种方法之一： `HEAD` `GET` `POST`
2. HTTP的头信息不超出以下几种字段： `Accept` `Accept-Language` `Content-Language` `Last-Event-ID` `Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain`

### 简单请求

**CORS 请求默认不发送 cookie 和 HTTP 认证信息，需要设置 `withCredentials:true`**

对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。

### 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

## 缓存

### 方式有哪些

* 数据库缓存

* 服务器缓存
    * 代理服务器缓存
    * CDN 缓存

* 客户端缓存
    * HTTP header缓存机制
        * 强缓存
        * 协商缓存
    * 数据缓存
        * cookie
        * web storage(local、session)
        * indexDB
        * web SQL
    * 应用(离线)缓存、PWA

## 业务场景

### 单点登录

概念：在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统。

**第一个系统登录流程**

1. 用户访问app系统，app系统是需要登录的，但用户现在没有登录。
2. 跳转到CAS server，即SSO登录系统，以后图中的CAS Server我们统一叫做SSO系统。 SSO系统也没有登录，弹出用户登录页。
3. 用户填写用户名、密码，SSO系统进行认证后，将登录状态写入SSO的session，浏览器（Browser）中写入SSO域下的Cookie。
4. SSO系统登录完成后会生成一个ST（Service Ticket），然后跳转到app系统，同时将ST作为参数传递给app系统。
5. app系统拿到ST后，从后台向SSO发送请求，验证ST是否有效。 
6. 验证通过后，app系统将登录状态写入session并设置app域下的Cookie。

至此，跨域单点登录就完成了。以后我们再访问app系统时，app就是登录的。接下来，我们再看看访问app2系统时的流程。

**第二个系统登录流程**

1. 用户访问app2系统，app2系统没有登录，跳转到SSO。
2. 由于SSO已经登录了，不需要重新登录认证。
3. SSO生成ST，浏览器跳转到app2系统，并将ST作为参数传递给app2。
4. app2拿到ST，后台访问SSO，验证ST是否有效。
5. 验证成功后，app2将登录状态写入session，并在app2域下写入Cookie。

这样，app2系统不需要走登录流程，就已经是登录了。SSO，app和app2在不同的域，它们之间的session不共享也是没问题的。

