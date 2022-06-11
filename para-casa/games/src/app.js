const gamesRoutes = require("../src/routes/gamesRoutes")
const express = require("express")
const app = express()

app.use(express.json())
app.use("/games", gamesRoutes)

module.exports = app