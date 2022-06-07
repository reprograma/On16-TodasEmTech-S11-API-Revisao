const express = require('express')

const app = express()

const seriesRoutes = require('./routes/seriesRoutes')

app.use(express.json())

app.use("/seriesRoutes", seriesRoutes)

module.exports = app