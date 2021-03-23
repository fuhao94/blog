---
title: interface 和 type 区别
date: 2020-11-16
categories:
 - TS
---

::: tip
又是周一，打开微信找到群组，开始一顿学(mo)习(yu)，然后看到一人发了一个问题，引发我写下这篇文章。
:::

## 先看了例子

有人发了个题目 `这个接口怎么写--?`

```typescript
const data = {
  1: { type: 1, count: 1 }
}
```

二话不说，一顿操作，感觉很 👌 👍

```typescript
interface TItem {
  type: number;
  count: number;
}

interface TData {
  [key: string]: TItem;
}

const data: TData = {
  1: { type: 1, count: 1 }
}
```

这时候大佬出来指出 `关键词用错了。。Interface -> type`，这引发了我的好奇，平时也没注意这俩有啥区别，所以深入的了解了下。

## 相同点

### 都可以描述一个对象或是函数

**interface**

```typescript
interface TUser {
  name: string;
  weight: number;
}

interface TOnCreateUser {
  (name: string, weight: number): void;
}
```

**type**

```typescript
type TUser = {
  name: string;
  weight: number;
}

type TOnCreateUser = (name: string, weight: number): void;
```

### 扩展和交叉类型

interface 通过 extends 扩展，type 都过 type 与 type 交叉

**interface**

```typescript
interface TAge {
  age: number;
}

interface TUser extends TAge{
  name: string;
}
```

**type**

```typescript
type TAge = {
  age: number;
}

type TUser = TAge & { name: string };
```

**当然，interface 可以继承 type，type 可以继承 interface （写法一样，就不举例了）。**

## 不同点

### type 独有的

```typescript
// 基本类型别名
type TAge = number;

// 联合类型
interface TDog {
  func1();
}

interface TCat {
  func2();
}

type TAnimal = TDog | TCat;


// 当你想获取一个变量的类型时，使用 typeof
const div = document.createElement('div');
type TDiv = typeof div
```

### interface 独有的

**声明合并**

```typescript
interface TUser {
  name: string
  age: number
}
 
interface TUser {
  weight: string
}
```

TUser 接口为
```typescript
interface TUser {
  name: string;
  age: number;
  weight: string;
}
```

## 总结

能用 interface 就用 interface，不行就用 type。
