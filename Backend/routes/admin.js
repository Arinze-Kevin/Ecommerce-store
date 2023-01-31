const express = require('express')
const router = express.Router()
const { registerAdmin, loginAdmin, getMe } = require('../controllers/adminController')
const { adminAuth } = require('../middleware/adminAuthMiddleware')

router.post('/', registerAdmin)
router.post('/login', loginAdmin)
router.get('/me', adminAuth, getMe)

module.exports = router