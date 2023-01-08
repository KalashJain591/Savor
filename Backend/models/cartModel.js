const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  productid: [],
  productquantity:[],
});

const User = mongoose.model("user", userSchema);

module.exports = User;