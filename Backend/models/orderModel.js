const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String
  },
  products: [
    {
      productId: {
        type: String,
        ref: 'product'
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than 1'],
        default: 1
      },
      price: {
        type: Number
      },
      images:  String,
    }
  ],
  bill: {
    type: Number,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  },
  order_status: String
});

module.exports = Order = mongoose.model('order', OrderSchema);