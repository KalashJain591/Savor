const router = require("express").Router();
const Order = require("../models/orderModel");
const auth=require("../middleware/auth");

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


//Route to add a new Order
router.route("/addorder").post((req, res) => {
    //Retrieve data for post
    const { userid,  ordered_items,  quantity,  totalprice,  status,  address } = req.body;
    //Create a new Post and save it to DB
    const newOrder = new Order({
        userid,
        ordered_items,
        quantity,
        totalprice,  
        status, 
        address 
    });
    // Save the new Order
    newOrder
        .save()
        .then(() => res.json("Order Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/person/:id").get((req, res) => {
    Order.find({"userid":req.params.id})
        .then((order) => res.json(order))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;