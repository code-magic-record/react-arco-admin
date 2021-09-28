const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')
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
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2, // 用到两次以上
                },
                vendor: {
                    priority: 1, // 权重
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 1, // 用到两次以上
                }
            }
        }
    }
})
