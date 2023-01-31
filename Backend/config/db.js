const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.set('useCreateIndex', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.trimEnd.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB
