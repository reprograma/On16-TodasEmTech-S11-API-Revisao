// Criando nossas rotas

const controller = require('../controller/seriesController')

const express = require('express')

// Função de rotas do express
const router = express.Router()

// router, verbo http (caminho, função)
router.get("/series", controller.getAllSeries)
router.get("/series/genero", controller.getGenreSeries)
router.get("/series/:id", controller.getSerieId)
router.post("/series", controller.addSerie)
router.delete("/series/:id", controller.deleteSerie)
router.patch("/series/:id/liked", controller.updateLiked)

// Exportar para ser usado no app.js
module.exports = router