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

const getById = (req, res) =










module.exports = {
    getAllGames,

}