const path = require('path')
const { webpackBaseConfig, getEntry } = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isHMR = process.env.HMR === 'true'
module.exports = {
  ...webpackBaseConfig,
  entry: getEntry(true, isHMR, false),
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/src'),
    publicPath: '/',
    library: 'Q-UI',
    libraryTarget: 'umd',
  },
  watch: true,
  devServer: {
    port: 5757,
    hot: isHMR,
    watchContentBase: true,
    compress: true,
    noInfo: false,
    overlay: true,
    clientLogLevel: 'error', // info, none, error, warning
    stats: 'minimal',
    headers: {},
  },
  plugins: webpackBaseConfig.plugins.concat([
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.join(__dirname, './index.html'), // template
      inject: true, // 设为 true 表示把JS文件注入到body结尾，CSS文件注入到head中
      minify: {
        removeComments: true, // 删除模版文件中的注释
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]),
}
