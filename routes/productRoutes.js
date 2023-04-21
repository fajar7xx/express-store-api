const express = require('express')
const router = express.Router()

const {
    getALlProducts,
    getAllProductStatic
} = require('../controllers/productController')

router.route('/').get(getALlProducts)
router.route('/static').get(getAllProductStatic)

module.exports = router