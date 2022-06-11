const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get("/allGames", controller.getAllGame);
router.get("/gameId/:id", controller.getJustOneGame);

router.post('/add', controller.addGame)

router.put('/update/:id', controller.updateGame)

router.delete("/delete/:id", controller.deleteGame);

router.patch('/liked/:id', controller.updateLiked);


module.exports = router