/*

get series/filtrar por id

post /series para cadastrar nova serie

delete /por id - para deletar uma serie por id

patch /para atualizar se gostou ou não da série*/

const controller = require('../controller/seriesController.js')
const express = require('express')

const routerSeries = express.Router()

routerSeries.get('/series', controller.getAllSeries)
routerSeries.get('/series/:id', controller.getSeries)
routerSeries.get('/series/genre', controller.getGenre)
routerSeries.post('/add/series', controller.addSeries)
routerSeries.patch('/series/:id/liked', controller.rateSeries)
routerSeries.delete('/series/:id', controller.deleteSeries)

module.exports = routerSeries