const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    index: true,
    unique: true,
    sparse: true,
  },
  gender: {
    type: String,
  },
  displayPicture: {
    type: String,
  },
  displayPictureDetails: {
    id: {
      type: String,
    },
    filename: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  description: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: "Jobseeker",
  },
  password: {
    type: String,
  },
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  if (userObject.password) {
    delete userObject.password;
    userObject.passwordAuth = true;
  }

  return userObject;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.password) {
    const hash = await bcrypt.hash(user.password, 10);

    user.password = hash;
  }

  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const updates = this._update;

  if (updates.password) {
    const hash = await bcrypt.hash(updates.password, 10);

    updates.password = hash;
  }

  next();
});

userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
