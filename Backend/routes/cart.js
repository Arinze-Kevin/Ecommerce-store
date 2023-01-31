const express = require('express')
const router = express.Router()
const {auth} = require('../middleware/authMiddleware')
const {adminAuth} = require('../middleware/adminAuthMiddleware')

const { createCart, updateCart, deleteCart, getUserCart, getAllCarts } = require('../controllers/cartController')

router.post('/create', auth, createCart)
router.patch('/update:id', auth, updateCart)
router.delete('/delete:id', auth, deleteCart)
router.get('/user', auth, getUserCart)
router.get('/all', adminAuth, getAllCarts)

module.exports = router