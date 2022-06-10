const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

// ROTAS
router.get('/series', controller.listaSeries)
router.post('/adicionar/', controller.postSerie)
router.patch('/series/liked/:id', controller.likedSerie)

// para exportar
module.exports = router