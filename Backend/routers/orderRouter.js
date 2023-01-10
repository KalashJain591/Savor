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

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    Order.find({ userId })
      .sort({ date: -1 })
      .then(orders => res.json(orders));
  }
);

module.exports = router;