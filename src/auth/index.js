
exports.admin = function (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    return res.sendStatus(401)
  }
}
