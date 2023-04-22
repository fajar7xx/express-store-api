require('dotenv').config()

const connectDb = require('./db/connect')
const Product = require('./models/product')

const productJson = require('./data/product.json')

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)

        await Product.deleteMany()
        await Product.create(productJson)

        console.log('success...........')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()