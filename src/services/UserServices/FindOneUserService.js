const UserRepository = require("../../repositories/UserRepository/UserRepository");

class FindOneUserService{
    async execute(id){
        const userRepository = new UserRepository();

        const user = await userRepository.findById(id);

        if(!user){
            throw new Error("User not found!")
        }
        return user
    }
}

module.exports = FindOneUserService