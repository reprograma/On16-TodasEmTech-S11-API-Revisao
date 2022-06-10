const express = require("express")
const  router = express.Router()
const controller = require("../controller/gamesController")

router.get("/lista", controller.gamesLista)
router.get("/buscarjogo/:id", controller.buscaJogo)
router.post("/cadastrar", controller.cadastraJogo)
router.put("/atualizar/:id", controller.atualizaJogo)
router.delete("/deletar/:id", controller.deletaJogo)
router.patch("/liked/:id", controller.likedGame)

module.exports = router 