const express = require('express')
const router = express.Router()
const controller = require('../controller/petsController')

//criar o post
router.post("/", controller.createPet)

//criar o delete
router.delete("/:id", controller.updatePet)

//criar o patch
router.patch("/:id/name", controller.updateName)

// criar o get para recuperar os dados do pets.json
router.get("/", controller.getAllPets)
router.get("/atende", controller.getPetByAtende)
router.get("/:id", controller.getPet)


module.exports = router;
