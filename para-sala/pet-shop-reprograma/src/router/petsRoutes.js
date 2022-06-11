<<<<<<< HEAD
=======

   
>>>>>>> 3062f636d0290682e05b7731dcbe2422e0cb1380
const express = require("express")
const router = express.Router()
const controller = require("../controller/petsController")

// post - criacao
router.post("/", controller.createPet)

// delete - remoção
router.delete("/:id", controller.deletePet)

// put e patch - alteração
router.put("/:id", controller.updatePet)
router.patch("/:id/name", controller.updateName)

// get - recuperação
router.get("/", controller.getAllPets)
router.get("/atende", controller.getPetByAtendende)
router.get("/:id", controller.getPet)

module.exports = router;