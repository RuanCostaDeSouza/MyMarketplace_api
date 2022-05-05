const Sequelize = require('sequelize');
const config = require('./config')
const Users = require('../repositories/UserRepository/UserModel');
const Products = require('../repositories/ProductsRepository/ProductModel');

const connection = new Sequelize(config)

Users.init(connection);
Products.init(connection)

module.exports = connection