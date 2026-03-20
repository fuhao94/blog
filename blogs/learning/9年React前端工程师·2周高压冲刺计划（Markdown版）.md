# 2周React前端面试计划（纯文本版·可直接复制）

9年React前端工程师·2周高压冲刺计划（最终完整版）

适配：专家/架构岗，每天6小时+，聚焦React深度+TS+架构+项目，每块内容直接配1~2道面试真题，背完就能用。

---

第1周：React底层原理 + 工程化架构（核心硬实力）

Day1：React Fiber 架构 & 调和流程

- 学习内容：Fiber链表、双缓存、Diff算法

- 面试题：

1. Fiber相比Stack Reconciler的核心优势是什么？

2. React Diff算法的三个优化策略是什么？

Day2：Hooks 原理与闭包陷阱

- 学习内容：Hooks链表结构、useState/useEffect实现、依赖项本质

- 面试题：

1. 为什么Hooks不能在条件/循环中使用？

2. useEffect闭包陷阱的本质与解决方案？

Day3：React18 并发特性 & Scheduler

- 学习内容：Concurrent Mode、useTransition、Lane优先级

- 面试题：

1. Lane优先级模型解决了什么问题？

2. useTransition与useDeferredValue的适用场景区别？

Day4：HTTP 协议 & 前端网络安全

- 学习内容：HTTP/1.1、HTTP/2、HTTP/3、HTTPS、缓存策略、安全攻防

- 面试题：

1. HTTP/2 相比 HTTP/1.1 核心优化点是什么？前端如何利用？

2. 前端浏览器缓存（强缓存/协商缓存）机制与实际配置方案？

Day5：构建工具深度（Vite/Rspack/Webpack）

- 学习内容：构建原理、选型、打包优化、插件机制

- 面试题：

1. Vite dev模式为什么更快？与Webpack DevServer差异？

2. 大型项目如何做构建速度与包体积双重优化？

Day6：Monorepo + 依赖治理

- 学习内容：pnpm workspace、Turbo、幽灵依赖

- 面试题：

1. Monorepo选型依据是什么？Turbo缓存原理？

2. 如何解决大型项目的依赖冲突与版本泛滥？

Day7：微前端 + 质量保障体系

- 学习内容：qiankun/Module Federation、E2E/单元测试

- 面试题：

1. Module Federation与qiankun的选型场景？

2. 如何设计React项目的测试策略（组件/业务/Hooks）？

---

第2周：性能优化 + TS高阶 + 浏览器安全 + 项目复盘

Day8：React 应用极致性能优化

- 学习内容：渲染治理、memo/useMemo/useCallback、虚拟列表、长列表优化

- 面试题：

1. 如何定位并解决React无效重渲染？

2. 十万条数据的长列表，你的优化方案是什么？

Day9：TypeScript 高阶编程

- 学习内容：泛型、类型体操、Utility Types、TS+React最佳实践、类型推断

- 面试题：

1. 泛型在React Hooks/组件中的实际应用场景？手写一个通用泛型Hook？

2. 如何解决TS中的类型断言滥用？实现严格的Props/State类型约束？

Day10：浏览器原理 & 前端安全

- 学习内容：浏览器渲染流程、事件循环、安全策略（CSP、XSS、CSRF）、同源策略

- 面试题：

1. 浏览器从输入URL到页面展示全过程？

2. XSS与CSRF的防御方案分别有哪些？

Day11：低代码/组件库架构设计

- 学习内容：物料系统、DSL、插件化、多业务适配

- 面试题：

1. 如何设计可扩展的企业级React组件库？

2. 低代码平台的核心难点与你的解决方案？

Day12：3个核心项目STAR复盘（量化成果）

- 学习内容：架构选型、难点突破、团队协作、数据结果

- 面试题：

1. 你主导的最复杂React项目架构，画架构图并说明决策依据？

2. 遇到技术方案争议，你如何推动落地？

Day13：技术规划 + 团队管理 + 带人经验

- 学习内容：Roadmap、技术债务、人才培养、跨部门推动

- 面试题：

1. 如何推动团队从类组件全面升级到Hooks？

2. 你如何做前端团队的技术规划与落地排期？

Day14：模拟面试 + 查漏补缺（算法+网络+HR）

- 学习内容：前端高频算法（链表、树、防抖节流）、浏览器原理、HR常见问题

- 面试题：

1. 手写：防抖/节流（立即执行+取消）+ React中正确使用姿势

2. 离职原因、职业规划、薪资期望的标准回答
> （注：文档部分内容可能由 AI 生成）