const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  imgurl: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  stock: { type: String, required: true },
  category: { type: String, required: true },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;