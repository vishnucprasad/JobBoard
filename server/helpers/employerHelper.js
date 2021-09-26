const mongoose = require("mongoose");
const Job = require("../models/job");

module.exports = {
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
  updateJob: (jobDetails, logoDetails, protocol, host, employerId) => {
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
