const Express = require('express');
const UserController = require('../controllers/UserController');

const userController = new UserController()

const PostRoutes = Express.Router();

PostRoutes
    .post('/api/create/user',userController.handleCreateUser)
    .post('/api/signin/user',userController.handleSignInUser)


module.exports = PostRoutes