const controller = require('../controller/gamesController')

const express = require('express')

const router = express.Router()


router.get('/listAll', controller.getAll)
router.get('/listOne/:id', controller.getOne)
router.post('/add', controller.postGames)
router.patch('/fav/:id', controller.updateFav)
router.put('/modifier/:id', controller.putGames)
router.delete('/delete/:id', controller.deleteGames)


module.exports = router