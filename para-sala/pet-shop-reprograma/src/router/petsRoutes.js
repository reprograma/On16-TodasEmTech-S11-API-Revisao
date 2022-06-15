const express = require("express")
const router = express.Router()
const controller = require("../controller/petsController")



router.get("/", controller.getAllPets)
router.get('/endereco', controller.getPetByState)
router.get("/atendimento", controller.getPetByAttendance)
router.get("/:id", controller.getPetById)
router.post("/addNewPet", controller.createPet)
router.patch("/:id/name", controller.updateName)
router.put("/update/:id", controller.updatePet)
router.delete("/delete/:id", controller.deletePet)






module.exports = router