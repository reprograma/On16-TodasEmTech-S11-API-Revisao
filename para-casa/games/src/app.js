const express = require("express")
const gamesRoutes = require("./routes/gamesRoutes")

const app = express()

app.use(express.json())
app.use("/gamelist", gamesRoutes)

module.exports = app;