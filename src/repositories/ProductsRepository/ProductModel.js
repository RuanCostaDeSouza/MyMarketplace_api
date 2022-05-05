const {Model,DataTypes} = require('sequelize');

class Products extends Model {
    static init(connection){
        super.init({
            id:{
                type:DataTypes.STRING,
                primaryKey:true,
                allowNull:false,
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            price:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            image:{
                type:DataTypes.STRING,
                allowNull:false,
            },
        },
        {
            sequelize:connection
        })
    }
}

module.exports = Products