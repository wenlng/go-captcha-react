
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./go-captcha-react.cjs.production.min.js')
} else {
  module.exports = require('./go-captcha-react.cjs.development.js')
}
