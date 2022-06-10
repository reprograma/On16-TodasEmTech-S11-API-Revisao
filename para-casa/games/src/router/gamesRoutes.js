const express = require('express')
const router = express.Router()
const controller = require('../controller/gamesController')

//Rotas
router.get ("/catalogo", controller.getAllGames)
router.get("/catalogo/:id", controller.getIdGames)
router.post("/cadastrar", controller.addGames)
router.put("/catalogo/attGames/:id", controller.addGames)
router.delete("/delete/:id", controller.deleteGame) 
router.patch("/status/:id", controller.likedGames) 


module.exports = router