'use strict'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackBar = require('webpackbar')
const resolve = dir => path.join(__dirname, dir)
// page title
// 生产环境，测试和正式
const IS_PROD = ['production'].includes(process.env.NODE_ENV)
let outputDir = 'dist'
switch (process.env.VUE_APP_ENV) {
  case 'dev': {
    outputDir = 'dist-dev'
    break
  }
  case 'devol': {
    outputDir = 'dist-devol'
    break
  }
  case 'prod': {
    outputDir = 'dist-prod'
    break
  }
  default: {
    outputDir = 'dist'
  }
}

module.exports = {
  publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
  //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
  outputDir: outputDir, //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    port: 9020, // 端口
    open: true, // 启动后打开浏览器
    https: false,
    hotOnly: true,
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true
    },
    proxy: {
      // 配置跨域
      '/api/': {
        target: 'https://gateway.iuctrip.com/destination-applet-service/',
        // target: 'https://devol-gateway.iuctrip.com/destination-applet-service/',
        // target: 'https://d-applet.iuctrip.com',
        // ws:true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法，感谢github用户 shaonialife*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)
          if (
            relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss'
          ) {
            return '@import "~@/styles/variables.scss";' + content
          }
          return content
        },
      },
    },
  },
configureWebpack() {
    return {
      plugins: [
        new WebpackBar(),
      ],
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // 别名 alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))

    config.output
      .filename(path.join('static', `js/[name].${Date.now()}.js`))
      .chunkFilename(path.join('static', `js/[name].${Date.now()}.js`))
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */
    // config.plugin('html').tap(args => {
    //   if (IS_PROD) {
    //     args[0].cdn = cdn.build
    //   } else {
    //     args[0].cdn = cdn.dev
    //   }
    //   return args
    //  })

    /**
     * 打包分析
     */
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(!IS_PROD, config => config.devtool('cheap-source-map'))

    config.when(IS_PROD, config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // 将 runtime 作为内联引入不单独存在
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
          fortawesome: {
            name: 'chunk-fortawesome',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?@fortawesome(.*)/,
          },
        },
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
