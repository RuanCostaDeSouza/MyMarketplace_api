const ProductRepository = require('../../repositories/ProductsRepository/ProductRepository');

class ProductService{
    async execute(){
        const productRepository = new ProductRepository()

        const products = await productRepository.findAllProducts()

        if(!products){
            throw new Error("No products registered");
        }

        return products
    }
}

module.exports = ProductService