const express = require('express');

const app = express();

app.use(express.json())

const gameRouter = require('./router/seriesRouter')

app.use('/series', gameRouter);

module.exports = app