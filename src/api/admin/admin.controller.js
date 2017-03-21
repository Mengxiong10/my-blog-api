const mongoose = require('mongoose')
const passport = require('passport')

const Admin = mongoose.model('Admin')

// Admin.count().then((total)=>{
//   if (total === 0) {
//     Admin.create({username:'admin',password:'admin'})
//   }
// })

require('../../auth/passport.js').setup(Admin)

exports.login = function (req,res,next) {
  passport.authenticate('local',function (err,user,info) {
    if (err) {
      return res.sendStatus(401)
    }
    if (info) {
      return res.status(400).send(info)
    }
    req.login(user,function (err) {
      if (err) {
        return res.sendStatus(500)
      }
    })
    res.status(200).json({state:req.isAuthenticated()})
  })(req,res,next)
}

exports.logout = function (req,res,next) {
  req.logout()
  return res.sendStatus(200)
}