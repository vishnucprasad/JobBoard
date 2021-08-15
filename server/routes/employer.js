const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  passport.authenticate("employer-signup", async (err, user, info) => {
    try {
      if (err) {
        return res.status(400).json(err);
      }

      if (!user) {
        return res.status(400).json({ message: info.message });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const token = jwt.sign({ user }, process.env.JWT_SECRET);

        const cookieOptions = {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };

        return res
          .cookie(process.env.COOKIE_KEY, token, cookieOptions)
          .status(200)
          .json({ user });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("employer-login", async (err, user, info) => {
    try {
      if (err) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      if (!user) {
        return res.status(401).json({ message: info.message });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const token = jwt.sign({ user }, process.env.JWT_SECRET);

        const cookieOptions = {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };

        return res
          .cookie(process.env.COOKIE_KEY, token, cookieOptions)
          .status(200)
          .json({ user });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.use(passport.authenticate("employer-jwt", { session: false }));

router.get("/auth", (req, res) => {
  res.json({ user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res
    .status(200)
    .clearCookie("token")
    .json({ status: true, message: "Successfully logged out" });
});

router.get("/", (req, res) => {
  res.send("Express");
});

module.exports = router;