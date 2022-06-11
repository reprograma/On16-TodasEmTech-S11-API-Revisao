// importo o express
const express = require('express');

//  importar a continuacao das rotas de pets
const gameRoutes = require('./router/gamesRoutes')

// executar o express
const app = express()

// usar o body parser
app.use(express.json())

// criar uma rota raiz
app.use("/games", gameRoutes)

// exportar para usar o server.js
module.exports = app
