const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/lista', controller.getAll)
router.get('/lista/:id', controller.getGameByID)
router.post('/lista/cadastrarJogo', controller.NewGame)
router.put('/lista/update/:id', controller.updateGame)
router.delete('/delete/:id', controller.deleteGame)
router.patch('/like/:id', controller.likeGame)


module.exports = router;


