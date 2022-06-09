const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

router.get('/all', controller.getAllSeries)
router.get('/genre', controller.getByGenre)
router.get('/:id', controller.getSeriesById)
router.post('/newSerie', controller.postNewSerie)
router.delete('/delete/:id', controller.deleteSerieById)
router.patch('/update/:id/like', controller.updateLike)

module.exports = router