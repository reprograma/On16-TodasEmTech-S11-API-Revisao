//Importar o express
const express = require('express')

//Importar a continuação das rotas
const petRoutes = require('./router/petsRoutes')

//Executar o express
const app = express()

//usar o body parser
app.use(express.json())

//criar uma rota raiz
app.use("/pets", petRoutes)

//exportar para usar o server
module.exports = app



