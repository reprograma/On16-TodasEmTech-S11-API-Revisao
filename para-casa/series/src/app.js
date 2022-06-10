const express = require("express") 

const app = express() 

const seriesRoutes = require('./router/seriesRoutes')

app.use(express.json()) 

app.use("/series", seriesRoutes)

module.exports = app
