
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const setup = function (User) {
  passport.use(new LocalStrategy(
    function (username,password,done) {
      User.findOne({username}).then((user) => {
        if (!user) {
          return done(null,false,{error_msg:'用户名或密码错误'})
        }
        if (!user.validPassword(password)) {
          return done(null,false,{error_msg:'密码错误'})
        }
        return done(null,user)
      }).catch(done)
    }
  )) 

  passport.serializeUser(function(user, done) {
    // 仅在Session中保存用户ID
    console.log(user,user.id)
    done(null, user._id)
  })

  passport.deserializeUser(function(id, done) {
    // 当收到后续请求，会通过用户ID查询用户，并将其保存在 req.user 中
    User.findById(id, function(err, user) {
      done(err, user);
    })
  })
}

exports.setup = setup 