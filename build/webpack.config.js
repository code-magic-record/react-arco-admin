
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlguin = require('copy-webpack-plugin') // 拷贝静态资源到dist目录下
// const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const dotenv = require('dotenv')
const rootDir = process.cwd()

module.exports = {
    mode: 'none',
    target: 'web',
    entry: {
        index: path.resolve(rootDir, 'src/index.jsx')
    },
    output: {
        filename: '[name][contenthash:4].js',
        path: path.resolve(rootDir, 'dist'),
        clean: true, // 清空打包旧文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // es6->es5
                use: ['thread-loader', 'babel-loader'], // thread-loader 多线程打包
                include: path.resolve(rootDir, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'thread-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ico|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader', // 路径返回
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
            template: path.resolve(rootDir, 'public/index.html'),
            inject: 'body',
            scriptLoading: 'blocking',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CssMinimizerPlugin(),
        new CopyWebpackPlguin({
            patterns: [
                {
                    from: '*.js',
                    context: path.resolve(rootDir, 'public/js'),
                    to: path.resolve(rootDir, 'dist/js'),
                },
                {
                    from: '*.ico',
                    context: path.resolve(rootDir, 'public'),
                    to: path.resolve(rootDir, 'dist'),
                },
            ],
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
        }),
    ],
}
