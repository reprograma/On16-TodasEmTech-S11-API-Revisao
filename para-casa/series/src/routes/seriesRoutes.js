const controller = require("../controller/seriesController")
const express = require("express")
const router = express.Router()

router.get("/series", controller.getAllSeries)
router.get("/series/genero", controller.getSeriesByGenre)
router.get("/series/:id", controller.getSerieById)
router.post("/series", controller.addNewSerie)
router.delete("/series/:id", controller.deleteSerie)
router.patch("/series/:id/liked", controller.likeSerie)

module.exports = router