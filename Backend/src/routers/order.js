const express = require('express')
const Order = require('../models/order')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')


const router = new express.Router()


// Create a new order
router.post('/orders', auth, async (req, res) => {
    const order = new Order({
        ...req.body
    })

    try {
        await order.save()
        res.status(201).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update order
router.patch('/order/:id', adminAuth, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate({ _id: req.params.id, owner: req.user._id },
            {
                $set: req.body,
            },
            {
                new: true
            })

        await updatedOrder.save()
        res.status(200).send(updatedOrder)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete order
router.delete('/orders/:id', adminAuth, async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!order) {
            return res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(500).send()
    }
})

// GET USER ORDER
router.get('/orders/me', auth, async (req, res) => {
    try {
        const orders = await Order.find({ _id: req.params.id, owner: req.user._id });
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL ORDERS BY ONLY ADMIN
router.get('/allOrders', adminAuth, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET MONTHLY INCOME
router.get("/orders/income", adminAuth, async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() -1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1))

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth }}},
            { 
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },    
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
        ])
        res.status(200).send(income)
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router