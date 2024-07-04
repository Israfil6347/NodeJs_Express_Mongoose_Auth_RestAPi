require("dotenv").config();
const User = require("../models/userModel/user.model");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {  
    const findUser = await User.findOne({ id: jwt_payload.username })
    User.findOne({ id: jwt_payload.username }, function (err, user,next) {  
      if (err) {
        return done(err, false);
      }
      if (user) {
        next()
        return done(null, user);
      } else {
        return done(null, false, { message: 'Unauthorized' });
      }
    });
  })
);

module.exports = passport; // Ensure you export passport