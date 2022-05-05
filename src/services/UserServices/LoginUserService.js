const jwt = require('jsonwebtoken');
const Auth = require('../../utils/Auth.json');
const Bcrypt = require('bcrypt');
const UserRepository = require("../../repositories/UserRepository/UserRepository");

class LoginUserService{
    async execute(email,password){
        const userRepository = new UserRepository()
        
        if(!email || !password){
            throw new Error("Incomplete data!");
        }

        const user = await userRepository.findByEmail(email);

        if(!user){
            throw new Error("User not found!");
        }

        const checkpasswordsmatch = await Bcrypt.compare(password,user.password);

        if(!checkpasswordsmatch){
            throw new Error("Incorrect password");
        }

        user.password = undefined
        
        const token = jwt.sign({id:user.id},Auth.secret,{expiresIn:43200});

        return {user,token}
    }
}

module.exports = LoginUserService