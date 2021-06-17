const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(
  '*',
  createProxyMiddleware({
    target: 'https://randomuser.me/api/',
    changeOrigin: true,
  })
)
app.listen(3000);
