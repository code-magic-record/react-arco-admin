const COS = require('cos-nodejs-sdk-v5')
const dotenv = require('dotenv')
const path = require('path')
const getFolderList = require('./fileList')
dotenv.config()
const { SecretId, SecretKey, Bucket, Region } = process.env

const cos = new COS({
  SecretId,
  SecretKey,
})
const rootPath = path.resolve(__dirname, '../dist')

async function handleFilesList() {
  const list = await getFolderList({ path: rootPath, name: 'dist' })
  const newList = list.map((files) => {
    return {
      ...files,
      path: files.path.replace(rootPath, 'dist'),
    }
  })
  return newList
}
async function uploadEvent() {
  const list = await handleFilesList()
  console.log(list)
  list.forEach((files) => {
    cos.putObject(
      {
        Bucket,
        Region,
        Key: files.path /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
        Body: files.name, // 上传文件对象
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

uploadEvent()
