// Criando nossas rotas

const express = require('express') 

const router = express.Router()

const controller = require('../controller/petsController')

// Rotas:
router.post('/adicionar', controller.postPet)
router.patch('/name/:id',controller.updateName)
router.get('/listar', controller.getAllpets)
router.get('/listar/:id', controller.getPetsId)
router.get('/listar/atendimento', controller.getPetsAtende)
router.get('/listar/endereco', controller.getPetsEndereco)
router.put('/atualizar/:id', controller.updateAllDatas)
router.delete('/deletar/:id', controller.deletePets)

module.exports = router