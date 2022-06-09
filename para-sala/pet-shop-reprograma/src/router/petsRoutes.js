const controller = require('../controller/petsController')

const express = require('express')

const router = express.Router()

router.post('/add', controller.postNewPetShop)
router.patch('/update/name/:id', controller.updateNameById)
router.get('/all', controller.getAllPetShops)
router.get('/:id', controller.getPetShopsById)
router.get('/atende', controller.getPetShopsByAtende)
router.get('/state', controller.getPetShopsbyState)
router.put('/updatePetShop/:id', controller.updatePetShop)
router.delete('/delete/:id', controller.deletePetShop)

module.exports = router