
exports.admin = function (req,res,next) {
 console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    next()
  }else{
    return res.sendStatus(401)
  }
}