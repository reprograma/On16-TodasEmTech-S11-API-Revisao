const express = require('express')

const router = express.Router()

const controller = require('../controller/petsController')

router.post('/adicionar', controller.postPet)
router.patch('/name/:id', controller.updateName)
router.delete("/:id", controller.deletePet)
router.put("/:id", controller.changePet)
router.get("/", controller.getAllPets)
router.get("/atende", controller.petService)
router.get("/:id", controller.getPet)


module.exports = router;