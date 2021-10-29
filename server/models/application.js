const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  jobId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  professionalTitle: {
    type: String,
    required: true,
  },
  portfolioLink: {
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
  skills: [{ type: String }],
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  photo: {
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
  resume: {
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
});

const Application = mongoose.model("application", applicationSchema);

module.exports = Application;
