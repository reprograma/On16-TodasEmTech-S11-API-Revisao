const games = require("../models/games.json")

const fs = require("fs");

const getAllGames = (req, res) => {
    try {
        res.status(200).json({
          GameStore: games,
        });
      } catch {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    };

const getById = (req, res) => {
    const gamesReq = req.params.id
    const gamesFilter = games.filter((games) => games.id == gamesReq);
    if (gamesFilter.length > 0) {
      res.status(200).send(gamesFilter);
    } else {
      res.status(404).send({
        message: "Not Found",
      });
    }
}










module.exports = {
    getAllGames,

}