const express = require('express')

const router = express.Router()

const controller = require('../controller/petsController')

router.post('/adicionar', controller.postPet)
router.patch('/name/:id', controller.updateName)
router.get('/todos', controller.getAllPetShops)
router.get('/petshop/buscar/:id', controller.getPetshopsById)
router.get('/atende', controller.getPetByAtendende)
router.get('/estado', controller.getPetByEstado)
router.put("/:id", controller.updatePet)
router.delete("/:id", controller.deletePet)

module.exports = router;