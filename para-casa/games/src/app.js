
const express = require('express')

const gameRoutes = require('./route/gamesRoute.js')

const app = express()

app.use(express.json())

// criando uma rota raiz
app.use("/game", gameRoutes)

// exportar para usar o server.js
module.exports = app