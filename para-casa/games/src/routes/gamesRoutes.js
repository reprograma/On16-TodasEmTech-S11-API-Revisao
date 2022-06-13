const controller = require("../controller/gamesController")

const express = require("express")

const router = express.Router()

router.get("/biblioteca", controller.getAllGames)
router.get("/gamesbyid/:id", controller.getOneGame)
router.post("/newgame", controller.postGame)
router.put("/atualizar/:id", controller.atualizarGame)
router.delete("/delete/:id", controller.deleteGame)
router.patch("/like/:id", controller.likeGame)

module.exports = router