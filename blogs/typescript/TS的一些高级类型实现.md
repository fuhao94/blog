---
title: TS的一些高级类型实现
date: 2020-12-29
categories:
 - TS
---

:::tip
平时常用，但是不清楚原理，记录下
:::

## 例子

均以 TUser 为🌰

```typescript
interface TUser {
    name: string;
    sex?: 'male' | 'female' | 'unknown';
}
```

## Partial

```typescript
type Partial<T> = {
 [K in keyof T]?: T[K];
}

// Partial<TUser> => { name?: string; sex?: 'male' | 'female' | 'unknown'; }
```

## Readonly

```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
}

// Readonly<TUser> => { readonly name: string; readonly sex?: 'male' | 'female' | 'unknown'; }
```

## Pick

取出想要类型组合

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}

// Pick<TUser, "name"> => { name: string; }
```

## Record

将K中的每个属性([P in K]),都转为T类型

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
}

// Record<'name' | 'age', string> => { name: string; sex?: string; }
```

## Required 

```typescript
type Required<T> = {
    [K in keyof T]-?: T[K];
};

// Required<TUser> => { name: string; sex: 'male' | 'female' | 'unknown'; }
```
