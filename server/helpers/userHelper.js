const mongoose = require("mongoose");
const Job = require("../models/job");
const moment = require("moment");

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
  findJObs: (filters) => {
    return new Promise((resolve, reject) => {
      const convertDateToMoment = (str) => {
        const date = new Date(str);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        return moment([date.getFullYear(), month, day].join("-"))
          .valueOf()
          .toString();
      };

      let matchObj = {
        designation: { $regex: new RegExp(filters.search, "i") },
        $or: [
          { "location.street": { $regex: new RegExp(filters.location, "i") } },
          { "location.city": { $regex: new RegExp(filters.location, "i") } },
          { "location.state": { $regex: new RegExp(filters.location, "i") } },
          { "location.country": { $regex: new RegExp(filters.location, "i") } },
        ],
      };

      if (filters.startDate !== "null" && filters.endDate !== "null") {
        matchObj.createdAt = {
          $gt: convertDateToMoment(filters.startDate),
          $lt: convertDateToMoment(filters.endDate),
        };
      }

      Job.aggregate()
        .match(matchObj)
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
