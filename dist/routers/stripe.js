"use strict";

var router = require("express").Router();
var stripe = require("stripe")(process.env.STRIPE_KEY);
router.post("/payment", function (req, res) {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "usd"
  }, function (stripeErr, stripeRes) {
    if (stripeErr) {
      res.status(500).send(stripeErr);
    } else {
      res.status(200).send(stripeRes);
    }
  });
});
module.exports = router;