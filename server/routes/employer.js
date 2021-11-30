const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const upload = require("../middleware/upload");
const employerHelper = require("../helpers/employerHelper");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  passport.authenticate("employer-signup", async (err, user, info) => {
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

router.get(
  "/auth/google",
  passport.authenticate("employer-google-auth", {
    session: false,
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", async (req, res, next) => {
  passport.authenticate("employer-google-auth", async (err, user, info) => {
    try {
      if (err) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      if (!user) {
        return res.redirect(process.env.EMPLOYER_AUTH_ERROR_REDIRECT_URL);
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
          .redirect(process.env.EMPLOYER_AUTH_SUCCESS_REDIRECT_URL);
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

router.get("/dashboard", (req, res) => {
  employerHelper
    .getCounts(req.user._id)
    .then((data) => {
      employerHelper
        .getApplicationFrequency(req.user._id)
        .then((frequency) => res.json({ ...data, ...frequency }))
        .catch((error) => res.json(error));
    })
    .catch((error) => res.json(error));
});

router.post("/jobs/post", upload.single("companyLogo"), (req, res) => {
  employerHelper
    .postJob(req.body, req.file, req.protocol, req.get("host"), req.user._id)
    .then((job) => res.json(job))
    .catch((error) => res.json(error));
});

router.patch("/jobs/update", upload.single("newLogo"), (req, res) => {
  employerHelper
    .updateJob(req.body, req.file, req.protocol, req.get("host"))
    .then((job) => res.json(job))
    .catch((error) => res.json(error));
});

router.delete("/jobs/delete/:id", (req, res) => {
  employerHelper
    .deleteJob(req.params.id)
    .then((job) => res.json(job))
    .catch((error) => res.json(error));
});

router.get("/jobs", (req, res) => {
  employerHelper
    .getAllJobs(req.user._id)
    .then((jobs) => res.json(jobs))
    .catch((error) => res.json(error));
});

router.get("/resumes", (req, res) => {
  employerHelper
    .getAllResumes(req.user._id)
    .then((resumes) => res.json(resumes))
    .catch((error) => res.json(error));
});

router.post("/resume/approve", (req, res) => {
  employerHelper
    .approveResume(req.body.resumeId, req.user._id)
    .then((resume) => res.json(resume))
    .catch((error) => res.json(error));
});

module.exports = router;
