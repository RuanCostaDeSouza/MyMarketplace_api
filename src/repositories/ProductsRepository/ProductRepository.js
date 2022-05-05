const ProductModel = require('./ProductModel');

class ProductRepositoty{
    async findAllProducts(){
        const products = await ProductModel.findAll()

        return products
    }
}

module.exports = ProductRepositoty