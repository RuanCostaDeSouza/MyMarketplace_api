const Express = require('express');
const ProductController = require('../controllers/ProductsController');

const productController = new ProductController()

const GetRoutes = Express.Router();

GetRoutes
    .get('/api/findall/products',productController.handleReturnProductList)
    


module.exports = GetRoutes