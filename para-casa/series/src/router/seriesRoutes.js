const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

router.get('/lista', controller.getAll)
router.get('/lista/genre', controller.getSerieByGenre)
router.get('/lista/:id', controller.getSerieByID)
router.post('/cadastrar', controller.newSerie)
router.delete('/deletar/:id', controller.deleteSerie)
router.patch('/like/:id', controller.likeSeries)

module.exports = router;




