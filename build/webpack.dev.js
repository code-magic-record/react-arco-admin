const webpacBaseConfig = require('./webpack.config')
const { merge } = require('webpack-merge') // 5.x

module.exports = merge(webpacBaseConfig, {
  mode: process.env.NODE_ENV,
  devtool: 'eval-cheap-module-source-map', // 5.x
  cache: {
    type: 'memory',
  },
  devServer: {
    host: '0.0.0.0',
    port: 7001,
    hot: true,
    stats: 'errors-only',
    useLocalIp: true,
    disableHostCheck: true, // Invalid Host header 解决打开自定义环境下报错的处理
    historyApiFallback: true, // 处理BowerRouter
    compress: true,
    proxy: {
      '/customerAdmin': { // 代理名字
        target: process.env.REACT_APP_TARGETURL,
        pathRewrite: { '^/customerAdmin': '' },
        changeOrigin: true
      }
    }
  },
})
