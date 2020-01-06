const fs = require('fs')
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css代码到独立文件

const sourcePath = resolve(__dirname, 'src')
const nodeModulesPath = resolve(__dirname, 'node_modules')
const outputPath = resolve(__dirname, 'dist')

const isDev = process.env.NODE_ENV === 'development'
const isPAGE = process.env.PAGE === 'true'

/**
 * 所有webpack.xxx.config.js的交集配置
 */

module.exports = {
  getEntry,
  webpackBaseConfig: {
    target: 'web',
    entry: isPAGE ? './src/index.tsx' : './src/components/index.ts',
    output: {
      filename: '[name].js',
      path: outputPath, // ./dist
      publicPath: '.',
      library: 'Q-UI',
      libraryTarget: 'umd',
    },
    resolve: {
      modules: [sourcePath, nodeModulesPath],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': sourcePath,
        'react-dom': '@hot-loader/react-dom',
      },
    },

    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        {
          test: /\.jsx?$/,
          include: sourcePath,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                cacheDirectory: true,
                // babel7中的env写法：https://babeljs.io/docs/en/env
                // presets 按倒序优先
                presets: ['@babel/env', '@babel/react', '@babel/typescript'],
                // plugins 按正序优先，plugin的顺序重要，babel会优先加载plugin，然后再加载preset
                plugins: (() => {
                  const plugins = [
                    '@babel/syntax-dynamic-import', // 即 @babel/plugin-syntax-dynamic-import
                    // https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html#loose
                    ['@babel/proposal-class-properties', { loose: true }],
                    '@babel/proposal-object-rest-spread',
                    '@babel/transform-runtime',
                    // https://github.com/babel/babel-loader/issues/493#issuecomment-367737764
                    'dynamic-import-node', // 即 babel-plugin-dynamic-import-node
                  ]
                  if (process.env.HMR === 'true') {
                    plugins.unshift('react-hot-loader/babel')
                  }
                  return plugins
                })(),
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: [
            isDev
              ? 'style-loader'
              : {
                  loader: MiniCssExtractPlugin.loader,
                },
            'css-loader',
            /**
             * 要放在 css-loader style-loader后面
             * 在其他预处理器前面，如 sass|less|stylus-loader等,
             *
             * 脱离 css-loader 单独使用 postcss-loader 时,
             * 不要在 CSS 中使用 @ import 语法，否则打包会很大
             */
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  // 官网不建议写config.path
                  // path: './postcss.config.js',
                  ctx: {
                    // ctx 这个对象会直接传给 postcss.config.js 的 options 参数
                    isDev,
                  },
                },
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|bmp|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10 * 1024, // 10k
                name: `[name].[hash:base64:8].[ext]`,
                publicPath: 'assets/imgs/',
                outputPath: 'assets/imgs/',
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10 * 1024, // 10k
                name: `[name].[ext]`,
                publicPath: 'assets/fonts/',
                outputPath: 'assets/fonts/',
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },

    plugins: [],
  },
}

/**
 * build entry & plugins
 * @return {Object} result entry 对象与 html plugins 数组
 */
function getEntry(isDEV, isHMR, isMini) {
  const path = sourcePath
  const result = {
    entry: {},
  }

  // 1. build entry
  for (const file of fs.readdirSync(path)) {
    // 'index.jsx'.match(/(.+)\.(js|jsx)$/) => ["index.jsx", "index", "jsx"]
    const match = file.match(/(.+)\.(js|jsx|tsx)$/)

    if (match && match.length === 3) {
      result.entry[match[1]] = [resolve(path, file)]

      if (isDEV && isHMR) {
        // 开发环境且启用了 HMR
        result.entry[match[1]].unshift('react-hot-loader/patch')
      }
    }
  }

  return result.entry
}
