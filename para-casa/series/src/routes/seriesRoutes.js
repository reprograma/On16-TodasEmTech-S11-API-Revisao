const controller = require("../controller/seriesController")
const express = require("express")
const router = express.Router()

router.get("/all", controller.seriesAll)
router.get("/genre", controller.seriesGenre)
// router.get("/:id",controller.seriesById)
// router.post("/add", controller.serieAdd)
// router.patch("/liked/:id", controller.serieLiked)
// router.delete("/:id", controller.serieDelete)

module.exports = router