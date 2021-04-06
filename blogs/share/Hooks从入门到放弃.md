---
title: hooks 从入门到放弃 
date: 2021-04-02
categories:
  - 分享
---

> 前提已经看过 [官网介绍](https://reactjs.org/docs/hooks-intro.html)

## hooks 简介

### 产生动机

[官方介绍](https://reactjs.org/docs/hooks-intro.html)

* 在组件之间复用状态逻辑难
* 复杂组件难以理解
* 难以理解的 class

### `class组件`和`函数组件`对比

1. FC 组件每次渲染都会有独立 props/state,而 class 组件总是会通过 this 拿到最新的 props/state
   
[戳这里 体验差别](https://codesandbox.io/s/pjqnl16lm7?file=/src/index.js:730-749)

2. FC 组件逻辑聚合，而 class 组件逻辑分散
   
```js
// class
componentDidMount() {
  this.timer = setTimeout(() => {
    console.log('开启定时器');
  }, 100)
}

componentWillUnmount() {
  clearTimeout(this.timer)
}
```

```js
// FC
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('开启定时器');
  }, 100);
  
  return () => {
    clearTimeout(timer)
  }
}, [])
```

3. FC 组件逻辑复用简单，而 class 组件逻辑复用困难

* class 组件的逻辑复用方案包括 `render props` 和 `HOC`，但是这类方案都是将逻辑封装到一个抽象层的组件中，在使用多个复用逻辑时会形成抽象层组件的**嵌套地狱**。
* `HOC` 和 `render props` 都会改变原先的组件结构，而 `hook` 可以使你在无需修改组件结构的情况下复用状态逻辑。

## hooks 原理 & 简单实现

[戳这里 在线编辑](https://codesandbox.io/s/exciting-bas-b7fs9?file=/src/index.js)

### Demo

```js
import React, { useState, useEffect } from 'react';

export default function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count:', count)
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

1. 为什么只能在函数最外层调用 Hook，不要在循环、条件判断或者子函数中调用？
2. 为什么 useEffect 第二个参数是空数组，就相当于 ComponentDidMount ，只会执行一次？

### 实现一个 `useState`

1. 从 demo 中可以看出 一个 useState 的基本结构，它接收一个初始值，返回一个状态和一个改变状态的函数
2. 状态存储的实现
    * 新状态替换旧状态
    * 重新渲染组件
3. 多个 state 并存

```js
let state;

function useState(initialValue) {
  state = state || initialValue;
  const setState = (value) => {
    state = value;
    // 触发视图重新渲染
    render();
  };
  return [state, setState];
}
```

**这里可以回答上面第 1 个问题**

Q：为什么只能在函数最外层调用 Hook？为什么不要在循环、条件判断或者子函数中调用。

A：hooks 数组是按 hook 定义的顺序来放置数据的，如果 hook 顺序变化，hooks 并不会感知到。

------------------ 补充 ------------------

**this.setState 与 useState 区别**

1. 通过 setXXX 修改数据，不会和 setState 一样进行对象属性合并，会直接覆盖。
2. Hooks 函数组件中，存在渲染闭包的概念，在一次渲染闭包中，state 是固定不变的。
3. Hooks 函数组件，默认开启 类 Object.is 的浅层比较，类似默认开启 PureComponent 的优化方式。

### 实现一个 `useEffect`

我们知道 useEffect 有几个特点：

1. 有两个参数 callback 和 dependencies 数组
2. 如果 dependencies 不存在，那么 callback 每次 render 都会执行
3. 如果 dependencies 存在，只有当它发生了变化， callback 才会执行

```js
let deps;

function useEffect(callback, depArray) {
  // 如果 dependencies 不存在
  const shouldUpdate = !depArray;
  // 两次的 dependencies 是否完全相等
  const depsChange = deps
    ? !depArray.every((depItem, index) => depItem === deps[index])
    : true;
  /* 如果 dependencies 不存在，或者 dependencies 有变化*/
  if (shouldUpdate || depsChange) {
    callback();
    deps = depArray;
  }
}
```

**这里可以回答上面第 2 个问题**

Q：为什么 useEffect 第二个参数是空数组，就相当于 ComponentDidMount ，只会执行一次？

A：因为依赖一直不变化，callback 不会二次执行

------------------ 补充 ------------------

**class 和 hooks 生命周期对比**

class 组件 | hooks 组件 | 描述
---|---|---
getDerivedStateFromProps | useEffect 手动对比 props， 配合 useState 里面 update 函数 | -
shouldComponentUpdate | memo | 优化
componentDidMount | useEffect 第二个参数为 [] | 在第一次渲染后调用
componentDidUpdate | useEffect 配合 useRef | 在组件完成更新后立即调用。在初始化时不会被调用
componentWillUnmount | useEffect 里面返回的函数 | 在组件从 DOM 中移除之前立刻被调用

```js
import { useEffect, useState } from 'react';

const [count, setCount] = useState(0);
const [fatherCount, setFatherCount] = useState(props.fatherCount)

// 模拟 getDerivedStateFromProps
useEffect(() => {
  // props.fatherCount 有更新，才执行对应的修改，没有更新执行另外的逻辑
  if (props.fatherCount == fatherCount) {
    console.log("======= 模拟 getDerivedStateFromProps=======");
    console.log(props.fatherCount, fatherCount);
  } else {
    setFatherCount(props.fatherCount);
    console.log(props.fatherCount, fatherCount);
  }
})

const mounted = useRef();
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
    console.log("======count 改变时才执行(相当于DidUpdate)=========");
    console.log(count);
  }
}, [count])

useEffect(() => {
  // 在 componentDidMount，以及 count 更改时 componentDidUpdate 执行的内容
  console.log("======初始化、或者 count 改变时才执行(相当于Didmount和DidUpdate)=========");
  console.log(count);
  return () => {

    console.log("====unmount=======");
    console.log(count);
  }
}, [count])
```

1. State Hook 使得组件内的状态的设置和更新相对独立，这样便于对这些状态复用。
2. Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分，这样使得各个逻辑相对独立和清晰。

## 常用的一些 hooks

### useRef

```js
function MyComponent() {
  const [initial, setInitial] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (initial) {
      setInitial(false);
      return;
    }
    console.log('The counter increased!');
  }, [count]);

  return (
    <button onClick={() => setCount(count => count + 1)}> Increase </button>
  );
}
```

```js
function MyComponent() {
  const initialRef = useRef(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      return;
    }
    console.log('The counter increased!');
  }, [count]);

  return (
    <button onClick={() => setCount(count => count + 1)}>
      Increase
    </button>
  );
}
```

**`initialRef` 是一个引用，用于保存是否为组件的第一个渲染的信息**

**一旦调用 `setIsFirst` 就会重新 `render()`**

### useReducer

> 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。

使用场景

1. 当多个 state 需要一起更新时
2. 当state 更新逻辑较复杂
3. 当下一个 state 依赖于之前的 state，即 编写 setState(prevState => newState)时

useReducer 相对于 useState 优势

1. reducer 相对于 useState 可以更好的描述“如何更新状态”。 比如：reducer 能够读取相关的状态、同时更新多个状态。
2. 组件负责发出 action，reducer 负责更新状态的**解耦模式**， 使得代码逻辑更加清晰。
3. 通过传递 dispatch ,可以减少状态值的传递。 useReducer 总是返回相同的 dispatch 函数，这是彻底解耦的标志：状态更新逻辑可以任意变化，而发起 action 的渠道始终不变

### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useCallback 

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

### useContext

```js
const value = useContext(MyContext);
// 相当于 class 组件中的
static contextType = MyContext;
// 或是
<MyContext.Consumer>
```

调用了 useContext 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 [通过使用 memoization 来优化](https://github.com/facebook/react/issues/15156#issuecomment-474590693)。

## 自定义 Hook

### useTable

当前参与的项目是 `mingpian-admin-ui`，一个中后台系统，会用到比较多的表格-列表，常见的一些功能有：`loading` 、`selectIds`、`pagination`、`dataSource`、`filters`；
通常我们会以以下的方式写一个组件：

```tsx
const BusinessTable = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<BusinessItem[]>([]);
  const [filters, setFilters] = useState<TFilters | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 20 });
  
  // Business Code
  // ...
  
  const tableProps = {
    dataSource,
    loading,
    selectedIds,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: (selectedRowKeys: Key[]) => setSelectedIds(selectedRowKeys as number[]),
    },
    pagination: {
      total,
      current: pagination.page,
      pageSize: pagination.pageSize,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50'],
      showTotal: (length: number) => `共${length}条数据`,
    },
    onChange: (tablePagination, __, sorter) => {
      // do sth...
    }
  }
  
  return <Table {...tableProps}  />
};

