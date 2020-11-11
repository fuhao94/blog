---
title: 修复别人代码有感...
date: 2020-11-11
categories:
 - 总结
tags:
 - 总结
keys:
 - bbd128773f792884f9e3b6a190f3e8f7
---

## 方法封装

一个方法尽量只做一件事... 直接上例子

**zq同学**

```js
// export.js
import { Moment } from 'moment';
export const formatDate = (time: Moment) => {
  return time.format('YYYY-MM-DD');
};

// import.js
import moment from 'moment';
formatDate(moment(dateRange[0]))
```

**优化下**

```js
export const formatDate: TOnFormat = (
  timestamp,
  format = 'YYYY-MM-DD HH:mm',
) => {
  if (!timestamp) {
    return timestamp;
  }

  return moment(timestamp).format(format);
};
```

## 关于拆分业务组件颗粒度

### 场景一

**zq同学**

3个Modal...小100行，抽取组件有时候并不全是为了复用，拆分越细，健壮性越好(好维护)

```js
<Modal {...props} >
  // do sth...
  // 40行
</Modal>
<Modal {...props} >
  // do sth...
  // 40行
</Modal>
<Modal {...props} >
  // do sth...
  // 40行
</Modal>
```

**优化下**

```js
// A-Modal
<AModal
  onClose={() => {}}
  onConfirm={() => {}}
/>
// B-Modal
<BModal
  onClose={() => {}}
  onConfirm={() => {}}
/>
// C-Modal
<CModal
  onClose={() => {}}
  onConfirm={() => {}}
/>
```

**总结下** 
1. 主文件减少了100行左右代码
2. 新增三个Modal文件，下次查找错误好定位
3. 再看看这个 [组件 & Props](https://react.docschina.org/docs/components-and-props.html)


### 场景二

**zq同学**

```js
// 一脸懵逼...
const component = () => {
  return (
    <>
      <Form.Item>
        <RangePicker />
      </Form.Item>
    </>
  )
}
```

你这个组件是不是外层没有 Form 就不能用了...


## 小问题一堆


1. `onClick={() => func()}` 

简化下  `onClick={func}`

2. `map(items, item => arr.push(item)`

`map`不是用来干这个的... 多看看函数式编程

3. 数据不可变性

对这个很不熟悉，体现在使用`hooks`的时候，去看看 `值引用&址引用`，为什么需要确保数据的不可变；

4. key值问题

warning !== error 但是起码要有 warning == error 的心... 去看看`Virtual Dom`的算法diff过程，你就知道key有多重要了...

5. 状态清除

销毁组件的时候，一定要确保执行完再销毁；

常见的 `router.push('/'); setLoading(false);` warning就来了。。。
