const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {

  app.use(proxy('/api', 
    {
        "target": "http://10.19.120.69:8201/idmapping",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": "/"
        }
    }))
    //app.use(proxy(...)) //可以配置多个代理
}