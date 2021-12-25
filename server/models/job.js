const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  employerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinNumber: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  languages: [{ type: String }],
  skills: [{ type: String }],
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  companyLogo: {
    id: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  paymentStatus: {
    type: String,
    required: true,
    default: "pending",
  },
});

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
