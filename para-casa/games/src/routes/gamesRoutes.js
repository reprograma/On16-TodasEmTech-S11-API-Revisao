const express = require("express")
const  router = express.Router()
const controller = require("../controller/gamesController")

router.get("/lista", controller.gamesLista)
router.get("/buscarjogo/:id", controller.buscaJogo)
router.post("/cadastrar", controller.cadastraJogo)

module.exports = router