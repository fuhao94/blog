# Chrome

## http => https

Chrome 新版本加了一个安全规则，凡是域名先用 https 访问的，后面再访问 http 就会强制跳转到 https 了。

可以通过 chrome://net-internals/#hsts > Delete domain security policies 来删除这个域名，这样就可以访问 http 了。