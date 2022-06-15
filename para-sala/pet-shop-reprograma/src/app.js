const express = require("express") 
const petsRoutes = require("./router/petsRoutes")

const app = express() 

app.use(express.json()) 

app.use("/petshop", petsRoutes)







module.exports = app
