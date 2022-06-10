const controller = require("../controller/gamesController")
const express = require("express")
const  router = express.Router()


router.get("/lista", controller.gamesLista)
router.get("/buscargame/:id", controller.buscarGames)
router.post("/cadastrar", controller.cadastraGames)
router.put("/atualizar/:id", controller.atualizaGames)
router.delete("/deletar/:id", controller.deletaGames)
router.patch("/curti/:id", controller.curtiGames)

module.exports = router