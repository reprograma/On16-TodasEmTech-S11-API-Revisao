// Criando nossas rotas

const express = require('express') 

const router = express.Router()

const controller = require('../controller/petsController')

// Rotas:
router.post('/adicionar', controller.postPet)


module.exports = router