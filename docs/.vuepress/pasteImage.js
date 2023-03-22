/* 配置Vscode Markdown Image 插件 图片存放上传 */
const os = require('os')
const path = require('path')
const fse = require('fs-extra');
const { writeFile, rename } = require('node:fs/promises')
const imageRoot = 'D:\\git\\aeroxian.github.io\\docs\\.vuepress\\public\\images'
const logFilePath = 'D:/git/aeroxian.github.io/docs/.vuepress/log.txt'
module.exports = async function (filePath, savePath, markdownPath) {
  // Return a picture access link
  const dirNameList = markdownPath.split('\\')
  // 以md文件的上一级目录名字作为存放图片的文件夹名
  const topDirName = dirNameList[dirNameList.length - 2]
  const newImgPath = `${imageRoot}\\${topDirName}\\${savePath}`
  // path 
  await fse.move(filePath, newImgPath)
  // 返回的是显示在md文件中图片的相对路径 
  return path.relative(path.dirname(markdownPath), newImgPath).replace(/\\/g, '/');
}

// 调试方法 写入log.txt文件
function log(...args) {
  // 这是一个promise 
  // os.EOL nodejs 换行符 flag:a+在原有内容追加
  const str = os.EOL + [...args].join(' | ')
  writeFile(logFilePath, str, {
      encoding: 'utf-8', flag: 'a+'
    }
  ).then(() => {

  })
}