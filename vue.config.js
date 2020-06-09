
//const path  = require('path');


module.exports = {
       publicPath: '/', // 基本路径,打包时加上.
       outputDir: process.env.outputDir, // 输出文件目录
       lintOnSave: false, // eslint-loader 是否在保存的时候检查
       
       // webpack链式操作
       chainWebpack: config => {
         config.resolve.symlinks(true)
       },
       //webpack配置
       configureWebpack: config => {
          if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置... mode只支持production，development，none 没有其他选择
            config.mode = 'production'
          }
          else{
            //为开发环境配置 ，和上面的区别在于开启的插件少一点
             config.mode = 'development'
 
          }
        },
        devServer:{
            host:'0.0.0.0',
            port:8010,
            proxy:{   //配置代理服务器地址的是target的地址
               '/api':{
                   target:'http://localhost:8081/zfc',
                   changeOrigin:true,  //允许跨域，还不是特别明白
                   pathRerite:{
                     '^/api':''   //请求中去掉/api
               } 

            }


        }

      }

  }