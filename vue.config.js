const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    port: 8082,
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.131:8082',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/data'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('images', resolve('src/assets/style/images'))
      .set('common', resolve('src/common/gallary'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/style/common.less']
    }
  }
}
