const express = require("express");
const userHelper = require("../helpers/userHelper");
const router = express.Router();

router.get("/jobs", (req, res) => {
  userHelper
    .getAllJobs()
    .then((jobs) => res.json(jobs))
    .catch((error) => res.json(error));
});

module.exports = router;
