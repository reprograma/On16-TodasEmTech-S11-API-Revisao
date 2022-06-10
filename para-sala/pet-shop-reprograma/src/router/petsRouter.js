const express = require("express")

const router = express.Router()

const controller = require("../controller/petsController")

router.get("/list", controller.getPetshop)

router.get("/list/:id", controller.getPetById)

router.get("/list/service", controller.petService)

router.get("/list/state")

router.post("/add", controller.postPet)

router.patch("/updatename/:id", controller.updatePetName)

router.put("/update/:id", controller.updatePetshop)

router.delete("/delete/:id", controller.deletePet)

module.exports = router;