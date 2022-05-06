const Express = require('express');
const ProductController = require('../controllers/ProductsController');
const UserController = require('../controllers/UserController');

const productController = new ProductController()
const userController = new UserController()

const GetRoutes = Express.Router();

GetRoutes
    .get('/api/findall/products',productController.handleReturnProductList)
    .get('/api/findone/user/:id',userController.handleGetIdUser)
    


module.exports = GetRoutes