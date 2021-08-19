const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const employerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    unique: true,
  },
  displayPicture: {
    type: String,
  },
  description: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: "Employer",
  },
  password: {
    type: String,
  },
});

employerSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  if (userObject.password) delete userObject.password;

  return userObject;
};

employerSchema.pre("save", async function (next) {
  const user = this;

  if (user.password) {
    const hash = await bcrypt.hash(user.password, 10);

    user.password = hash;
  }

  next();
});

employerSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const Employer = mongoose.model("employer", employerSchema);

module.exports = Employer;
