const UserRepository = require("../../repositories/UserRepository/UserRepository");
const Bcrypt = require('bcrypt');
const UserEntity = require("../../entities/UserEntity");

class CreateUserService{

    async execute(name,email,password){
        
        const userRepository = new UserRepository()

        console.log(email,name,password)

        const checkUserAlreadyExists = await userRepository.findByEmail(email);

        if (checkUserAlreadyExists){
            throw new Error("User already exists!");
        }

        if(!name || !password){
            throw new Error("Incomplete data!");;
        }

        const hashedPassword = await Bcrypt.hash(password,10)

        const data = {name,email,password:hashedPassword}

        const user = new UserEntity(data)

        await userRepository.save(user)

    }

}

module.exports = CreateUserService