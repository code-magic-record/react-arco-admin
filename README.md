# React-arco-admin

node 版本需要在v14之上

```bash
pnpm i 

pnpm start

```


## 该系统技术栈特点
- 基于webpack5.x配置
- eslint严格代码规范
- prettier统一代码风格
- husky代码提交检测
- 环境变量配置规范化

## 技术框架
- [x] react18
- [x] react-dom
- [x] react-router-dom 6.x
- [x] react-hook-form
- [x] hooks
- [x] arco-design

## 代码规范
- [x] eslint
- [x] prettier
- [x] husky

代码x层面需要对自己严格要去的规范


## 菜单结构
<img src="./material/menus.png">


## 基础工程 TodoList

- [x] 脚手架
- [x] 国际化
- [x] 主题配置
- [x] CI/CD
- [x] jenkins自动构建
- [ ] 待补充
- ...

## 页面 TodoList 
- [ ] 仪表盘
    - [x]  工作台
    - [ ] 实时监控
- [ ] 数据可视化
    - [ ] 分析页
    - [ ] 多位数据分析
- [ ] 列表页
    - [ ] 查询表格
    - [ ] 卡片列表
- [ ] 表单页
    - [ ] 分组表单
    - [ ] 分布表单
- [x] 结果页
    - [x] 成功页
    - [x] 失败页
- [x] 异常页
    - [x] 403
    - [x] 404
    - [x] 500
- [ ] 个人中心
    - [ ] 用户信息
    - [ ] 用户设置


## 支持打包产物上传至COS

在腾讯云网在购买COS服务，然后在项目根目录下创建.env文件，配置如下

```bash
SecretId=xxxx
SecretKey=xxxx
Bucket=xxxx
Region=xxx
```

安装腾讯云cos-nodejs-sdk-v5

```bash
pnpm add cos-nodejs-sdk-v5
```

具体上传代码可参考 build/upload.js