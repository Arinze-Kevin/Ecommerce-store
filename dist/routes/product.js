"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../middleware/authMiddleware"),
  auth = _require.auth;
var _require2 = require("../middleware/adminAuthMiddleware"),
  adminAuth = _require2.adminAuth;
var _require3 = require("../controllers/productController"),
  createProduct = _require3.createProduct,
  updateProduct = _require3.updateProduct,
  deleteProduct = _require3.deleteProduct,
  getProduct = _require3.getProduct,
  getAllProducts = _require3.getAllProducts;
router.post('/create', adminAuth, createProduct);
router.patch('/update:id', auth, updateProduct);
router["delete"]('/delete:id', adminAuth, deleteProduct);
router.get('/product/:id', getProduct);
router.get('/all', getAllProducts);
module.exports = router;