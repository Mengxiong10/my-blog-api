
module.exports = function (app) {
  app.use('/article', require('./api/article'))

  app.use('/tag', require('./api/tag'))

  app.use('/upload', require('./api/upload'))

  app.use('/admin', require('./api/admin'))
}
