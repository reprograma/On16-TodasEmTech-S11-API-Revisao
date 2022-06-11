<<<<<<< HEAD
//importo o express
const express = require('express');

//importar a continuação das rotas de pets
const petRouters = require('./router/petsRoutes')

//executar o express
const app = express()

//usar o body parser
app.use(express.json())

//criar uma tora raiz
app.use('/pets', petRouters)

//exportar para usar o server.js
module.exports = app
=======
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
>>>>>>> 3062f636d0290682e05b7731dcbe2422e0cb1380
