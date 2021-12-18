
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlguin = require('copy-webpack-plugin') // 拷贝静态资源到public目录下
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin'); // arco 教授教

const webpack = require('webpack')
const rootDir = process.cwd()
const getClientEnvironment = require('./env')
const env = getClientEnvironment();

module.exports = {
  mode: 'none',
  target: 'web',
  entry: {
    index: path.join(rootDir, 'template/js/index.js'),
    app: path.resolve(rootDir, 'src/index.tsx')
  },
  output: {
    filename: '[name].[chunkhash:4].js',
    path: path.resolve(rootDir, 'public'),
    clean: true, // 清空打包旧文件
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', 'css', 'less', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|tsx)$/, // es6->es5
        use: ['thread-loader', 'babel-loader'], // thread-loader 多线程打包
        include: path.resolve(rootDir, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(ico|png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './image',
              limit: 1024 * 10,
            },
          },
        ],
      },
      {
        test: /\.woff2$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootDir, 'template/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:4].css',
      chunkFilename: '[name].chunk.css'
    }),
    new CssMinimizerPlugin(),
    new CopyWebpackPlguin({
      patterns: [
        {
          from: '*.js',
          context: path.resolve(rootDir, 'template/js'),
          to: path.resolve(rootDir, 'public/js/[name].js'),
        },
        // {
        //   from: '*.ico',
        //   context: path.resolve(rootDir, 'template'),
        //   to: path.resolve(rootDir, 'public'),
        // },
      ],
    }),
    new webpack.DefinePlugin(env.stringified), // 配置环境变量
    new ArcoWebpackPlugin(), // Arco Ui的tree shaking
  ]
}
