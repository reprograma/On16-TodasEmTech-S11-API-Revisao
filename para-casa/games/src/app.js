// importando o express
const express = require('express')

//importando a continuação das rotas
const gamesRoutes = require('./router/gamesRoutes')

//executar o expess
const app = express()

// usando body parser
app.use(express.json())

// criando uma rota raíz
app.use('/games', gamesRoutes)

// exportar para usar o server.js
module.exports = app