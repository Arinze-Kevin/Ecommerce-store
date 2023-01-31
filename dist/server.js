"use strict";

var express = require('express');
var dotenv = require('dotenv').config();
var colors = require('colors');
var _require = require("./middleware/errorMiddleware"),
  errorHandler = _require.errorHandler;
var connectDB = require("./config/db");
var cors = require('cors');
var PORT = process.env.PORT;

// Connect to database
connectDB();
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome...'
  });
});

// Handle cors error
app.use(cors());

// Routes
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/admins', require("./routes/admin"));
app.use('/api/carts', require("./routes/cart"));
app.use('/api/orders', require("./routes/order"));
app.use('/api/products', require("./routes/product"));
app.use('/api/checkout', require("./routes/stripe"));
app.use(errorHandler);
app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT));
});