const express = require('express') // importando do express
const app = express() // executo o expreess
app.use(express.json()) // uso o bodyparser



const gamesRoutes = require('./routes/gamesRoutes') 
// criar rota raiz
app.use('/games', gamesRoutes)




module.exports = app