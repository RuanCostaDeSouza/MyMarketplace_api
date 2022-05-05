const Express = require ("express");
const cors = require ("cors");
const Route = require('./routes/index')

const app = Express()

app.use(cors())
app.use(Express.json());


Route(app)

module.exports = app
