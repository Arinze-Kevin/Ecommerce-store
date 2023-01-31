const express = require('express')
const router = express.Router()
const {auth} = require('../middleware/authMiddleware')

const { stripePayment } = require('../controllers/stripeController')

router.post('/payment', auth, stripePayment)

module.exports = router