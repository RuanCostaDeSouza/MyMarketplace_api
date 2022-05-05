const {Model,DataTypes} = require('sequelize');

class Users extends Model{
    static init(connection){
        super.init({
            id:{
                type:DataTypes.STRING,
                allowNull:false,
                primaryKey:true
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true,
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false,
            }
        },{
            sequelize:connection
        }
        )
    }
}
module.exports = Users