// const router = require("express").Router();
// const Cart = require("../models/cartModel");
// const auth=require("../middleware/auth");

// //Root route
// // this is for admin to see all orders

// //Route to add a new Cart
// router.route("/addtocart").post((req, res) => {
//     //Retrieve data for post
//     const { userid,product_id,product_quantity } = req.body;
//     //Create a new Post and save it to DB
//     const newCart = new Cart({
//         userid,
//         product_id,
//         product_quantity,
//     });
//     // Save the new Cart
//     newCart
//         .save()
//         .then(() => res.json("New item Cart Added!"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });


// router.route("/person/:id").get((req, res) => {
//     Cart.find({"userid":req.params.id})
//         .then((order) => res.json(order))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

// module.exports = router;