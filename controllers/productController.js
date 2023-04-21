const getAllProductStatic = async (req, res) => {
    
    throw new Error('testing async errors')
    
    res.status(200).json({
        message: 'product testing route'
    })
}

const getALlProducts = async (req, res) => {
    res.status(200).json({
        message: 'product route'
    })
}

module.exports = {
    getALlProducts,
    getAllProductStatic
}