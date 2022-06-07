const express = require('express')
const { get } = require('express/lib/response')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/all', controller.getAllGames)

module.exports = router