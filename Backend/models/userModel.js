const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  profilePic: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: false },
  phoneno: { type: String, required: false },
  dob: { type: String, required: false },
  admin: { type: Boolean, required: false },
  passwordHash: { type: String, required: false },
});

const User = mongoose.model("user", userSchema);

module.exports = User;