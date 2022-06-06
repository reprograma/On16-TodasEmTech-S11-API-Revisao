// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express

//importe da continuacao das rotas de pets
const petsRoutes = require("./router/petsRoutes")


const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

// criar uma rota raiz
app.use("/pets", petsRoutes)


// exportando para usar o server.js
module.exports = app
