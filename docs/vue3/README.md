---
prev:
  text: Back To 目录
  link: /topicNav/
typora-root-url: ..\.vuepress\public
---

#

## 从 Vue2 到 Vue3

我一直以来都在工作中使用 vue-2.6.10 这个稳定版本，使用他的选项式 API 的时，，那时候的 vue3 对组合式 API 也没有十分完善，在使用上没有特别大的区别，但这个情况在 vue3.2 版本-setup 的到来，发生了极大的改变

在使用选项式 api 的时候，有时候会丢失对某个数据的响应式变化，每次一通好找，不好解决，reactive() 可能会解决这个问题
一个 vue 页面会存在多个同时处理的业务逻辑，比如 vue2 中业务 A、业务 B 得分别在 data/methods/watch 定义各自的数据与方法，当要找某个业务的逻辑就得上下滚来翻找

## Vue2 Vue3 生态改变

:::tip 引用官方

Vue 3 的支持库进行了重大更新。以下是新的默认建议的摘要:

- 新版本的 Router, Devtools & test utils 来支持 Vue 3
- 构建工具链: Vue CLI -> [Vite](https://cn.vitejs.dev/)
- 状态管理: Vuex -> [Pinia](https://pinia.vuejs.org/zh/index.html)
- IDE 支持: Vetur -> [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)
- 新的 TypeScript 命令行工具: [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages)
- 静态网站生成: VuePress -> [VitePress](https://vitepress.dev/)
- JSX: @vue/babel-preset-jsx -> [@vue/babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx)

:::
