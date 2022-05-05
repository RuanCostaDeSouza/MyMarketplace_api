const app = require('./app')
const connection = require('./database')

const PORT = process.env.PORT || 3030;

connection.authenticate().then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server running in port ${PORT}`) 
    })

}).catch(
    (err)=>{
        console.log(err)
    }
)