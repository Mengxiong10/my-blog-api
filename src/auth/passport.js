
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
    console.log(user,user.id,user._id,'haha')
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
     console.log(id,'kaka')
    User.findById(id, function(err, user) {
      if (err) {
        console.log(err);
      }
      done(err, user)
    })
  })
}

exports.setup = setup 