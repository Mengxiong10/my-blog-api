
module.exports = function (app) {
  app.use('/article',require('./api/article'))
  app.use('/tag',require('./api/tag'))
}