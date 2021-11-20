const mongoose = require("mongoose");
const Job = require("../models/job");
const Application = require("../models/application");

module.exports = {
  getCounts: (employerId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const jobsCount = await Job.countDocuments({
          employerId: mongoose.Types.ObjectId(employerId),
        });

        const applications = await Application.aggregate()
          .lookup({
            from: "jobs",
            localField: "jobId",
            foreignField: "_id",
            as: "jobDetails",
          })
          .unwind("jobDetails")
          .match({
            "jobDetails.employerId": mongoose.Types.ObjectId(employerId),
          });

        const approvedApplications = await Application.aggregate()
          .match({ status: "Approved" })
          .lookup({
            from: "jobs",
            localField: "jobId",
            foreignField: "_id",
            as: "jobDetails",
          })
          .unwind("jobDetails")
          .match({
            "jobDetails.employerId": mongoose.Types.ObjectId(employerId),
          });

        const rejectedApplications = await Application.aggregate()
          .match({ status: "Rejected" })
          .lookup({
            from: "jobs",
            localField: "jobId",
            foreignField: "_id",
            as: "jobDetails",
          })
          .unwind("jobDetails")
          .match({
            "jobDetails.employerId": mongoose.Types.ObjectId(employerId),
          });

        resolve({
          jobsCount,
          applicationsCount: applications.length,
          approvedApplicationsCount: approvedApplications.length,
          rejectedApplicationsCount: rejectedApplications.length,
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  postJob: (jobDetails, logoDetails, protocol, host, employerId) => {
    return new Promise((resolve, reject) => {
      const newJob = {
        employerId: mongoose.Types.ObjectId(employerId),
        ...jobDetails,
        location: JSON.parse(jobDetails.location),
        languages: jobDetails.languages
          .split(",")
          .map((language) => language.trim()),
        skills: jobDetails.skills.split(",").map((skill) => skill.trim()),
        companyLogo: {
          id: logoDetails.id,
          filename: logoDetails.filename,
          url: `${protocol}://${host}/file/image/${logoDetails.filename}`,
        },
      };
      Job.create(newJob)
        .then((job) => resolve(job))
        .catch((error) => reject(error));
    });
  },
  getAllJobs: (employerId) => {
    return new Promise((resolve, reject) => {
      Job.find({ employerId: mongoose.Types.ObjectId(employerId) })
        .then((jobs) => resolve(jobs))
        .catch((error) => reject(error));
    });
  },
  updateJob: (jobDetails, logoDetails, protocol, host) => {
    return new Promise((resolve, reject) => {
      const { _id, ...rest } = jobDetails;

      const updates = {
        ...rest,
        location: JSON.parse(rest.location),
        languages: rest.languages.split(",").map((language) => language.trim()),
        skills: rest.skills.split(",").map((skill) => skill.trim()),
        companyLogo: logoDetails
          ? {
              id: logoDetails.id,
              filename: logoDetails.filename,
              url: `${protocol}://${host}/file/image/${logoDetails.filename}`,
            }
          : JSON.parse(rest.companyLogo),
      };

      Job.findByIdAndUpdate(_id, updates, { new: true })
        .then((job) => resolve(job))
        .catch((error) => reject(error));
    });
  },
  deleteJob: (jobId) => {
    return new Promise((resolve, reject) => {
      Job.findByIdAndDelete(jobId)
        .then((job) => resolve(job))
        .catch((error) => reject(error));
    });
  },
};
