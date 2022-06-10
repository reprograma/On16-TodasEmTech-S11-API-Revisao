const express = require("express") 

const app = express() 

const gamesRoutes = require('./router/gamesRoutes')

app.use(express.json()) 

app.use("/games", gamesRoutes)

module.exports = app
