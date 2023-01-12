const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  imgurl: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  feature: { type: String, required: true },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;