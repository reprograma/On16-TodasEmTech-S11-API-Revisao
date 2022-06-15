const express = require('express')
const router = express.Router()
const controller = require('../controller/seriesController')




router.get('/', controller.getAllSeries)
router.get('/genero', controller.getByGenre)
router.get('/:id', controller.getSerieById)
router.post('/addNew', controller.newSerie)
router.delete('/:id', controller.deleteSerie)
router.patch('/:id/liked', controller.updateLiked)






module.exports = router