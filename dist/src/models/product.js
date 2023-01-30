"use strict";

var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  categories: {
    type: Array
  },
  size: {
    type: Array
  },
  color: {
    type: Array
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
var Product = mongoose.model('Product', productSchema);
module.exports = Product;