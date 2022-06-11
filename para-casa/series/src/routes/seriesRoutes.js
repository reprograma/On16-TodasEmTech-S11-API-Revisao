const express = require("express")
const router = express.Router()
const controller = require("../controller/seriesController")

router.get("/lista", controller.getSeries)
router.get("/genero", controller.getGenero)
router.get("/buscaserie/:id", controller.buscaSerie)
router.post("/novaserie", controller.addSerie)
router.delete("/deletar/:id", controller.deleteSerie)
router.patch("/liked/:id", controller.likedSerie)

//desafio
router.post("/:id/season/:seasonId/episode", controller.addEpisode)


module.exports = router