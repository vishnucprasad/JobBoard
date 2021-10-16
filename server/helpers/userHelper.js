const mongoose = require("mongoose");
const Job = require("../models/job");

module.exports = {
  getRecentJobs: () => {
    return new Promise((resolve, reject) => {
      Job.aggregate()
        .lookup({
          from: "employers",
          localField: "employerId",
          foreignField: "_id",
          as: "employerDetails",
        })
        .unwind("employerDetails")
        .project("-employerDetails.password")
        .sort({ createdAt: -1 })
        .limit(4)
        .then((jobs) => resolve(jobs))
        .catch((error) => reject(error));
    });
  },
  getHighestPayingJobs: () => {
    return new Promise((resolve, reject) => {
      Job.aggregate()
        .lookup({
          from: "employers",
          localField: "employerId",
          foreignField: "_id",
          as: "employerDetails",
        })
        .unwind("employerDetails")
        .project("-employerDetails.password")
        .sort({ salary: -1 })
        .limit(4)
        .then((jobs) => resolve(jobs))
        .catch((error) => reject(error));
    });
  },
  getJob: (jobId) => {
    return new Promise((resolve, reject) => {
      Job.aggregate()
        .match({ _id: mongoose.Types.ObjectId(jobId) })
        .lookup({
          from: "employers",
          localField: "employerId",
          foreignField: "_id",
          as: "employerDetails",
        })
        .unwind("employerDetails")
        .project("-employerDetails.password")
        .then((job) => resolve(job[0]))
        .catch((error) => reject(error));
    });
  },
  getAllJobs: () => {
    return new Promise((resolve, reject) => {
      Job.aggregate()
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
