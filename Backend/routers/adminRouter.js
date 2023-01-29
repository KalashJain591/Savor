const router = require("express").Router();
const Product = require("../models/productModel");
const User = require("../models/userModel");
const auth=require("../middleware/auth");
const Order = require("../models/orderModel");

//Root route
router.get("/product",(req, res) => {
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
    const { images,name,  description, price, stock,  category, feature,rating,reviews} = req.body;
    console.log(req.body)
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
        reviews
        });
    // Save the new post
    newProduct
        .save()
        .then(() => res.json("Product Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
 });

//edit product
router.post("/editproduct/:id", async (req, res) => {
    const productId= req.params.id;
    try {
      // console.log(req.body);
      const {images,name,description,price,stock,category,feature,rating,reviews} = req.body;
      const olddetails= await Product.findOne({_id:productId});
      if(!images){
        images:olddetails.images;
      }
      if(!name){
        name:olddetails.name;
      }
      if(!description){
        description:olddetails.description;
      }
      if(!price){
        price:olddetails.price;
      }
      if(!category){
        category:olddetails.category;
      }
      if(!stock){
        stock:olddetails.stock;
      }
      if(!feature){
        feature:olddetails.feature;
      }
      if(!rating){
        rating:olddetails.rating;
      }
      if(!reviews){
        reviews:olddetails.reviews;
      }
        let productsaved=await Product.findOneAndUpdate({_id:productId},{images,name,description,price,stock,category,feature,rating,reviews});
        res.status(200).send(productsaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  router.get("/deleteproduct/:id", async (req, res) => {
    const productId= req.params.id;
    try {
        let productsaved= await Product.findOneAndDelete({ _id:productId});
        res.status(200).send(productsaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });
//all user
router.get("/user",(req, res) => {
    try {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

//all orders
router.get("/order",(req, res) => {
    try {
        Order.find()
        .then((order) => res.json(order))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

//change order status
router.post("/editorderstatus/:id", async (req, res) => {
    const orderId= req.params.id;
    try {
        const {order_status}=req.body;
        // console.log(orderId,order_status)
        let orderstatus=await Order.findOneAndUpdate({_id:orderId},{order_status:order_status});
        res.status(200).send(orderstatus);
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router;