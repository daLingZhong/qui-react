const CleanWebpackPlugin = require('clean-webpack-plugin') // 删除旧目录
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css代码到独立文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const outputDistPath = path.resolve(__dirname, 'dist')
const outputDocsPath = path.resolve(__dirname, 'docs')
const { webpackBaseConfig, getEntry } = require('./webpack.config')
const isBuildPage = process.env.PAGE === 'true'

const plugins = [
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: path.join(__dirname, './index.html'), // template
    inject: true, // 设为 true 表示把JS文件注入到body结尾，CSS文件注入到head中
    minify: {
      removeComments: true, // 删除模版文件中的注释
    },
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
]
// : [
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//   ]

module.exports = Object.assign(
  {
    ...webpackBaseConfig,
    output: { ...webpackBaseConfig.output, path: isBuildPage ? outputDocsPath : outputDistPath },
  },
  {
    mode: 'production',
    entry: isBuildPage ? getEntry(false, false, false) : './src/components/index.ts',
    plugins: getPlugin(),
    // https://webpack.js.org/configuration/optimization/
    optimization: {
      /**
       * https://webpack.js.org/plugins/split-chunks-plugin/#src/components/Sidebar/Sidebar.jsx
       * 默认情况下，optimization.splitChunks 只会影响动态加载（on-demand chunks）的chunk，
       * 因为初始chunk(initial chunks)一般是用来启动webapp的
       *
       * 分割chunk策略:
       * 1. New chunk can be shared OR modules are from the node_modules folder
       * 2. New chunk would be bigger than 30kb (before min+gz)
       * 3. Maximum number of parallel requests when loading chunks on demand would be lower or equal to 5
       * 4. Maximum number of parallel requests at initial page load would be lower or equal to 3
       */

      splitChunks: {
        chunks: 'async', // valid values are : 'all', 'async', and 'initial'
        minSize: 30000, // 模块的最小体积
        maxSize: 0,
        minChunks: 1, // 模块的最小被引用次数
        maxAsyncRequests: 5, // 按需加载的最大并行请求数
        maxInitialRequests: 3, // 一个入口最大并行请求数
        automaticNameDelimiter: '~', // 文件名的连接符
        /**
         * boolean: true | function (module, chunks, cacheGroupKey) | string
         * 新chunk的名称,
         * true即随机生成
         */
        name: true,
        cacheGroups: {
          // 缓存组
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true, // run in parallel
          uglifyOptions: {
            output: {
              beautify: false, // 最紧凑的输出
              comments: false, // 删除所有的注释
            },
            compress: {
              conditionals: true, // 优化 if-s 与条件表达式
              unused: true, // 丢弃未使用的变量与函数
              comparisons: true,
              sequences: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true,
            },
          },
        }),
      ],
    },

    // externals即不打包这些npm包，默认运行时会有全局变量
    // 打包出来，bundle里会长这样：
    //   module.exports = ReactDOM;
    //   module.exports = React;
    //  默认React和ReactDOM是全局变量
    //
    externals: isBuildPage
      ? {}
      : {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
          },
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
          },
          'react-router-dom': {
            root: 'ReactRouterDOM',
            commonjs2: 'react-router-dom',
            commonjs: 'react-router-dom',
            amd: 'react-router-dom',
          },
        },
  }
)

function getPlugin() {
  const plugins = [
    new CleanWebpackPlugin([isBuildPage ? 'docs' : 'dist']),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.join(__dirname, './index.html'), // template
      inject: true, // 设为 true 表示把JS文件注入到body结尾，CSS文件注入到head中
      minify: {
        removeComments: true, // 删除模版文件中的注释
      },
    }),
  ]

  if (!isBuildPage) {
    plugins.pop()
  }

  return plugins
}
