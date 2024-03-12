class ProductController {
    async getAllProduct(req, res){
        res.json(req.query)
    }
}

module.exports = new ProductController