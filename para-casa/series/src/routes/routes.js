const controller = require('../controller/controller')
const express = require('express')
const router = express.Router()

router.get("/listaDeSeries", controller.getAll)
router.get("/listaDeSeries/seriePorGen", controller.seriePorGen)
router.get("/listaDeSeries/:id", controller.seriePorId)
router.post("/novoCadastro", controller.adicionaSerie)
router.delete("/deletarSerie/:id", controller.deletaSerie)
router.patch("/seriesFavoritas/:id", controller.seriesFavoritadas)

module.exports = router
