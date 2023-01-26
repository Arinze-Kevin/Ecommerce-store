const mongoose = require('mongoose')
const User = require('./user')


const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: [{
        productId: {
            type: String
        },
        quantity: {
            type: Number,
            default: 1
        }

    }]
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)


module.exports = Cart