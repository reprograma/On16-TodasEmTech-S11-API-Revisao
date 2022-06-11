const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/allgames', controller.getAllGames)
router.get('/specificgame/:id', controller.oneGame)
router.post('/cadastrar', controller.newGame)
router.put('/atualizar/:id', controller.updateGame)
router.delete("/delete/:id", controller.deleteGame)
router.patch('/liked/:id', controller.updateLiked)

module.exports = router;