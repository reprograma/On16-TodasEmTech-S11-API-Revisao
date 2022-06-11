const express = require("express")
const seriesRoutes = require("../src/routes/routes")
const app = express()
app.use(express.json())

app.use("/series", seriesRoutes)

module.exports = app