"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../middleware/authMiddleware"),
  auth = _require.auth;
var _require2 = require("../controllers/stripeController"),
  stripePayment = _require2.stripePayment;
router.post('/payment', auth, stripePayment);
module.exports = router;