"use strict";

var express = require('express');
require("./db/mongoose");
var userRouter = require("./routers/user");
var adminRouter = require("./routers/admin");
var productRouter = require("./routers/product");
var orderRouter = require("./routers/order");
var cartRouter = require("./routers/cart");
var stripeRouter = require("./routers/stripe");
var cors = require('cors');
var app = express();
var port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(orderRouter);
app.use(cartRouter);
app.use('/api/checkout', stripeRouter);
app.listen(port, function () {
  console.log('Server is up on port ' + port);
});