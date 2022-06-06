const controller = require('../controller/petsController')

const express = require('express')

const router = express.Router()

router.post('/add', controller.postNewPetShop)
router.patch('/update/name/:id', controller.updateNameById)

module.exports = router