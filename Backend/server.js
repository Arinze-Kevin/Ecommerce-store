const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')

const PORT = process.env.PORT

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({message: 'Welcome...'})
})

// Handle cors error
app.use(cors())

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/admins', require('./routes/admin'))
app.use('/api/carts', require('./routes/cart'))
app.use('/api/orders', require('./routes/order'))
app.use('/api/products', require('./routes/product'))
app.use('/api/checkout', require('./routes/stripe'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))