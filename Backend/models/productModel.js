const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  images:  [
   {
    imgUrl:{ type: String, required: true }
   }
  ]    ,
  name: { type: String, required: true },
  description: { type: String, required: false },
   price:{ type: Number,required: false }   ,
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  feature: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: false }
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;