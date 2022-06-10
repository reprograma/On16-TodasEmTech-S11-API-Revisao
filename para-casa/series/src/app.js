//importar o express
const express = require('express')

//outras rotas
const seriesRotas = require('./routes/seriesRoutes')

//executar o express
const app = express()

//usar o body parser
app.use(express.json())

// rota raiz
app.use('/series', seriesRotas)

//exporta para usar no server.js
module.exports = app
