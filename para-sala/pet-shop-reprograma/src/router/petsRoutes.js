const express = require("express")
const router = express.Router()

const controller = require("../controller/petsController")

router.post("/adicionar", controller.postPet)
router.patch("/name/:id", controller.updateName)
router.get("/allpets", controller.allPets)
router.get("/find/:id", controller.petsById)
router.get("/bystate", controller.petsByState)
router.get("/services", controller.petsService)
router.put("/update/:id", controller.petUpdate)
router.delete("/delete/:id", controller.petDelete)

module.exports = router
