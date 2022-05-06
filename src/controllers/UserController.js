const CreateUserService = require('../services/UserServices/CreateUserService');
const SignIninUserService = require('../services/UserServices/LoginUserService');
const FindOneUserService = require('../services/UserServices/FindOneUserService');


class UserController{
    async handleCreateUser(request,response){
        
        const {name,email,password} = request.body;

        const userService = new CreateUserService();
        
        try{
            
            await userService.execute(name,email,password);

            return response.status(201).json();

        }catch(err){
            
            return response.status(400).json({
                message:err.message||"Unexpected error"
            })
        }

    }
    
    async handleSignInUser(request,response){
        const {email,password} = request.body;

        const singInService = new SignIninUserService();
        try{
            const data = await singInService.execute(email,password)

            return response.status(200).json(data)

        }catch(err){

            return response.status(400).json({
                message:err.message||"Unexpected error"
            })
        }
    }

    async handleGetIdUser (request,response){
        const {id} = request.params;

        const findOneUserService = new FindOneUserService();

        try{
            const user =await findOneUserService.execute(id);
            
            return response.status(200).json(user)
        }catch(err){
            
            return response.status(400).json({
                message:err.message || "Unexpected error"
            })
        }
    }
}

module.exports = UserController