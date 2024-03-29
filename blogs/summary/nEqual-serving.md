---
title: 项目总结 - X
date: 2020-11-06
keys:
 - 'a5f8a1272a231c5ca126bb04de177e71'
---

### 预览

暂未上线，准备中

### 背景

加入公司时，正好赶上部门核心业务 *X* 进行重构。原来基于 *Coffee.js* 和 *Bootstrap* UI 已无法
适应不断新增媒体对接带来的大量业务需求。所以部门老板决定对 *X* 进行项目重构，以解决日益增多的对接需求。

### 简介

在评估了前任们的遗产后（其实就是直接上手...进入公司技术已经选型），前端决定使用 *React* + *TypeScript* +*Ant Design* 这套目前比较流行的技术解决方案。
为了开箱即用，选用了 *Umi.js* 这个企业级前端应用框架（插件内部对路由，构建，部署，测试等做了集成）。后端决定使用 *Node.js* 进行开发，实际中用到了
 *Egg.js* + *Sequelize* 框架。数据库使用 *Mysql* 。 

主要贡献：
1. 完成主要核心业务的前端开发。
2. 完成自己任务之余，帮助同组成员解决遇到的问题。
3. 提取部分公共 *hooks* ：*useTable*、*useRequest*、*useModal*等。
4. 抽取许多公共组件：时刻筛选、远程搜索选择框、公共筛选、公共视图等。
5. 对项目构建做优化，主要是对懒加载、分包等进行处理。

### 反思

1. 换技术栈，对 *React* 熟练度不够，使项目留有许多小问题，因上线时间紧，还未进行优化。
2. *Hooks* 使用方式存在问题，对HOC理解不深。
3. *TypeScript* 使用不完全，只是入门级别，需要深入了解、学习和使用。
4. 后端的参与感不强，只写了部分媒体对接的接口。
