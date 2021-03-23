---
title: 命名规范-张福浩
date: 2021-03-11
categories:
    - 工程化
tags:
    - js
---

## 命名规格

**注释多固然好，从根本上解决这个问题，变量名，方法名就直接让人知道在干啥了**

### 不要使用 item list i data 等抽象词汇...

例如：获取用户信息，并添加索引

```js
// bad
const data = list.map((item, i) => ({...item, i}))

// good
const usersWithIndex = users.map((user, index) => ({...user, index}))
```

例如：获取内部用户列表

```js
// bad
const getList = fetch;

// good
const fetchInternalUsers = fetch;
```

### 区分方法名和接口定义名称可以通过添加后缀的形式

```tsx
import { fetchInternalUsers as fetchInternalUsersAction } from 'xxx';

const fetchInternalUsers = async () => {
  const data = await fetchInternalUsersAction()
  // ... do sth
}
```

### 方法名和变量名可通过 'on' 区分

```tsx
const onClick = () => {};

const userName = 'xxx';
```

## 常量

大写+下划线

```js
export const API_PREFIX = 'https://google.com'
```

## 变量

camelCase

```js
const dataSource = [];
```

## 文件夹

中划线连接

user-components

## 文件

工具类 && JS 文件使用中划线：use-table.ts

组件类 PascalCase: UserSelect.tsx

## 注释

```tsx
// API前缀
export const API_PREFIX = 'https://google.com';

interface TUser {
  id: number;
  name: string;
  avatar: string;
}

/**
 * 获取用户详情
 * @param userId {number} 用户ID
 * @return {Promise<TUser>}
 */
export async function fetchUserDetail(userId: number) {
  const detail = await fetchUserDetailAction(userId);
  
  // ... do sth
  
  return detail;
}
```

**尽量每个函数都写注释**
