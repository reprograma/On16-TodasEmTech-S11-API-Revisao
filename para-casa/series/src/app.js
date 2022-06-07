// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express

//importe da continuacao da rota series
const seriesRoutes = require("./router/seriesRoutes")


const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

// criar uma rota raiz
app.use("/series", seriesRoutes)


// exportando para usar o server.js
module.exports = app