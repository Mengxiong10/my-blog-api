
module.exports = function (app) {
  app.use('/article',require('./api/article'))
}