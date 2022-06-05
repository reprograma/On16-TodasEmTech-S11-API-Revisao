// Centralizando contéudo da aplicação - Rota raiz

const express = require('express') // Importando o express
const app = express() // Executando o express

app.use(express.json()) // Fazendo nosso bodyparser

// Criando nossa rota raiz
const seriesRotas = require('./routes/seriesRoutes')
app.use("/reprogramaflix", seriesRotas)

module.exports = app // Exportando para usar o server