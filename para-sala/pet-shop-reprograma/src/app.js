// importando o express
const express = require('express')

// importar a continuação das rotas de pets observar se o nome das pastas estao corretos require( aqui dentro)
const petRoutes = require('./router/petsRoutes')

// executar o express
const app = express()

// usar o body parsers
app.use(express.json())

// criando uma rota raiz
app.use("/pets", petRoutes)

// exportar para usar o server.js
module.exports = app