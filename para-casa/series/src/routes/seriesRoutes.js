const controller = require("../controller/seriesController")

const express = require("express")

const router = express.Router()

router.get("/biblioteca", controller.getAllSeries)
router.get("/genre", controller.getForGenre)
router.get("/name/:id", controller.getForSerie)
router.post("/cadastrar", controller.newSerie)
router.delete("/delete/:id", controller.deleteSerie)
router.patch("/atualizar/:id", controller.atualizarSerie)


module.exports = router