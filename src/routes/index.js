const express = require('express')
const router_customer = require('./customer-routes/index')

const router = express.Router()
router.use(router_customer)

module.exports = router