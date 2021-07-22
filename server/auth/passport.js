const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const Admin = require('../models/admin');

passport.use('admin-login', new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await Admin.findOne({ email });
            if (!user) {
                return done(null, false, { message: 'User not found' });
            }

            const validate = await user.isValidPassword(password);

            if (!validate) {
                return done(null, false, { message: 'Wrong Password' });
            }

            return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
            return done(error);
        }
    }
));

passport.use('admin-google-auth', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_ADMIN_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await Admin.findOne({ email: profile._json.email });
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.use(new JWTstrategy(
    {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: (req) => {
            let token = null;
            if (req && req.cookies) {
                token = req.cookies[process.env.COOKIE_KEY];
            }
            return token;
        }
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }
));