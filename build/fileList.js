const fs = require('fs')
const path = require('path')
const async = require('async')
const isWin = process.platform == 'win32'

// 读取文件
function fsReadDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}
// 获取文件信息
function fsStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) reject(err)
      resolve(stat)
    })
  })
}

/**
 * 获取文件夹列表
 * @param {*} folder
 * @returns
 */
async function getFolderList(folder) {
  return fsStat(folder.path).then((stat) => {
    if (stat.isDirectory()) {
      return fsReadDir(folder.path).then((list) =>
        async
          .mapLimit(list, 16, (item, next) => {
            const f = {
              path: path.resolve(folder.path, item),
              name: path.join(folder.name, item),
            }
            getFolderList(f).then((res) => {
              next(null, res)
            })
          })
          .then((subFiles) => {
            const files = subFiles.reduce((prev, curr) => prev.concat(curr), [])
            return [...files, { ...folder, dir: true }]
          }),
      )
    }
    const filePath = folder.path
    const fileName = isWin ? filePath.replace(/^.*(\/|\\)/, '') : filePath.replace(/^.*(\/)/, '')
    const info = {
      path: filePath,
      name: fileName,
      dir: false,
    }
    return [info]
  })
}

module.exports = getFolderList
