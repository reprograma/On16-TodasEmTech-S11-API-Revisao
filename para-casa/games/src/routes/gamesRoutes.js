const controller = require("../controller/gamesController")
const express = require("express")

const router = express.Router()

router.get("/gamesList", controller.getAllGames)
router.get("/gameSearch/:id", controller.getGameSearch)





module.exports = router