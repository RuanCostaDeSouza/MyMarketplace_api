const PostRoutes = require('./PostRoutes')
const GetRoutes = require('./GetRoutes')

module.exports = (app)=>{
    app.use(
        PostRoutes,
        GetRoutes
    )
}