export default BusinessTable;
```

**针对常用的一些状态，我们使用 hooks 进行提取：**

```tsx
const useTable = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<TableList>({ data: [], total: 0 });
  const [filters, setFilters] = useState<TFilters>({ page: 1, pageSize: 20, _sort: '-updatedAt' });
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const pagination = { page: filters.page, pageSize: filters.pageSize };

  const reqTableData = async () => {
    if (isNil(action)) {
      return;
    }
    const searchParams = {
      ...filters,
      ...params,
    };
    setLoading(true);
    const { data, response } = await action(searchParams);
    setLoading(false);
    if (!response.ok) {
      message.error('服务器异常');
      return;
    }
    const total = toNumber(response.headers.get('X-Content-Record-Total') || 0);
    if (isArray(data)) {
      setList({ total, data });
    }
  };

  useEffect(() => {
    reqTableData();
  }, [filters]);

  /**
   * 分页改变事件
   * @param tablePagination pagination 配置
   * @param __ 过滤字段
   * @param sorter 排序字段
   * @return {void}
   */
  const onTableChange: TableProps<any>['onChange'] = (tablePagination, __, sorter) => {
    const { current: page = 1, pageSize = 20 } = tablePagination;
    const sortQuery = {
      page,
      pageSize,
      _sort: '-updatedAt',
    };
    if (!isEmpty(sorter) && !isArray(sorter) && sorter.order) {
      const { order, field } = sorter;
      assign(sortQuery, {
        _sort: order === 'ascend' ? field : `-${field}`,
      });
    }
    /** 改变页码重置选中项 */
    setSelectedIds([]);
    setFilters({ ...filters, ...sortQuery });
  };

  /**
   * 携带参数查询
   * @param payload
   */
  const onQuery = (payload: PlainObject) => {
    setFilters({ ...filters, page: 1, ...payload });
  };

  /**
   * 初始化table
   */
  const initialTableStatus = () => {
    setSelectedIds([]);
    setFilters({ ...filters, page: 1 });
  };

  return {
    list,
    filters,
    loading,
    pagination,
    selectedIds,
    setSelectedIds,
    reqTableData,
    onTableChange,
    setFilters: onQuery,
    initialTableStatus,
  };
}

export default useTable;
```

我们现在使用 `useTable` 对 `BusinessTable` 进行优化：

```tsx
import businessApi from '@/services/business';
import paginationProps  from '@/utils/pagination';

const BusinessTable = () => {
  const { list, filters, setFilters, loading, pagination, selectedIds, setSelectedIds, onTableChange } = useTable({
    action: businessApi.fetchBusinessList,
    params,
  });
  
  // Business Code
  // ...
  
  const tableProps = {
    loading,
    selectedIds,
    dataSource: list.data,
    pagination: paginationProps(list.total, pagination),
    onChange: onTableChange,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: (selectedRowKeys: Key[]) => setSelectedIds(selectedRowKeys as number[]),
    },
  }
  
  return <Table {...tableProps}  />
};

export default BusinessTable;
```

是不是简化了很多 😬


![谢谢观看](https://img0.baidu.com/it/u=1995998176,2481771798&fm=26&fmt=auto&gp=0.jpg)
