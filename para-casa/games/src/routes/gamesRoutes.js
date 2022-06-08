const express = require ('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/games', controller.getGames)
router.get('/games/:id', controller.getIdGame)
router.post('/add', controller.addGame)
router.put('/change/:id', controller.changeGame)
router.delete('/delete/:id', controller.deleteGame)
router.patch('/update/:id/liked', controller.updateGame)




module.exports = router