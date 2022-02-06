const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  notifyTo: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  endpoint: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  readStatus: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Notification = mongoose.model("notification", notificationSchema);

module.exports = Notification;
