
import fs from 'fs'
import path from 'path'
import os from 'os'
import { writeFile } from 'node:fs/promises'


function getChromeBookMark() {
  const url = 'C:\\Users\\99511\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Bookmarks'
  // 读取本地Chrome浏览器中的书签文件
  const data = fs.readFileSync(url, { encoding: "utf-8" })
  // JSON.parse(data)['roots']['bookmark_bar'] 这是展示在浏览器书签栏的所有书签 其他书签对应'others'
  const bookMark = rebuildBookMarkData(JSON.parse(data)['roots']['bookmark_bar'].children)
  const fileterBookMark = ignoreBookMark(bookMark)
  writeIntoTxt(JSON.stringify(fileterBookMark))
  watchMemory()
}

/* 
* 重新构建书签数据
*/
function rebuildBookMarkData(data) {
  let arr = []
  data.map(item => {
    const keys = ['id', 'name', 'type', 'url', 'children']
    if (item.children) {
      item.children = rebuildBookMarkData(item.children)
    }
    let obj = {}
    for (let i = 0, len = keys.length; i < len; i++) {
      let key = keys[i]
      if ((key === 'url' && item['type'] === 'folder') || (key === 'children' && !item[key])) continue
      obj[key] = item[key]
    }
    arr.push(obj)
  })
  return arr
}
/* 
* 写入txt
*/
function writeIntoTxt(data){
  const txtUrl = 'D:\\git\\aeroxian.github.io\\docs\\.vuepress\\public\\myBookMark.json'
  writeFile(txtUrl,data,{
    encoding: 'utf-8'
  }).then(()=>{
    console.log('书签写入完毕');
  })
}
/* 
* ignore
*/
function ignoreBookMark(bookMark){
  // 忽略没有children的一级书签 此为常用书签
  // 忽略特定文件夹
  const ignoreFolder = ['SIE','POE','机场']
  return bookMark.filter(item=>{
    return (
      item.children
      && ignoreFolder.indexOf(item.name) === -1
    )
  })

}
function watchMemory() {
  let totalmem = os.totalmem();  // 以整数形式返回系统内存总量（以字节为单位B）
  let freemem = os.freemem();  // 以整数形式返回空闲的系统内存量（以字节为单位B）。
  console.log(`系统总内存：${(totalmem / 1024 / 1024).toFixed(1)}，系统空闲内存：${(freemem / 1024 / 1024).toFixed(1)}`)
}

module.exports = {
  getChromeBookMark
}