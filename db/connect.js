const mongoose = require('mongoose')

const connectDb = (url) => {
    return mongoose.connect(url)
        .then(() => {
            console.log('succesfully connect to database')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connectDb