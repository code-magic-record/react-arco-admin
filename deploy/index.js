const OSS = require('ali-oss');
const { Command } = require('commander');
const program = new Command();
const path = require('path');
const DelHelper = require('./del');
const AddHelper = require('./add');
const buildPath = path.resolve(__dirname, '../dist');
program.version('0.0.1');
program
  .option('-b, --bucket <bucket>', 'oss仓库名称', 'yaogeng')
  .option('-p, --project <project>', '项目名称', 'reactArcoAdmin')
  .option('--env <env>', '发布环境');

program.parse(process.argv);

const options = program.opts();
console.log('options', options);

if (!options.project) {
  console.log('请输入项目名称');
  return;
}

if (!options.env) {
  console.log('请输入构建环境');
  return;
}

const client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAI4G23K6XH2fr6Zt9CZZQ3',
  accessKeySecret: 'e3AQDeJaX1dAFIKJRFpwcYXdvkmKsD',
  bucket: options.bucket,
});

let delObj = new DelHelper(client, options);
let addObj = new AddHelper(client, options);

// 删除历史记录
delObj.removeDir(`${options.env}/web/${options.project}/`, () => {
  addObj.uploadDir(buildPath);
});
