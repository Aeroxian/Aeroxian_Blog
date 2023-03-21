---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /vuepress/
typora-root-url: ..\.vuepress\public
---

## 问题分析

::: tip 

报错:

`# notarget No matching version found for vuepress-vite@2.0.0-beta.50-pre.1.`

:::

## 解决方案

原因: 因为我们用的vuepress还不是正式版,所有依赖包都必须指定版本,包括依赖的依赖

[ISSUES 1195](https://github.com/vuepress/vuepress-next/issues/1195)

/(ㄒoㄒ)/~~ 搞好才发现置顶的提示
