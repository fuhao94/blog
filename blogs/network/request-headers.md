---
title: 网络 - 常用请求头
date: 2020-11-06
author: 张福浩
categories:
 - 网络
tags:
 - 请求头
---

协议头 | 说明 | 示例 
---|---|---
Accept(Charset, Encoding, Language, ) | 可接受的响应内容类型（Content-Types）| Accept: text/plain
Accept-Charset | 可接受的字符集 | Accept-Charset: utf-8
Accept-Encoding | 可接受的响应内容的编码方式。 | Accept-Encoding: gzip, deflate
User-Agent | 浏览器的身份标识字符串 | User-Agent: Mozilla/……	
Referer | 表示浏览器所访问的前一个页面 | Referer: http://itbilu.com/nodejs
Origin | 发起一个针对跨域资源共享的请求（该请求要求服务器在响应中加入一个Access-Control-Allow-Origin的消息头，表示访问控制所允许的来源）。 | Origin: http://www.itbilu.com
Host | 表示服务器的域名以及服务器所监听的端口号。如果所请求的端口是对应的服务的标准端口（80），则端口号可以省略。| Host: www.itbilu.com:80 Host: www.itbilu.com
Cache-Control | 用来指定当前的请求/回复中的，是否使用缓存机制。 | Cache-Control: no-cache
Date | 发送该消息的日期和时间（以RFC 7231中定义的"HTTP日期"格式来发送）| Date: Dec, 26 Dec 2015 17:30:00 GMT
