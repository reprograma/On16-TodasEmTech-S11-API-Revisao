// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express

//importe da continuacao das rotas de pets
const seriesRoutes = require("./router/seriesRoutes")


const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

// criar uma rota raiz
app.use("/series", seriesRoutes)


// exportando para usar o
module.exports = app
