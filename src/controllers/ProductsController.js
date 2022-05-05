const ProductService = require('../services/ProductsServices/FindAllProductsService');

class ProductControler{
    async handleReturnProductList(request,response){
        const productService = new ProductService();

        try{
        
            const productList = await productService.execute();

            return response.status(200).json(productList);

        }catch(err){
            
            return response.status(400).json({
                message:err.message||"Unexpected error"
            })
        }
    }
}

module.exports = ProductControler