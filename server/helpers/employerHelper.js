const mongoose = require("mongoose");
const Job = require("../models/job");
const Application = require("../models/application");
const moment = require("moment");

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
          counts: [
            { title: "Jobs", value: jobsCount },
            { title: "Resume Requests", value: applications.length },
            { title: "Approved Requests", value: approvedApplications.length },
            { title: "Rejected Requests", value: rejectedApplications.length },
          ],
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  getApplicationFrequency: (employerId) => {
    return new Promise(async (resolve, reject) => {
      // pmfd : previous month firstday & pmld : previous month last day
      const pmfd = moment().subtract(1, "months").startOf("month").valueOf();
      const pmld = moment().subtract(1, "months").endOf("month").valueOf();
      const cmfd = moment().startOf("month").valueOf();
      const cmld = moment().valueOf();

      const pastMonthFrequency = [];
      const currentMonthFrequency = [];

      const nextDay = (day) => moment(day).add(1, "days").valueOf();

      const getApplicationsByDay = async (day, nextDay) => {
        try {
          const applications = await Application.aggregate()
            .match({
              $or: [
                {
                  createdAt: moment(day).valueOf().toString(),
                },
                {
                  createdAt: {
                    $gt: moment(day).valueOf().toString(),
                    $lt: moment(nextDay).valueOf().toString(),
                  },
                },
              ],
            })
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

          return applications;
        } catch (error) {
          throw new Error("An unexpected error occured", error);
        }
      };

      for (day = pmfd; day <= pmld; day = nextDay(day)) {
        try {
          const applications = await getApplicationsByDay(day, nextDay(day));

          pastMonthFrequency.push(applications.length);
        } catch (error) {
          console.log(error);
        }
      }

      for (day = cmfd; day <= cmld; day = nextDay(day)) {
        try {
          const applications = await getApplicationsByDay(day, nextDay(day));

          currentMonthFrequency.push(applications.length);
        } catch (error) {
          console.log(error);
        }
      }

      resolve({ pastMonthFrequency, currentMonthFrequency });
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
  getAllResumes: (employerId) => {
    return new Promise((resolve, reject) => {
      Application.aggregate()
        .lookup({
          from: "jobs",
          localField: "jobId",
          foreignField: "_id",
          as: "jobDetails",
        })
        .unwind("jobDetails")
        .match({
          "jobDetails.employerId": mongoose.Types.ObjectId(employerId),
        })
        .then((resumes) => resolve(resumes))
        .catch((error) => reject(error));
    });
  },
};
