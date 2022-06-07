const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/all', controller.getAllGames)
router.get('/:id', controller.getGamesById)
router.post('/register', controller.postNewGame)

module.exports = router