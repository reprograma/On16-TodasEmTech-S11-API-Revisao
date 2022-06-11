const express = require("express")
const gamesRoutes = require("./routes/routesGames")
const app = express()
app.use(express.json())

app.use("/gamesRoutes", gamesRoutes )

module.exports = app