const controller = require('../controller/controllerGames')

const express = require('express')

const router = express.Router()

router.get("/catalogoGames", controller.getAll)

module.exports = router