const express = require("express")
const seriesRoutes = require("../src/routes/seriesRoutes")
const app = express()

app.use(express.json())

app.use("/series", seriesRoutes)

module.exports = app