const express = require('express');

const gamesRouter = require('./router/gamesRouter')

const app = express()

app.use(express.json())

app.use('/games', gamesRouter)


module.exports = app