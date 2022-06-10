const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')



router.get('/series', controller.getAllSeries)
router.get("/serie/search", controller.getSeriesByGenre)
router.get("/series/:id", controller.getIdSeries)
router.post("/add", controller.addSeries)
router.delete("/delete/:id", controller.deleteSerie)
router.patch("/liked", controller.updateLikedSerie)
router.post("/serie/:id/season/:seasonId/episode", controller.addEpisode)


module.exports = router