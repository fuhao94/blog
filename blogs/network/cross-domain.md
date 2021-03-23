---
title: 网络 - 跨域
date: 2020-11-06
categories:
 - 网络
---

## 1. CORS

普通服务端：`headers` 里的 `Access-Control-Allow-Origin` 设置为 `*`

> 服务器默认是不被允许跨域的。给Nginx服务器配置`Access-Control-Allow-Origin *`后，表示服务器可以接受所有的请求源（Origin）,即接受所有跨域的请求。

Nginx实现：

```editorconfig
location / {  
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

    if ($request_method = 'OPTIONS') {
        return 204;
    }
} 
```

## 2. Vue devServer

```js
module.exports = {
    devServer: {
        compress: true,
        port: '端口号',
        historyApiFallback: true,
        disableHostCheck: true,
        noInfo: true,
        '/api': {
            target: '接口地址',
            changeOrigin: true,
            secure: false // 当代理某些https服务报错时用
        }
    }
}
```


## 3. JSONP

在HTML标签里，一些标签比如script、img这样的获取资源的标签是没有跨域限制的

后端写个小接口

```js
const {successBody} = require('../utli')
class CrossDomain {
  static async jsonp (ctx) {
    // 前端传过来的参数
    const query = ctx.request.query
    // 设置一个cookies
    ctx.cookies.set('tokenId', '1')
    // query.cb是前后端约定的方法名字，其实就是后端返回一个直接执行的方法给前端，由于前端是用script标签发起的请求，所以返回了这个方法后相当于立马执行，并且把要返回的数据放在方法的参数里。
    ctx.body = `${query.cb}(${JSON.stringify(successBody({msg: query.msg}, 'success'))})`
  }
}
module.exports = CrossDomain
```

简单版前端

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script type='text/javascript'>
      // 后端返回直接执行的方法，相当于执行这个方法，由于后端把返回的数据放在方法的参数里，所以这里能拿到res。
      window.jsonpCb = function (res) {
        console.log(res)
      }
    </script>
    <script src='http://localhost:9871/api/jsonp?msg=helloJsonp&cb=jsonpCb' type='text/javascript'></script>
  </body>
</html>
```

## 4. document.domain + iframe跨域

此方案仅限主域相同，子域不同的跨域应用场景。

实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

父窗口：(http://www.domain.com/a.html)

```html
<iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
<script>
    document.domain = 'domain.com';
    var user = 'admin';
</script>
```

子窗口：(http://child.domain.com/b.html)

```html
<script>
    document.domain = 'domain.com';
    // 获取父窗口中变量
    alert('get javascript data from parent ---> ' + window.parent.user);
</script>
```
