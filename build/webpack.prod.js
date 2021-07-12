const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')
console.log(process.env.NODE_ENV)
module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    cache: {
        type: 'filesystem',
    },
})
