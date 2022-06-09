const express = require("express")
const router = express.Router()

const controller = require("../controller/petsController")

router.get("/catalogo", controller.getAllPets)

router.get("/catalogo/:id", controller.getPet)

router.get("/buscar/atende", controller.getByAtendimento)

router.get("/listar/estado", controller.getByEstado)

router.post('/adicionar', controller.postPet)

router.patch("/name/:id", controller.updateName)

router.put("/atualizar/:id", controller.atualizarPets)

router.delete("/delete/:id", controller.deletePet)






module.exports = router;