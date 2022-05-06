const Users = require('./UserModel.js');

class UserRepository{
    async findByEmail(email){
        
        const user = await Users.findOne({
            where:{email:email},
            attributes:["id","name","email","password"]
        })

        return user
    }

    async save({id,name,password,email}){
        const user = await Users.create({
            id,
            name,
            email,
            password
        })
    
        return user
    }
    async findById(id){
        const user = await Users.findByPk(id,{
            attributes:["id","email","name"]
        })

        return user
    }

}

module.exports = UserRepository