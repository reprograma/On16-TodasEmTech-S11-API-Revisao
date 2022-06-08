const express = require('express')

const seriesRoutes = require('./router/seriesRoutes')

const app = express()

app.use(express.json())

app.use('/series', seriesRoutes)

module.exports = app