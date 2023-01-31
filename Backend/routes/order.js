const express = require('express')
const router = express.Router()
const {auth} = require('../middleware/authMiddleware')
const {adminAuth} = require('../middleware/adminAuthMiddleware')

const { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders, monthlyIncome } = require('../controllers/orderController')

router.post('/create', auth, createOrder)
router.patch('/update:id', auth, updateOrder)
router.delete('/delete:id', auth, deleteOrder)
router.get('/user', auth, getUserOrder)
router.get('/all', adminAuth, getAllOrders)
router.get('/monthlyIncome', adminAuth, monthlyIncome)

module.exports = router