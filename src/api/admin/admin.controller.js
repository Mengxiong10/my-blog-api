const mongoose = require('mongoose')
const passport = require('passport')

const Admin = mongoose.model('Admin')

require('../../auth/passport.js').setup(Admin)

Admin.count().then((total)=>{
  if (total === 0) {
    Admin.create({username:'admin',password:'admin'})
  }
})

exports.login = function (req,res,next) {
  passport.authenticate('local',function (err,user,info) {
    if (err) {
      return res.sendStatus(401)
    }
    if (info) {
      return res.status(403).send(info)
    }
    return res.status(200).send({user})
  })(req,res,next)
}

exports.logout = function (req,res,next) {
  req.logout()
  return res.sendStatus(200)
}