const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
// webpack开发 配置文件
const webpackConfig = require('../build/webpack.dev')
// 自定义日志输出
const logger = require('./logger')
// 服务配置
const { port, host } = webpackConfig.devServer // 监听的端口号
// 编译器
const compiler = Webpack(webpackConfig)
//  devServer 参数
const devServerOptions = Object.assign({}, webpackConfig.devServer) // devServer配置
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(port, host, async (err) => {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port, host)
})
