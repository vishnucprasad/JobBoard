const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const Admin = require("../models/admin");
const Employer = require("../models/employer");
const User = require("../models/user");

passport.use(
  "admin-login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await Admin.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "admin-google-auth",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_ADMIN_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await Admin.findOne({ email: profile._json.email });

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "employer-signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await Employer.create(req.body);

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "employer-login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await Employer.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "employer-google-auth",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_EMPLOYER_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await Employer.findOne({ email: profile._json.email });

        if (!user) {
          try {
            const newUser = await Employer.create({
              name: profile.displayName,
              email: profile.emails[0].value,
              displayPicture: profile.photos[0].value,
            });

            return done(null, newUser);
          } catch (error) {
            done(error);
          }
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "user-signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await User.create(req.body);

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "user-login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "admin-jwt",
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies[process.env.COOKIE_KEY];
        }
        return token;
      },
    },
    async (token, done) => {
      try {
        if (token.user.role === "Admin") return done(null, token.user);
        else done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "employer-jwt",
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies[process.env.COOKIE_KEY];
        }
        return token;
      },
    },
    async (token, done) => {
      try {
        if (token.user.role === "Employer") return done(null, token.user);
        else done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "user-jwt",
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies[process.env.COOKIE_KEY];
        }
        return token;
      },
    },
    async (token, done) => {
      try {
        if (token.user.role === "Jobseeker") return done(null, token.user);
        else done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);
