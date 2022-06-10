const controller = require("../controller/seriesController");

const express = require("express");

const router = express.Router();

//get
router.get("/series", controller.getAllSeries);
router.get("/series/genre", controller.getGenre);
router.get("/series/:id", controller.getById);
//post
router.post("/series", controller.addNewSerie);
router.post("/:id/season/:season/episode", controller.addEpisode);
router.post("/:id/season/:season", controller.addSeason);
//delete
router.delete("/series/:id", controller.deleteSerie);
router.delete("/series/:id/season/:seasonId", controller.deleteSeason);
router.delete(
  "/series/:id/season/:seasonId/episode/:episodeId",
  controller.deleteEpisode
);
//patch
router.patch("/series/:id/liked", controller.serieUpdated);
router.patch(
  "/series/:id/season/:seasonId/episode/:episodeId/watched",
  controller.episodeUpdated
);

module.exports = router;
