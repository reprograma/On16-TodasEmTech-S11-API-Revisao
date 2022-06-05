const controller = require("../controller/gamesController")
const express = require("express")

const router = express.Router()

router.get("/gamesList", controller.getAllGames)





module.exports = router