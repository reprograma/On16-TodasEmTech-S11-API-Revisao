const express = require("express");

const router = express.Router();

const controller = require("../controller/seriesController");

router.get("/series", controller.getAllSeries);
router.get("/search/genre", controller.getSeriesByGenre);
router.get("/series/:id", controller.getJustOneSerie);

router.post("/series/add", controller.addSerie);

router.delete("/delete/:id", controller.deleteSerie);

router.patch("/liked/:id", controller.updateLiked);

//Desafio
router.post("/:id/season/:seasonId/episode", controller.addEpisode);


module.exports = router;