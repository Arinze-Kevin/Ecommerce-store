const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const Admin = require('../models/admin')
const adminAuth = require('../middleware/adminAuth')

const router = new express.Router()

// Create a new admin.
router.post('/admins', async (req, res) => {
    const admin = new Admin(req.body)
    
    try {
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).send({ admin, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

// Login an admin
router.post('/admins/login', async (req, res) => {
    try {
        const admin = await Admin.findByCredentials(req.body.email, req.body.password)
        const token = await admin.generateAuthToken()
        res.send({ admin, token })
    } catch (e) {
        res.status(400).send()
    }
})

// Get admin
router.get('/admins/me', adminAuth, async (req, res) => {
    res.send(req.admin)
})

// Logout an admin
router.post('/admins/logout', adminAuth, async (req, res) => {
    try {
        req.admin.tokens = req.admin.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.admin.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// Logout an admin from all devices
router.post('/admins/logoutAll', adminAuth, async (req, res) => {
    try {
        req.admin.tokens = []
        await req.admin.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// Update an admin
router.patch('/admins/me', adminAuth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password' ]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        updates.forEach((update) => req.admin[update] = req.body[update])
        await req.admin.save()
        res.send(req.admin)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete an admin
router.delete('/admins/me', adminAuth, async (req, res) => {
    try {
        await req.admin.remove()
        res.send(req.admin)
    } catch (e) {
        res.status(500).send()
    }
})

// Upload an image as a profile photo
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})
router.post('/admins/me/avatar', adminAuth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.admin.avatar = buffer
    await req.admin.save()   
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

// Delete admin image
router.delete('/adminns/me/avatar', adminAuth, async (req, res) => {
    req.admin.avatar = undefined
    await req.admin.save()
    res.send()
})

// Get admin image by ID
router.get('/admins/:id/avatar', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id)

        if (!admin || !admin.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(admin.avatar)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router