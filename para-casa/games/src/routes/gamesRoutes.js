const controller = require("../controller/gamesController")
const express = require("express")

const router = express.Router()

router.get("/gamesList", controller.getAllGames)
router.get("/gameSearch/:id", controller.getGameSearch)
router.post("gameNew", controller.postNewGame)
router.put("/gameUpdate/:id", controller.gameUpdate)
router.delete("/gameDelete/:id", controller.deleteGame)




module.exports = router