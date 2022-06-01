const ProductModel = require('./ProductModel');

class ProductRepositoty{
    async findAllProducts(){
        const products = await ProductModel.findAll()

        return products
    }
    async findOne (id){
        const product = await ProductModel.findByPk(id);

        return product
    }
}

module.exports = ProductRepositoty