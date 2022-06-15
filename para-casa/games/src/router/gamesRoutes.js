const express = require('express')
const router = express.Router()
const controller = require('../controller/gamesController')






router.get('/', controller.getAllGames)
router.patch('/:id/liked', controller.updateLiked)
router.get('/:id', controller.getGameById)
router.post('/addGame', controller.newGame)
router.put('/update/:id', controller.updateGame)
router.delete('/delete/:id', controller.deleteGame)








module.exports = router