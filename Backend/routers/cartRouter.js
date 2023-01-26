const router = require("express").Router();
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const auth=require("../middleware/auth");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode")

//Root route
router.get('/:id',  async (req, res) => {
    const userId = req.params.id;
    try {
      let cart = await Cart.findOne({ userId });
      if (cart && cart.products.length > 0) {
        res.send(cart);
      } else {
        res.send(null);
      }
    } catch (error) {
      console.log(err);
      res.status(500).send('Something went wrong');
    }
});

router.post('/addtocart/:id', async (req, res) => {
    const userId = req.params.id;
    const {productId} = req.body;
    const quantity = Number.parseInt(req.body.quantity);
    try {
      // console.log("add to cart")
      let cart = await Cart.findOne({ userId });
      let productDetails = await Product.findOne({ _id: productId });
  
      if (!productDetails) {
        res.status(404).json({
          type: 'Not Found',
          msg: 'Invalid request'
        });
      }
      const price = productDetails.price;
      const name = productDetails.name;
      // console.log(name);
      const images = productDetails.images[0].imgUrl;
      // console.log(imgurl)
      if (cart) {
        //if cart exist for the user
        let indexFound = cart.products.findIndex(p => p.productId == productId); 
        //check if product exist or not
        if (indexFound !== -1) {
          let productItem = cart.items[indexFound];
          productItem.quantity += quantity;
          cart.items[indexFound] = productItem;
        } else {
          cart.products.push({ productId, name, quantity, price, images });
        }
  
        cart.bill += quantity * price;
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        //create cart if doesn't exist
        const newCart = await Cart.create({
          userId,
          products: [{ productId, name, quantity, price, images }],
          bill: quantity * price
        });
        return res.status(201).send(newCart);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Something went wrong');
    }
  }
);

router.post('/updatecart/:id',async (req, res) => {
    const userId = req.params.id;
    const { productId, quantity } = req.body;
    try {
      let cart = await Cart.findOne({ userId });
      let item = await Product.findOne({ _id: productId });
      if (!item) {
        return res.status(404).send('Product not found');
      }
      if (!cart) {
        return res.status(400).send('Cart not found');
      } else {
        let itemIndex = cart.products.findIndex(p => p.productId == productId);

        //check if product exist or not
        if (itemIndex == -1) {
          return res.status(404).send('Item not found in cart');
        } else {
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          cart.products[itemIndex] = productItem;
        }
        cart.bill = cart.products.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        cart = await cart.save();
        return res.status(201).send(cart);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('something went worng!');
    }
  },
);
router.get('/removefromcart/:userId/:itemId', async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try {
      // console.log("hello");
      let cart = await Cart.findOne({ userId });  
      let itemIndex = cart.products.findIndex(p => p.productId == productId);
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        cart.bill -= productItem.quantity * productItem.price;
        cart.products.splice(itemIndex, 1);
      }
      cart = await cart.save();
      return res.status(201).json(cart);
    } catch (error) {
      console.log(error);
      res.status(500).send('Something went wrong');
    }
  });

  router.post('/clearcart', async (req, res) => {
    try {
      // console.log("first")
      const token = req.cookies.token;
      if (!token) return res.json(false);
      var decoded = jwt_decode(token);
      // console.log(decoded.user);
      var userId=decoded.user;
      await Cart.findOneAndDelete({ userId});
      return res.status(201).json("Cart Cleared Succesfully");
    } catch (error) {
      console.log(error);
      res.status(500).send('Something went wrong');
    }
  });


  
module.exports = router;