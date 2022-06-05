// Criando nossas rotas

const express = require('express') 

const router = express.Router()

const controller = require('../controller/petsController')

// Rotas:
router.post('/adicionar', controller.postPet)
router.patch('/name/:id',controller.updateName)


module.exports = router