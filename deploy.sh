#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
# git init
# git add -A
# git commit -m '更新文档'
# git push -f git@github.com:Aeroxian/Aeroxian_Blog.git master:master
# git@gitee.com:aeroxian/Aeroxian_Blog.git

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Aeroxian/Aeroxian_Blog.git master:gh-pages
git push -f git@gitee.com:Aeroxian/Aeroxian_Blog.git master:gh-pages
cd -