const controller = require("../controller/seriesController");

const express = require("express");

const router = express.Router();

//get
router.get("/series", controller.getAllSeries);//feito
router.get("/series/genre", controller.getGenre);//feito
router.get("/series/:id", controller.getById);//feito

//post
router.post("/series", controller.addNewSerie);//feito

//delete
router.delete("/series/:id", controller.deleteSerie);//feito

//patch
router.patch("/series/:id/liked", controller.serieUpdated);//feito

module.exports = router;
