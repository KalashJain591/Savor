const checkout = require("../Controllers/paymentController.js")
const paymentVerification = require("../Controllers/paymentController.js")
const router = require("express").Router();

router.route("/checkout").post(checkout);
router.route("/paymentVerification").post(paymentVerification);
module.exports = router;