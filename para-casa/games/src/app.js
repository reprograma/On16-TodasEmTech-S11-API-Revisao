const express = require("express")
const app = express()

app.use(express.json())

const gamesRoutes = require("./router/gamesRoutes")

app.use("/", gamesRoutes)

module.exports = app