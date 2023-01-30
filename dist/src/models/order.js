"use strict";

var mongoose = require('mongoose');
// const User = require('./user')

var orderSchema = new mongoose.Schema({
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
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
  }],

  amount: {
    type: Number,
    required: true
  },
  address: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    "default": "pending"
  }
}, {
  timestamps: true
});
var Order = mongoose.model('Order', orderSchema);
module.exports = Order;