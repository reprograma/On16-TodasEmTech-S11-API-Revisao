// imposrto o express
const express = require ('express')

// importa a continuação da rota das séries
const seriesRoutes = require('./router/seriesRoutes')

//executa o express
const app = express()

//usa o body parser
app.use(express.json())

//criar uma rota raiz
app.use('/series', seriesRoutes)

//exportar para usar o server.js
module.exports = app
