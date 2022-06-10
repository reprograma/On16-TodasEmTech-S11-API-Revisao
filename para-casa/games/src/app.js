const express = require('express')
const gamesRotas = require('./routes/gamesRoutes')
const app = express()
app.use(express.json())
//Rota raiz
app.use('./games', gamesRotas)

module.exports = app