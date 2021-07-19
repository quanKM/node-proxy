const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const cors = require('cors')
const app = express()

app.use(cors())

app.use(
  '*',
  createProxyMiddleware({
    target: 'https://randomuser.me/api/',
    changeOrigin: true,
  })
)
app.listen(3000)
