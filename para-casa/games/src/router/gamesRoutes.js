const controller = require("../controller/gamesController")
const express = require("express")
const router = express.Router()

router.get("/games", controller.getAllGames)
router.get("/games/:id", controller.getGameById)
router.post("/games", controller.addNewGame)
router.put("/games/:id", controller.updateGame)
router.delete("/games/:id", controller.deleteGame)
router.patch("/games/:id/liked", controller.likeGame)

module.exports = router