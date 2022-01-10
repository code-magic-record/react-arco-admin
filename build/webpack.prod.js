const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')
const webpack = require('webpack')
module.exports = merge(webpackBaseConfig, {
  mode: process.env.NODE_ENV,
  devtool: 'hidden-source-map',
  cache: {
    type: 'filesystem',
  },
  optimization: {
    splitChunks: { // 分割代码块
      cacheGroups: { // 缓存组
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 0,
          minChunks: 1, // 用到两次以上
        },
        vendor: {
          name: 'vendor',
          priority: 1, // 权重
          test: /node_modules/,
          chunks: 'all',
          minSize: 0,
          minChunks: 1, // 用到两次以上
        }
      }
    }
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'yaogengzhu, Inc.\nAll rights reserved.\n',
    })
  ]
})
