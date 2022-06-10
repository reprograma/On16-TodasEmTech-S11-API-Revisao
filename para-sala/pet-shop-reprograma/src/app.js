const express = require('express'); // importo o express

// Importar a continuação das rotas de pets
const petRoutes = require('./router/petsRoutes')

//executar o express
const app = express()

//usar o body parser
app.use(express.json())

//criar uma rota raiz
app.use("/pets", petRoutes)

//exportar para usar o server.js
module.exports = app