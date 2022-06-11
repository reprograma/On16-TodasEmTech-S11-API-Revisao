// centralizando o conteudo da aplicacao
const express = require("express")
const gamesRoutes = require("./routes/gamesRoutes")

const app = express()

app.use(express.json())

app.use("/games", gamesRoutes)

module.exports = app