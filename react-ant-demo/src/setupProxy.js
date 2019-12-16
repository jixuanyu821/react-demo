const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {

  app.use(proxy('/api', 
    {
        "target": "http://localhost:4000",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": "/"
        }
    }))
    //app.use(proxy(...)) //可以配置多个代理
}