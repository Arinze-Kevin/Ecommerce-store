"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../middleware/authMiddleware"),
  auth = _require.auth;
var _require2 = require("../middleware/adminAuthMiddleware"),
  adminAuth = _require2.adminAuth;
var _require3 = require("../controllers/orderController"),
  createOrder = _require3.createOrder,
  updateOrder = _require3.updateOrder,
  deleteOrder = _require3.deleteOrder,
  getUserOrder = _require3.getUserOrder,
  getAllOrders = _require3.getAllOrders,
  monthlyIncome = _require3.monthlyIncome;
router.post('/create', auth, createOrder);
router.patch('/update:id', auth, updateOrder);
router["delete"]('/delete:id', auth, deleteOrder);
router.get('/user', auth, getUserOrder);
router.get('/all', adminAuth, getAllOrders);
router.get('/monthlyIncome', adminAuth, monthlyIncome);
module.exports = router;