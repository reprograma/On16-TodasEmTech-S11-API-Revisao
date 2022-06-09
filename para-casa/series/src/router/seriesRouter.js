const controller = require('../controller/seriesController')

const express = require('express')

const router = express.Router()


router.get('/listAll', controller.getAll)

//DESAFIO
router.post('/:id/:seasonId/episode', controller.newEp)
router.post('/:id/season', controller.newSeason)

module.exports = router