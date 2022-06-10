const { application } = require('express')
const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

router.get('/catalogo', controller.getAll)
router.get('/buscar/genero', controller.getGenre)
router.get('/buscar/serie/:id', controller.getSerieById)
router.post('/criar', controller.createSerie)
router.delete('/delete/:id', controller.deleteSerie)
router.patch('/buscar/:id/liked', controller.updateLikedStatus)
router.post("/:id/season/:seasonId/episode", controller.addEpisode)



module.exports = router