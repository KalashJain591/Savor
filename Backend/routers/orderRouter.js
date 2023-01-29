const router = require("express").Router();
const Order = require("../models/orderModel");
const auth=require("../middleware/auth");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const User = require("../models/userModel");

//Root route
// this is for admin to see all orders
router.get("/",(req, res) => {
    try {
        Order.find()
        .then((order) => res.json(order))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

router.get("/personorder/:id",(req, res) => {
  const userId = req.params.id;
  try {
      Order.find({userId})
      .then((order) => res.json(order))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    res.json(false);
  }
});


router.post("/orderbycart/:id",async (req, res) => {
  const userId = req.params.id;
  // console.log(req.body);
  try {
    const { ordername, address, addressoptional, state, city, postalcode, ordermobile1,ordermobile2, cash_on_delivery, payment_status, transaction_code}=req.body;
    let user = await User.findOne({_id:userId});
    let cart = await Cart.findOne({userId});
    const newOrder = new Order({
      userId,
      profilePic:user.profilePic,
      name:user.name,
      email:user.email,
      phoneno:user.phoneno,
      dob:user.dob,
      ordername,
      address,
      addressoptional,
      state,
      city,
      postalcode,
      ordermobile1,
      ordermobile2,
      cash_on_delivery, 
      payment_status,
      transaction_code,
      products:cart.products,
      bill:cart.bill,
      date_added:new Date(),
      order_status:"ORDER PLACED"
    });
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(200).send("Order Error");
  }
});

router.post("/orderbyproduct/:id/:productid",async (req, res) => {
  const userId = req.params.id;
  const productId =req.params.productid;
  try {

    const { ordername, address, addressoptional, state, city, postalcode, ordermobile1,ordermobile2, cash_on_delivery, payment_status,transaction_code}=req.body;
    let user = await User.findOne({_id:userId});
    let productDetails = await Product.findOne({ _id: productId }); 
    const price = productDetails.price;
    const name = productDetails.name;
    const images = productDetails.images[0].imgUrl;
    const quantity = productDetails.quantity;
    const unit = productDetails.unit;
    const newOrder = new Order({
      userId,
      profilePic:user.profilePic,
      name:user.name,
      email:user.email,
      phoneno:user.phoneno,
      dob:user.dob,
      ordername,
      address,
      addressoptional,
      state,
      city,
      postalcode,
      ordermobile1,
      ordermobile2,
      cash_on_delivery, 
      payment_status,
      transaction_code,
      products: [{ productId, name, quantity:1, price, images,quantity,unit }],
      bill:price,
      date_added:new Date(),
      order_status:"ORDER PLACED"
    });
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(200).send("Order Error");
  }
});

module.exports = router;