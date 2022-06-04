//importando o express para usar o .router (que é uma função do Express)
const express = require('express')

// guardando a função express.Router em uma const para simplificar a criação das rotas
const router = express.Router()

const controller = require('../controller/petsController')

//criando as rotas

router.post('/adicionar', controller.postPets)
router.patch ('/nome/id', controller.updateNome)


module.exports = router;