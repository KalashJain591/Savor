const router = require("express").Router();
const Product = require("../models/productModel");
const auth=require("../middleware/auth");

//Root route
router.get("/",(req, res) => {
    try {
        Product.find()
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

//Route to add a new post
router.route("/addproduct").post((req, res) => {
    //Retrieve data for post
    const { images,name,  description, price, stock,  category, feature,rating,reviews, quantity,unit} = req.body;
    //Create a new Post and save it to DB
    const newProduct = new Product({
        images,
        name,
        description,
        price,
        stock,
        category,
        feature,
        rating,
        reviews,
        quantity,
        unit
        });
    // Save the new post
    newProduct
        .save()
        .then(() => res.json("Product Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//route to display a particular post
router.route("/:id").get((req, res) => {
    Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/category/:id").get((req, res) => {
    Product.find({"category":req.params.id})
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;