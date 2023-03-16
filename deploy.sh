#!/usr/bin/env sh
###
 # @Author: xianjiajie
 # @Date: 2023-03-15 17:37:38
 # @LastEditors: xianjiajie
 # @LastEditTime: 2023-03-16 15:32:22
 # @Description: 
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
git init
git add -A
git commit -m '更新文档'
git push -f git@github.com:Aeroxian/Aeroxian_Blog.git master:master

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Aeroxian/Aeroxian_Blog.git master:gh-pages
# git push -f git@gitee.com:mqyqingfeng/learn-typescript.git master:gh-pages
cd -