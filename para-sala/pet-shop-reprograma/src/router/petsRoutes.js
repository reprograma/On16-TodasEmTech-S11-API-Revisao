const express = require('express')

const router = express.Router()

const controller = require('../controller/petsController')

router.get('/listar', controller.getPet)
router.get('/listar/:id', controller.getById)
router.post('/adicionar', controller.postPet)
router.patch('/name/:id', controller.updateName)
router.delete('/excluir/:id', controller.deletePet)

module.exports = router