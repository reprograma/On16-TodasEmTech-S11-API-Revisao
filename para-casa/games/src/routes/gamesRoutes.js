const express = require("express")

const router = express.Router()

const controller = require("../controller/gamesController")

router.get("/games", controller.getGames)

router.get("/games/:id", controller.getGameById)

router.post("/add", controller.addGame)

router.put("/update/:id", controller.updateGame)

router.delete("/delete/:id", controller.deleteGame)

router.patch("/update/:id", controller.likeGames)

module.exports = router;