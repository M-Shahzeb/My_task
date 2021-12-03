import { Strategy, ExtractJwt } from "passport-jwt";
// import User from '../models/user';

export default function (passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "interveiewtask";

  passport.use(
    new Strategy(opts, async function (_payload, done) {
      let uid;
      if (_payload.user) {
        uid = _payload.user._id;
      }

      if (_payload._doc._id) {
        uid = _payload._doc._id;
      }
      try {
        const user = await User.findOne({ _id: uid });
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }

      /* User.findOne({ _id: uid }, function (err, user) {
        if (err) {
          return done(err, false);
        } else {
          if (!user) {
            done(null, false);
          } else {
            done(null, user);
          }
        }
      }); */
    })
  );
}
