const mongoose = require("mongoose");
const Job = require("../models/job");
const Application = require("../models/application");
const User = require("../models/user");
const Notification = require("../models/notification");
const Enquiry = require("../models/enquiry");
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
        category: { $regex: new RegExp(filters.category, "i") },
        subCategory: { $regex: new RegExp(filters.subCategory, "i") },
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
  createNotification: ({ notifyTo, title, text, endpoint }) => {
    return new Promise((resolve, reject) => {
      const newNotification = {
        notifyTo: mongoose.Types.ObjectId(notifyTo),
        title,
        text,
        endpoint,
        createdAt: moment().valueOf(),
      };

      Notification.create(newNotification)
        .then((notification) => resolve(notification))
        .catch((error) => reject(error));
    });
  },
  applyJob: (applicationDetails, files, protocol, host, userId) => {
    return new Promise((resolve, reject) => {
      const newApplication = {
        userId: mongoose.Types.ObjectId(userId),
        ...applicationDetails,
        jobId: mongoose.Types.ObjectId(applicationDetails.jobId),
        location: JSON.parse(applicationDetails.location),
        skills: applicationDetails.skills
          .split(",")
          .map((skill) => skill.trim()),
        photo: {
          id: files.photo[0].id,
          filename: files.photo[0].filename,
          url: `${protocol}://${host}/file/image/${files.photo[0].filename}`,
        },
        resume: {
          id: files.resume[0].id,
          filename: files.resume[0].filename,
          url: `${protocol}://${host}/file/pdf/${files.resume[0].filename}`,
        },
      };

      Application.create(newApplication)
        .then((application) => {
          Application.aggregate()
            .match({ _id: application._id })
            .lookup({
              from: "jobs",
              localField: "jobId",
              foreignField: "_id",
              as: "jobDetails",
            })
            .unwind("jobDetails")
            .then(([application]) => resolve(application))
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });
  },
  getApplications: (userId) => {
    return new Promise((resolve, reject) => {
      Application.aggregate()
        .match({ userId: mongoose.Types.ObjectId(userId) })
        .lookup({
          from: "jobs",
          localField: "jobId",
          foreignField: "_id",
          as: "jobDetails",
        })
        .unwind("jobDetails")
        .sort({ createdAt: -1 })
        .then((applications) => resolve(applications))
        .catch((error) => reject(error));
    });
  },
  updateProfile: (userId, updates) => {
    return new Promise((resolve, reject) => {
      if (updates.newPassword && updates.confirmedPassword) {
        if (updates.newPassword === updates.confirmedPassword) {
          updates.password = updates.newPassword;
          delete updates.newPassword;
          delete updates.confirmedPassword;
        } else {
          reject({ errMessage: "Entered passwords doesn't match." });
        }
      }

      User.findByIdAndUpdate(userId, updates, { new: true })
        .then((user) => resolve(user))
        .catch((error) => reject(error));
    });
  },
  updateDisplayPicture: (userId, dpDetails, protocol, host) => {
    return new Promise((resolve, reject) => {
      if (dpDetails) {
        const updates = {
          displayPictureDetails: {
            id: dpDetails.id,
            filename: dpDetails.filename,
            url: `${protocol}://${host}/file/image/${dpDetails.filename}`,
          },
          displayPicture: `${protocol}://${host}/file/image/${dpDetails.filename}`,
        };

        User.findByIdAndUpdate(userId, updates, { new: true })
          .then((user) => resolve(user))
          .catch((error) => reject(error));
      } else {
        reject({ errorMessage: "File not Found" });
      }
    });
  },
  deleteDisplayPicture: (userId) => {
    return new Promise((resolve, reject) => {
      const updates = {
        displayPictureDetails: undefined,
        displayPicture: undefined,
      };

      User.findByIdAndUpdate(userId, updates, { new: true })
        .then((user) => resolve(user))
        .catch((error) => reject(error));
    });
  },
  submitEnquiry: (enquiryDetails) => {
    return new Promise((resolve, reject) => {
      Enquiry.create(enquiryDetails)
        .then((enquiry) => resolve(enquiry))
        .catch((error) => reject(error));
    });
  },
};
