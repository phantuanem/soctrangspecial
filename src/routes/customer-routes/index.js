const express = require('express')
const productController = require('../../controllers/customer-controllers/product')

const router = express.Router()

router.get('/', productController.getAllProduct)

module.exports = router