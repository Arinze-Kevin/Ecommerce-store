const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const adminRouter = require('./routers/admin')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
const cartRouter = require('./routers/cart')
const stripeRouter = require('./routers/stripe')
const cors = require('cors')
// require('express-async-errors')

const app = express()
const port = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(adminRouter)
app.use(productRouter)
app.use(orderRouter)
app.use(cartRouter)
app.use('/api/checkout', stripeRouter)

// require('./middleware/error.middleware')(app)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})