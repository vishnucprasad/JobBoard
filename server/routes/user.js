const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userHelper = require("../helpers/userHelper");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  passport.authenticate("user-signup", async (err, user, info) => {
    try {
      if (err) {
        if (err.keyValue.email) {
          return res.status(400).json({
            message: `An account with email ${err.keyValue.email} aready exists.`,
          });
        } else if (err.keyValue.mobile) {
          return res.status(400).json({
            message: `An account with mobile number ${err.keyValue.mobile} aready exists.`,
          });
        }
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
          .status(201)
          .json({ user });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("user-login", async (err, user, info) => {
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

router.get(
  "/auth/google",
  passport.authenticate("user-google-auth", {
    session: false,
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", async (req, res, next) => {
  passport.authenticate("user-google-auth", async (err, user, info) => {
    try {
      if (err) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      if (!user) {
        return res.redirect(process.env.USER_AUTH_ERROR_REDIRECT_URL);
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
          .redirect(process.env.USER_AUTH_SUCCESS_REDIRECT_URL);
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.get("/", (req, res) => {
  userHelper
    .getRecentJobs()
    .then((recentJobs) => {
      userHelper
        .getHighestPayingJobs()
        .then((highestPayingJobs) =>
          res.json({ recentJobs, highestPayingJobs })
        )
        .catch((error) => res.json(error));
    })
    .catch((error) => res.json(error));
});

router.get("/job/:id", (req, res) => {
  userHelper
    .getJob(req.params.id)
    .then((job) => res.json(job))
    .catch((error) => res.json(error));
});

router.get("/jobs", (req, res) => {
  userHelper
    .getAllJobs()
    .then((jobs) => res.json(jobs))
    .catch((error) => res.status(204).json(error));
});

router.get("/jobs/find", (req, res) => {
  userHelper
    .findJObs(req.query)
    .then((jobs) => res.json(jobs))
    .catch((error) => res.json(error));
});

router.use(passport.authenticate("user-jwt", { session: false }));

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

router.post(
  "/job/apply",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  (req, res) => {
    userHelper
      .applyJob(
        req.body,
        req.files,
        req.protocol,
        req.get("host"),
        req.user._id
      )
      .then((application) => res.json(application))
      .catch((error) => res.json(error));
  }
);

router.get("/applications", (req, res) => {
  userHelper
    .getApplications(req.user._id)
    .then((applications) => res.json(applications))
    .catch((error) => res.json(error));
});

module.exports = router;
