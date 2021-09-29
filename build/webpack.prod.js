const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')
module.exports = merge(webpackBaseConfig, {
  mode: process.env.NODE_ENV,
  devtool: 'hidden-source-map',
  cache: {
    type: 'filesystem',
  }
})
