const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userHelper = require("../helpers/userHelper");

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

module.exports = router;
