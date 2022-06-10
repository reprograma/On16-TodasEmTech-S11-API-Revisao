const controller = require('../controller/gamesController')

const express =require('express')

const router = express.Router()

router.get("/games", controller.getAllGames)
router.get("/buscar/:id", controller.getGamesid)
router.post("/adicionar", controller.addGames)
router.put("/atualizar/:id", controller.updateGames)
router.delete("/delete/:id", controller.deleteGames)
router.patch("atualizar/:id/liked", controller.likedGames)


module.exports = router;