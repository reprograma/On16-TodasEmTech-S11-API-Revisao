const express = require('express')
const petRoutes = require('./router/petsRoutes')

const app = express()
app.use("/pets", petRoutes)

module.exports = app
