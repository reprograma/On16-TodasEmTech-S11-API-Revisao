const express = require("express")
const  router = express.Router()
const controller = require("../controller/gamesController")

router.get("/lista", controller.gamesLista)

module.exports = router