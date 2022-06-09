const express = require("express")

const router = express.Router()

const controller = require("../controller/petsController")

router.post("/add", controller.postPet)

router.patch("/name/:id", controller.updatePetName)

module.exports = router;