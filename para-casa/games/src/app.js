const express = require("express")
const app = express()
const gamesRoutes = require("./router/gamesRoutes")

app.use(express.json())
app.use("/", gamesRoutes)

module.exports = app