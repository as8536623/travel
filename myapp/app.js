//使用express构建web服务器 --11:25
const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware');

var app = express();
app.use('/api', createProxyMiddleware({
  target: 'http://192.168.0.131:8082',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api': '/data',
  }
}));
// 端口号
app.listen(8082);

//托管静态资源到public目录下
app.use(express.static('dist'));
