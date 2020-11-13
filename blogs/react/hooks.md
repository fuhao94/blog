---
title: Hooks 原理
date: 2020-11-13
categories:
 - React
tags:
 - hooks
---

::: tip
一直写hooks也不知道原理，今天倒腾倒腾
:::


## React Fiber 是啥？ 

React 内部的运作可以分为3层

1. `Virtual DOM` 层，描述页面长什么样。
2. `Reconciler` 层，负责调用组件生命周期方法，进行 Diff 运算等。
3. `Renderer` 层，根据不同的平台，渲染出相应的页面，比较常见的是 ReactDOM 和 ReactNative。

v16最大改动就是 `Reconciler` 层，也就是 `Fiber Reconciler`。

在第 2 阶段，Fiber是把 `render/update`分片，拆解成多个小任务来执行，每次只检查树上部分节点，做完此部分后，若当前一帧（16ms）内还有足够的时间就继续做下一个小任务，时间不够就停止操作，等主线程空闲时再恢复。
这种停止/恢复操作，需要记录上下文信息。而当前只记录单一dom节点的 `vDom tree` 是无法完成的，
`Fiber` 引入了 `fiber tree`，是用来记录上下文的 `vDom tree`

大致结构如下 👇 详见 ReactFiber

```typescript
export type Fiber = {
   tag: TypeOfWork, // 类型
   type: 'div',
   return: Fiber|null, // 父节点
   child: Fiber|null, // 子节点
   sibling: Fiber|null, // 兄弟节点
   alternate: Fiber|null, //diff出的变化记录在这个fiber上
   ...
};
```


## hooks 如何工作的

先看个🌰

```js
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>加一</button>
    </div>
  );
}
```

由这个小🌰引出一系列问题

* 当组件重新渲染时，每次都不会重新创建新的状态吗？ React如何知道旧状态是什么？
* 为什么hook 名称必须以 **use** 开头？ 这看起来很可疑。
* 如果这是一个命名规则，那是否意味着我可以自定义 Hook。
* 如何存储更复杂的状态，很多场景不单单只有一个状态值这么简单。

### 先瞅瞅 Hooks 的生成

React第一次渲染函数组件时，它同时会创建一个对象与之共存，该对象是该组件实例的定制对象，而不是全局对象。只要组件存在于DOM中，这个组件的对象就会一直存在。

使用该对象，React可以跟踪属于组件的各种元数据位。

请记住，React组件甚至函数组件都从未进行过自渲染。它们不直接返回HTML。组件依赖于React在适当的时候调用它们，它们返回的对象结构React可以转换为DOM节点。

React有能力在调用每个组件之前做一些设置，这就是它设置这个状态的时候。

其中做的一件事设置 Hooks 数组（这里的数组就是上文提到的 **Fiber** 中以链表的形式存在，在 `JavaScript` 中可以用数组去描述）。 它开始是空的, 每次调用一个hook时，React 都会向该数组添加该 hook。

### 多个状态情况如何处理

```js
function MultipleStates() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page:1, pageSize: 10 });
}
```

因为它调用 `useState` 3次，React 会在第一次渲染时将这三个 hook 放入 Hooks 数组中。

下次渲染时，同样的`3`个`hooks`以相同的顺序被调用，所以React可以查看它的数组，并发现已经在位置`0`有一个`useState hook`，所以React不会创建一个新状态，而是返回现有状态。

这就是React能够在多个函数调用中创建和维护状态的方式，即使变量本身每次都超出作用域。

### 自定义 hooks

这就是一个简单的自定义`hooks`

```typescript
export default function useQuery {
  const [filters, setFilters] = useState<TFilters>(() => {
      const routerQuery: TFilters = history.location.query;
      return routerQuery;
  });

  /**
   * 设置 filter
   * @param value 值
   * @param key 字段
   * @return {undefined}
   */
  const onQueryChange: TOnQueryChange = (key, value) => {
    const { pathname, query } = history.location;
      const newState = {
        ...filters,
        [key]: value || undefined,
      };
      history.replace({
        query: {
          ...query,
          ...newState,
        },
        pathname,
      });
      setFilters(newState as TFilters);
  }

  return {
    filters,
    setFilters: onQueryChange
  }
}
```

另外，通过在自定义hooks中调用自定义`hooks`，可以将`hooks`组合在一起。`hooks`只是函数，当然，函数可以调用其他函数。


## 总结

对于 useState 的逻辑，就相当于原有的 class 组件的 state，只是在函数组件中，他的状态存在 Fiber 节点上。通过链表操作遍历更新该 Fiber 节点下的 hook 对象来更新函数组件中的 state。

参考链接

[快速了解 Hooks 原理](https://juejin.im/post/6844903919726886926)

[深入 React Hooks 原理](https://juejin.im/post/6863642635916017671)
