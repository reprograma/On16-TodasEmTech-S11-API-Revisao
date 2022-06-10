const express = require("express")
const router = express.Router()
const controller = require("../controller/seriesController")

router.get("/lista", controller.getSeries)
router.get("/genero", controller.getGenero)

router.post("/:id/season/:seasonId/episode", controller.addEpisode)


module.exports = router 