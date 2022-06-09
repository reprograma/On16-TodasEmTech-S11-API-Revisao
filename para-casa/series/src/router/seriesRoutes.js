const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

router.get('/all', controller.getAllSeries)
router.get('/genre', controller.getByGenre)
router.get('/:id', controller.getSeriesById)
router.post('/newSerie', controller.postNewSerie)

module.exports = router