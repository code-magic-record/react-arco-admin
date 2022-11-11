const COS = require('cos-nodejs-sdk-v5')
const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')
const getFolderList = require('./fileList')
const { name } = require('../package.json')
dotenv.config()
const { SecretId, SecretKey, Bucket, Region } = process.env

const cos = new COS({
  SecretId,
  SecretKey,
})
const rootPath = path.resolve(__dirname, '../dist')

async function uploadEvent() {
  const list = await getFolderList({ path: rootPath, name: 'dist' })
  list.forEach((files) => {
    if (!files.dir) {
      fs.readFile(files.path, (err, data) => {
        if (err) throw err
        cos.putObject(
          {
            Bucket,
            Region,
            Key: files.path.replace(rootPath, `${name}/dist`),
            Body: data, // 上传文件对象
            onProgress: function (progressData) {
              console.log(JSON.stringify(progressData))
            },
          },
          function (err, data) {
            console.log(err || data)
          },
        )
      })
    }
  })
}
uploadEvent()
