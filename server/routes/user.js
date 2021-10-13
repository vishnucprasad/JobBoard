const express = require("express");
const userHelper = require("../helpers/userHelper");
const router = express.Router();

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

router.get("/jobs", (req, res) => {
  userHelper
    .getAllJobs()
    .then((jobs) => res.json(jobs))
    .catch((error) => res.json(error));
});

module.exports = router;
