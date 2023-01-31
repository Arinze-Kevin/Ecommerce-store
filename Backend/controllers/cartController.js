const Cart = require('../models/cartModel')
const asyncHandler = require('express-async-handler')

// Create a new cart
// router.post('/carts', auth, async (req, res) => {
const createCart = asyncHandler(async (req, res) => {    
    try {
        let cart = Cart({
            userId: req.body.userId,
            products: req.body.products
        })
        console.log(cart)
        console.log("cart", cart)
        await cart.save()
        res.status(201).send(cart)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update cart 
// router.patch('/carts/:id', auth, async (req, res) => {
const updateCart = asyncHandler(async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate({ _id: req.params.id, owner: req.user._id },
            {
                $set: req.body,
            },
            {
                new: true
            })

        await updatedCart.save()
        res.status(200).send(updatedCart)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete cart
// router.delete('/carts/:id', auth, async (req, res) => {
const deleteCart = asyncHandler(async (req, res) => {
    try {
        const cart = await Cart.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!cart) {
            return res.status(404).send()
        }

        res.send(cart)
    } catch (e) {
        res.status(500).send()
    }
})

// GET USER CART
const getUserCart = asyncHandler(async (req, res) => {
    try {
        const carts = await Cart.find({ owner: req.user._id });
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL CARTS BY ONLY ADMIN
const getAllCarts = asyncHandler(async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllCarts
}