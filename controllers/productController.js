const product = require('../models/product')
const Product = require('../models/product')

const getAllProductStatic = async (req, res) => {
    
    // throw new Error('testing async errors')
    
    const product = await Product.find({}).sort('name').select('name price')

    res.status(200).json({
        message: 'product testing route',
        nbHits: product.length,
        data: product
    })
}

const getALlProducts = async (req, res) => {
    // console.log(req.query)

    const { featured, company, name, sort, fields } = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }

    if(company){
        queryObject.company = company
    }

    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }


    console.log(queryObject)

    let result = Product.find(queryObject)


    if(sort){
        // products = products.sort()
        console.log(sort)
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }

    if(fields){
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result

    res.status(200).json({
        message: 'product route',
        nbHists: products.length,
        data: products,
    })
}

module.exports = {
    getALlProducts,
    getAllProductStatic
}