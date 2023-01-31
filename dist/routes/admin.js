"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/adminController"),
  registerAdmin = _require.registerAdmin,
  loginAdmin = _require.loginAdmin,
  getMe = _require.getMe;
var _require2 = require("../middleware/adminAuthMiddleware"),
  adminAuth = _require2.adminAuth;
router.post('/', registerAdmin);
router.post('/login', loginAdmin);
router.get('/me', adminAuth, getMe);
module.exports = router;