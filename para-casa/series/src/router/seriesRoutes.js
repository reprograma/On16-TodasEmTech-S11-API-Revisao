const express = require("express")
const router = express.Router()
const controller = require("../controller/seriesController")



// get - recuperação
router.get("/", controller.getAllSeries)
router.get("/genre", controller.getSeriesByGenre)
router.get("/:id", controller.getSeries)


// post - criacao
router.post("/", controller.createSerie)

// delete - remoção
router.delete("/:id", controller.deleteSerie)

// patch - alteração
router.patch("/:id/liked", controller.updateLiked)

module.exports = router;