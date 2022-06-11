const seriesRoutes = require("../src/routes/seriesRoutes")
const express = require("express")
const app = express()

app.use(express.json())

app.use("/series", seriesRoutes)

module.exports = app