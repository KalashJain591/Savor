const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  ordered_items:[],
  quantity:[],
  totalprice: Number,
  status: { type: String, required: true },
  address: { type: String, required: true },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;