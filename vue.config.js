// vue.config.js

module.exports = {
    
       publicPath: '/', // 基本路径,打包时加上.
       outputDir: process.env.outputDir, // 输出文件目录
       lintOnSave: false, // eslint-loader 是否在保存的时候检查
       // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
       // webpack配置
       chainWebpack: config => {
         config.resolve.symlinks(true)
       },
       
       configureWebpack: config => {
          if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置... mode只支持production，development，none 没有其他选择
            config.mode = 'production'
          }
          else{
            //为开发环境配置 ，和上面的区别在于开启的插件少一点
             config.mode = 'development'
 
          }
        }

  }