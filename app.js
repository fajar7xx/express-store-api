require('dotenv').config()

// async errors
require('express-async-errors')

const express = require('express')
const app = express()

const connectDb = require('./db/connect')

const productRoutes = require('./routes/productRoutes')


const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Store API</h1>
        <a href="/api/v1/products">products route</a>
    `)
})

// product routes
app.use('/api/v1/products', productRoutes)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.SERVER_PORT || 3000

const start = async () => {
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    }catch(error){
        console.log(error)
    }
} 

start()