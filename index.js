const express = require('express')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const app = express()
require('dotenv').config()
console.log('MONGO_URI:', process.env.MONGO_URI);


const dbConnection = require('./config/config')
dbConnection()
const PORT = 3000;
const routes = require('./routes/tasks');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))


app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})