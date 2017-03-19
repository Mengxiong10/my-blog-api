
const _ = require('lodash')

let config = {
  env:process.env.NODE_ENV,
  port:process.env.PORT || 9000,
  // mongodb配置
  mongo:{
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_PASSWORD || ''
    }
  },
  session:{
    secret:'mxie-secret',
  },
}

_.merge(config,require(`./${process.env.NODE_ENV}.js`))

module.exports = config
