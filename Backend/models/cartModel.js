const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  product_id: [],
  product_quantity:[],
});

const User = mongoose.model("user", userSchema);

module.exports = User;