const express = require('express')
const app = express()
app.use(express.json())
const gamesRotas = require('./router/gamesRoutes')
//Rota raiz
app.use('/games', gamesRotas)

module.exports = app