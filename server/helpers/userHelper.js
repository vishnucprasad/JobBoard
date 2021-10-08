const mongoose = require("mongoose");
const Job = require("../models/job");

module.exports = {
  getAllJobs: (employerId) => {
    return new Promise((resolve, reject) => {
      Job.aggregate([])
        .lookup({
          from: "employers",
          localField: "employerId",
          foreignField: "_id",
          as: "employerDetails",
        })
        .unwind("employerDetails")
        .project("-employerDetails.password")
        .then((jobs) => resolve(jobs))
        .catch((error) => reject(error));
    });
  },
};
