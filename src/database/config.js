const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    dialect:"postgres",
    database:process.env.DEV_DATABASE,
    username:process.env.DEV_USERNAME,
    password:process.env.DEV_PASSWORD,
    host:process.env.DEV_HOST,
    port:process.env.DEV_PORT,
    define:{
        underscored:true,
        timestamps:true
    },
}