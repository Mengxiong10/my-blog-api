module.exports = {
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/myblog-dev'
  },
  session: {
    cookie: { maxAge: 3600 * 24 * 1000}
  }
}
