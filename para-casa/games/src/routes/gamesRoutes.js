const controller = require("../controller/gamesController")
const express = require("express")

const router = express.Router()

router.get("/gamesList", controller.getAllGames)
router.get("/gameSearch/:id", controller.getGameSearch)
router.post("gameNew", controller.postNewGame)





module.exports = router