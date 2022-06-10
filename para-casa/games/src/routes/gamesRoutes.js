const express = require('express')

const router = express.Router()

const controller = require('../controller/controllerGames')

router.get('/listar', controller.getAll)
router.get('/bygame/:id', controller.getbyId)
router.post('/add', controller.add)
router.put('/update/:id', controller.update)
router.delete('/deletar/:id', controller.deleteGame)
router.patch('/updatelike/:id', controller.updateLike)

module.exports = router