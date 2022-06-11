//importo o express
const express = require('express');

//importar a continuação das rotas de pets
const petRouters = require('./router/petsRoutes')

//executar o express
const app = express()

//usar o body parser
app.use(express.json())

//criar uma tora raiz
app.use('/pets', petRouters)

//exportar para usar o server.js
module.exports = app