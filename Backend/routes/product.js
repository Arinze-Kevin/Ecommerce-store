const express = require('express')
const router = express.Router()
const {auth} = require('../middleware/authMiddleware')
const {adminAuth} = require('../middleware/adminAuthMiddleware')

const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controllers/productController')

router.post('/create', adminAuth, createProduct)
router.patch('/update:id', auth, updateProduct)
router.delete('/delete:id', adminAuth, deleteProduct)
router.get('/product/:id', getProduct)
router.get('/all', getAllProducts)

module.exports = router