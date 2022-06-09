const express = require('express')

const router = express.Router()

const controller = require('../controller/controllerGames')

router.get('/listar', controller.getAll)
router.get('/bygame/:id', controller.getbyId)

module.exports = router