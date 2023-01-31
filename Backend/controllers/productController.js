const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')


// GET all products
// GET /products?new=true
// GET /products?category=men
const getAllProducts = asyncHandler(async (req, res) => {
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
const getProduct = asyncHandler(async (req, res) => {
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
const createProduct = asyncHandler(async (req, res) => {
    const product = Product({
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
const updateProduct = asyncHandler(async (req, res) => {
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
const deleteProduct = asyncHandler(async (req, res) => {
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

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}