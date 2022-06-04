// Centralizando o conteúdo da aplicação

const express = require('express') // Importando o express

const petRoutes = require('./router/petsRoutes') // Importar a continuação das rotas de pets

const app = express() // Executando o express

app.use(express.json()) // Fazendo o body parser

app.use("/pets", petRoutes) // Criando nossa rota raiz

module.exports = app // Exportando para usar o server.js