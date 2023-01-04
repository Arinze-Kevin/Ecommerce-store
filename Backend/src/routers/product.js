const express = require('express')
const Product = require('../models/product')
const adminAuth = require('../middleware/adminAuth')
const { query } = require('express')


const router = new express.Router()

// GET all products
// GET /products?new=true
// GET /products?category=men
router.get('/products', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get a product by ID
router.get('/products/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const product = await Product.findOne({ _id })

        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

// Create a new product
router.post('/products', adminAuth, async (req, res) => {
    const product = new Product({
        ...req.body
    })

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update a product
router.patch('/products/:id', adminAuth, async (req, res) => {
    const updates = Object.keys(req.body)

    try {
        const product = await Product.findOne({ _id: req.params.id })
       
        if (!product) {
            return res.status(400).send()
        }

 updates.forEach((update) => product[update] = req.body[update])
        await product.save()
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete a product by ID
router.delete('/products/:id', adminAuth, async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id })

        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router