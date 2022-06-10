const express = require('express')

const router = express.Router()

const controller = require('../controller/controllerGames')

router.get('/listar', controller.getAll)
router.get('/bygame/:id', controller.getbyId)
router.post('/add', controller.add)
router.put('/update', controller.update)

module.exports = router