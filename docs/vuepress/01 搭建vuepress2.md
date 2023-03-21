---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /vuepress/
typora-root-url: ..\.vuepress\public
---

## 环境搭建

1. 在github创建仓库blog 用于存放我们的项目，并克隆到电脑上

> 为了使我们的构建pages后的域名看起来更简洁
> 我们可以将github仓库名改成 #用户名#.github.io、将gitee仓库名改成 用户名> 这样我们的博客网址就简洁如 #用户名#.github.io 而非 #用户#.github.io/xxx

2. 进入blog目录，安装vuepress
   
   ```sh
   # 构建前端的包管理
   yarn init
   # 安装vuepress 当前的最新版本是2.0.0-beta.61 我使用的beta.60
   yarn add -D vuepress@next
   
   # 在 package.json 中添加一些 scripts
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   
   # 将默认的临时目录和缓存目录添加到 .gitignore 文件中
   echo 'node_modules' >> .gitignore
   echo '.temp' >> .gitignore
   echo '.cache' >> .gitignore
   
   # 创建你的第一篇文档
   mkdir docs
   echo '# Hello VuePress' > docs/README.md
   ```

3. 在本地启动服务器来开发你的文档网站
   
   ```sh
   yarn run docs:dev
   ```

## 基本配置

1. 在`.vuepress`文件夹下，创建config.js,以后的相关导航栏，侧边栏，搜索等都在这里配置。
2. 在`.vuepress` 文件夹下，创建public文件夹，在创建images，用于存放图片
3. 为了使得页面更加简洁，禁用掉一些信息

```js
/**
 * vuepress 配置文件
 */

 module.exports = {
    lang: 'zh-CN',
    title: '吖冼的Blog',
    description: 'Aeroxian的Vuepress Blog',
    head: [['link', { rel: 'icon', href: '/images/favicon-32x32.png' }]], // icon设置

  theme: defaultTheme({
    // 默认主题配置
    logo: 'https://aeorxian.github.io/images/logo.png',
    lastUpdated: false,   // 禁用显示更新时间
    contributors: false,   // 禁用显示贡献者
    sidebar,
    navbar
  }),
  }
```

## 版本依赖

由于vuepress2还在开发中，我目前使用的版本是

```json
"devDependencies": {
      "@vuepress/plugin-docsearch": "^2.0.0-beta.60",
    "@vuepress/plugin-google-analytics": "^2.0.0-beta.60",
    "@vuepress/plugin-register-components": "^2.0.0-beta.60",
    "vuepress": "^2.0.0-beta.60"
}
```

为了不使得它更新，我将箭头去掉,就使用2.0.0-beta.60

```json
"devDependencies": {
    "@vuepress/plugin-docsearch": "2.0.0-beta.60",
    "@vuepress/plugin-google-analytics": "2.0.0-beta.60",
    "@vuepress/plugin-register-components": "2.0.0-beta.60",
    "vuepress": "2.0.0-beta.60"
  }
```

主要原因是依赖更新了，还存在一些bug，会导致我自己写的组件失效。

## 参考

[快速上手 | VuePress (vuejs.org)](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)

[配置 | VuePress (vuejs.org)](https://v2.vuepress.vuejs.org/zh/reference/config.html#站点配置)



![](../.vuepress/public/images/vuepress/2023-03-21-09-29-54-image.png)
