const express = require('express')


const router = express.Router()

const controller = require('../controllers/seriesControllers')

router.post("/adicionar", controller.postSerie)
router.get("/listar", controller.getAllSeries)
router.get("/listar/:id", controller.getByIdSeries)
router.get("/listar-genre", controller.getByGenre)
router.patch("/alterar/:id", controller.updateSerie)
router.delete("/excluir/:id", controller.deleteSerie)

// Desafio:
router.post("/adicionar/:id/season", controller.addSeason)
router.post("/adicionar/:id/season/:seasonId/episode", controller.addEpisode)
router.delete("/excluir/:id/season/:seasonId/episode/:episodeId", controller.deleteEpisode)
router.delete("/excluir/:id/season/:seasonId", controller.deleteSeason)
router.patch("/atualizar/:id/season/:seasonId/episode/:episodeId/watched", controller.updateEpisode)


module.exports = router