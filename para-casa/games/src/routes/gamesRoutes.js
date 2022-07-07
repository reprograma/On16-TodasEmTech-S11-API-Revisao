const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/games', controller.getAllGames)
router.get('/games/:id', controller.getIdGames)
router.post('/add', controller.addGames)
router.put('/change/:id', controller.deleteGame)
router.patch('/update/:id/liked', controller.updateGame)

module.exports = router;
