const express = require('express')
const router = express.Router()

const controller = require('../controller/petsController')

router.post('/adicionar', controller.postPet)


modules.exports = router