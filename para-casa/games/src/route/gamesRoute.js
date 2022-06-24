const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/colecao', controller.getAllGames)
router.get('/buscar/:id', controller.getIdGame)
router.post('/adicionar', controller.postGame)
router.patch('/title/:id', controller.updateName)
router.put('/change/:id', controller.putGameUpdate)
router.delete("/delete/:id", controller.deleteGame)


module.exports = router