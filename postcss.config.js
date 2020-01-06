const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')

const { NodeJsInputFileSystem, CachedInputFileSystem, ResolverFactory } = require('enhanced-resolve')

const CACHED_DURATION = 60000
const fileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), CACHED_DURATION)

// 让 postcss-import 支持在@import的时候支持使用路径昵称alias
// https://github.com/postcss/postcss-import/issues/190#issuecomment-298078092
const resolver = ResolverFactory.createResolver({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  extensions: ['.css', '.scss', 'sass', 'less'],
  modules: ['src'],
  useSyncFileSystemCalls: true,
  fileSystem,
})

/**
 * https://webpack.docschina.org/loaders/postcss-loader/
 * https://github.com/postcss/postcss-loader
 *
 * 官方不建议在webpack.config.js里配置loader的[options.config.path的方式](https://github.com/postcss/postcss-loader#path)，
 * 指定postcss.config.js的路径（除非你把所有的config文件都单独存放时）
 * 而且你只能指定路径，文件名只能是.postcssrc.js或postcss.config.js
 *
 * 默认情况下，`postcss-loader`会在符合test的文件路径中，
 * [向上冒泡查找](https://webpack.docschina.org/loaders/postcss-loader/#config-cascade)
 * 最近的postcss.config.js作为配置文件
 *
 * 可以exports函数或者对象，函数传参更灵活，可以使用环境变量
 * 尤其是其中的 `options` 参数，可以通过 webpack.xxx.config.js
 * | Name    | Type     | Default             | Description                      |
 * | ------- | -------- | ------------------- | -------------------------------- |
 * | `env`     | {String} | 'development'       | `process.env.NODE_ENV`           |
 * | `file`    | {Object} | loader.resourcePath | `extname`, `dirname`, `basename` |
 * | `options` | {Object} | {}                  | Options                          |
 *
 * 关于 plugins :
 * 0. 顺序最好不要改
 * 1. 不要再用`postcss-cssnext`了，换成`postcss-preset-env`吧。
 *    [postcss-cssnext的作者自己提议的](https://github.com/MoOx/postcss-cssnext/issues/334#issuecomment-392685388)
 *    概括来说原因有三：
 *    - `postcss-cssnext`的一个插件包办所有新api的方式，维护成本太高
 *    - 作者一直在找人接手，但是没有合适的
 *    - `postcss-preset-env`作为替代方案已经成熟了，用啥拿啥的方式更灵活
 * 2. `postcss-preset-env`[包含了`autoprefixer`](https://github.com/csstools/postcss-preset-env#autoprefixer)，不用再另加了
 *    同时，配置项中你可以把autoprefixer的[配置]（https://github.com/postcss/autoprefixer#options）放进来
 * 3. `postcss-preset-env`的[`feature`内容](https://github.com/csstools/postcss-preset-env#features)，用啥配啥。feature留白的部分，有stage内容补全（默认是2）
 * 4. autoprefixer   :已经被包含在 postcss-preset-env 中了，不用另引
 */
module.exports = ({ file, options, env }) => {
  const isDev = env === 'development'
  return {
    sourceMap: isDev,
    syntax: getSyntax(file.extname),
    plugins: {
      'postcss-import': {
        root: path.resolve(file.dirname),
        path: ['./src', './node_modules'],
        resolve(id, basedir) {
          return resolver.resolveSync({}, basedir, id)
        },
      },
      'postcss-url': {},
      'postcss-preset-env': postcssPresetEnv({
        overrideBrowserslist: 'last 2 versions',
        // stage: 2, // 默认就是 stage-2. stage从0到4（0草案，4稳定）
        autoprefixer: true,
      }),
      'postcss-simple-vars': {},
      'postcss-mixins': {},
      'postcss-nested': {},
      'postcss-color-function': {},
      cssnano: isDev ? false : {},
      // precss: {},
    },
  }
}

/**
 * 用于给postcss识别文件的语法，但是不做变量处理等转换工作
 * 比如syntax: 'postcss-scss'
 * 可以让postcss使用stylint对scss文件处理，和支持 // 风格的行内注解
 *
 * @param {*} fileExtName
 */
function getSyntax(fileExtName) {
  return {
    // custom parser for CSS (using `postcss-safe-parser`)
    '.css': 'postcss-safe-parser',
    // custom parser for SASS
    '.sass': 'postcss-sass',
    // custom parser for SCSS
    '.scss': 'postcss-scss',
    // custom parser for LESS
    '.less': 'postcss-less',
    // custom parser for SugarSS
    '.sugarss': 'sugarss',
  }[fileExtName]
}
