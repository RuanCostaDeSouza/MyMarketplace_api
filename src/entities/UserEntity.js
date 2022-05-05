const { v4: uuidv4 } = require('uuid');

class UserEntity{
    constructor({name,email,password,id}){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;

        if(!this.id){
            this.id = uuidv4()
        }
    }
}

module.exports = UserEntity