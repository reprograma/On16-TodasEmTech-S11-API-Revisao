// importando o express
const express = require('express')

//importando a continuação das rotas
const petRoutes = require('./router/petsRoutes')

//executar o expess
const app = express()

// usando body parser
app.use(express.json())

// criando uma rota raíz
app.use('/pets', petRoutes)

// exportar para usar o server.js
module.exports = app