// const instance = require("../index.js")
const Razorpay = require("razorpay")
// import crypto from "crypto"
// import { Payment } from "../models/PaymentModels.js";
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
const checkout = async (req, res) => {
  // console.log("hello")
  const options = {
    amount: Number(req.body.final_amount*100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options)
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  })
};
const paymentVerification = async (req, res) => {
  res.status(200).json({
    success: true,
  })
};
// export const paymentVerification = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//   console.log(req.body)
//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
//     .update(body.toString())
//     .digest('hex');

//   const isAuthentic = expectedSignature === razorpay_signature;
//   if (isAuthentic) {
//     //database store here
//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     })
//     res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
//   }
//   else {
//     res.status(400).json({
//       success: false,
//     })
//   }
// }; 
module.exports = checkout
module.exports = paymentVerification