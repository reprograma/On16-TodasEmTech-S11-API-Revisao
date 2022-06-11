const express = require('express')

const router = express.Router()

const controller = require('../controller/petsController')

router.post('/adicionar', controller.postPet)
router.patch('/name/:id', controller.updateName)
router.get('/allpets', controller.getAllPets)
router.get('/petshops/:id', controller.onePetShop)
router.put('/atualizar/:id', controller.updatePets)
router.delete("/delete/:id", controller.deletPetShop)


module.exports = router;