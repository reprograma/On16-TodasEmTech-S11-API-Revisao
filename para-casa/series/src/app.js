const express = require("express") //Importar o express

const app = express() //Executar o express

app.use(express.json()) //Usar o bodyparser 

const seriesRoutes = require("./routes/seriesRoutes")

app.use("/series", seriesRoutes)

module.exports = app