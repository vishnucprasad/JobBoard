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
        .then((job) => {
          resolve(job);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
