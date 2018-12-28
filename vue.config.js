const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader是否在保存时检查
  lintOnSave: true,
  // webpack-dev-server 相关配置
    devServer: {
    // host: 'localhost',
    // port: 8000,
    proxy: 'http://localhost:8000'
    // 设置代理
    // proxy: {
    //   '/': {
    //     // 目标 API 地址
    //     target: 'http://127.0.0.1:8000/api',
    //     // 如果要代理 websockets
    //     // ws: true,
    //     // 将主机标头的原点更改为目标URL
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  // webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('static', resolve('static'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
  }
  // configureWebpack: () => {},
  // // vue-loader 配置项
  // vueLoader: {},
  // // 生产环境是否生成 sourceMap 文件
  // productionSourceMap: true,
  // // css 相关配置
  // css: {
  //   // 是否使用 css 分离插件 ExtractTextPlugin
  //   extract: true,
  //   // 开启 CSS source maps
  //   sourceMap: true,
  //   // css预设器配置项
  //   loaderOptions: {},
  //   // 启用 CSS modules for all css
  //   modules: false,
  //   pluginOptions: {}
  // }
}
