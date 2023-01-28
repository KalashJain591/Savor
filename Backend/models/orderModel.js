const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String
  },
  profilePic: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: false },
  phoneno: { type: String, required: false },
  dob: { type: String, required: false },
  ordername: { type: String, required: true },
  address: { type: String, required: false },
  addressoptional: { type: String, required: false },
  state: { type: String, required: false },
  city: { type: String, required: false },
  postalcode: { type: String, required: false },
  ordermobile1: { type: String, required: false },
  ordermobile2: { type: String, required: false },
  Address: { type: String, required: false },
  AddressOptional: { type: String, required: false },
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
      quantity:Number,
      unit:String,
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
  payment_status:{type:String,required:false},
  Cash_on_delivery:{type:Boolean,required:false},
  order_status: String
});

module.exports = Order = mongoose.model('order', OrderSchema);