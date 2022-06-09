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

const addNewGame = (req, res) => {
    const {id, title, launchYear, consoles, liked} = req.body;
    games.push
    ({
    id: games.length +1,
    title,
    launchYear,
    consoles, 
    liked,})
    fs.writeFile(
        "./src/models/pets.json",
        JSON.stringify(games),
        utf8,
        function(err) {
            if (err) {
                res.status(500).send({ message: err });
              } else {
                console.log("File created successfully");
                const gameFound = games.find((game) => game.id == id);
                res.status(201).send(gameFound);
              }
        }
    )
    res.status(200).send({ message: "Game added successfully"})
}










module.exports = {
    getAllGames,
    getById,
    addNewGame,


}