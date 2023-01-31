"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../middleware/authMiddleware"),
  auth = _require.auth;
var _require2 = require("../middleware/adminAuthMiddleware"),
  adminAuth = _require2.adminAuth;
var _require3 = require("../controllers/cartController"),
  createCart = _require3.createCart,
  updateCart = _require3.updateCart,
  deleteCart = _require3.deleteCart,
  getUserCart = _require3.getUserCart,
  getAllCarts = _require3.getAllCarts;
router.post('/create', auth, createCart);
router.patch('/update:id', auth, updateCart);
router["delete"]('/delete:id', auth, deleteCart);
router.get('/user', auth, getUserCart);
router.get('/all', adminAuth, getAllCarts);
module.exports = router;