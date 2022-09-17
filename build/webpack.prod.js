const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(webpackBaseConfig, {
  mode: process.env.NODE_ENV,
  devtool: 'hidden-source-map',
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'cache-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['autoprefixer'],
            },
          },
        },
      ]
    }],
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
    new BundleAnalyzerPlugin(),
    new ArcoWebpackPlugin(), // Arco Ui的tree shaking
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:4].css',
      chunkFilename: '[name].chunk.css'
    }),
    new CssMinimizerPlugin(),
    new webpack.BannerPlugin({
      banner: 'yaogengzhu, Inc.\nAll rights reserved.\n',
    }),
    new TerserPlugin({
      parallel: false,
      terserOptions: {
        nameCache: null,
      },
    }),
  ],
  externals: {
    bizcharts: 'bizcharts',
  },
})
