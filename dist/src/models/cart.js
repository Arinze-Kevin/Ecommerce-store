"use strict";

var mongoose = require('mongoose');
var User = require("./user");
var cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  products: [{
    productId: {
      type: String
    },
    quantity: {
      type: Number,
      "default": 1
    }
  }]
}, {
  timestamps: true
});
var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;