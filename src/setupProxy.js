const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:8001',
    pathRewrite: {
      '^/api': '',
    },
    changeOrigin: true,
    secure: false
  }));
};