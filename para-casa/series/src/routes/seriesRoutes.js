const controller = require("../controller/seriesController")
const express = require("express")
const router = express.Router()

router.get("/all", controller.seriesAll)
router.get("/genre", controller.seriesGenre)
router.get("/:id", controller.seriesById)
router.post("/add", controller.serieAdd)
router.patch("/liked/:id", controller.serieLiked)
router.delete("/delete/:id", controller.serieDelete)

//rotas do desafio 

router.post("/:id/season/:seasonId/episode", controller.episodeAdd)
router.post("/:id/season", controller.seasonAdd)
router.delete("/:id/season/:seasonId", controller.seasonDelete)
router.delete("/:id/season/:seasonId/episodes/:episodeId", controller.episodeDelete)
router.patch("/:id/season/:seasonId/episode/:episodeId/watched", controller.episodeWatched)

module.exports = router
