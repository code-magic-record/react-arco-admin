const webpacBaseConfig = require('./webpack.config')
const { merge } = require('webpack-merge') // 5.x

module.exports = merge(webpacBaseConfig, {
    mode: process.env.NODE_ENV,
    devtool: 'eval-cheap-module-source-map', // 5.x
    cache: {
        type: 'memory',
    },
    devServer: {
        port: 5000,
        hot: true,
        open: true,
        stats: 'errors-only',
        compress: true,
    },
})
