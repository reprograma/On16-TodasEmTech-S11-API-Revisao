const games = require("../models/games.json");
const fs = require("fs");

const getAllGame = (req, res) => {
  try {
    res.status(200).json([
      {
        message: "All games found!",
        Games: games,
      },
    ]);
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const getJustOneGame = (req, res) => {
  try {
    const gameReq = req.params.id;
    const gameFind = games.find((game) => game.id == gameReq);

    if (gameFind) {
      res.status(200).send([
        {
          message: "Game found!",
          Games: gameFind,
        },
      ]);
    } else {
      res.status(404).send([
        {
          message: "Game not found!",
        },
      ]);
    }
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const addGame = (req, res) => {
  try {
    const { id, title, launchYear, consoles, liked } = req.body;
    games.push({
      id: games.length + 1,
      title,
      launchYear,
      consoles,
      liked,
    });

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: "internal error server" });
        } else {
          console.log("Game add successfully!");
          const gameFound = games.find((game) => game.id == id);
          res.status(200).send(games, 1 , gameFound);
        }
      }
    );
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const updateGame = (req, res) => {
  try {
    const gameId = req.params.id;
    const gameToUpdate = req.body;

    const gameFound = games.find((game) => game.id == gameId);
    const gameIndex = games.indexOf(gameFound);
    if (gameIndex >= 0) {
      games.splice(gameIndex, 1, gameToUpdate);
      fs.writeFile(
        "./src/models/games.json",
        JSON.stringify(games),
        "utf8",
        function (err) {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            console.log("Game successfully updated!");
            const gameUpdated = games.find((game) => game.id == gameId);
            res.status(200).send(gameUpdated);
          }
        }
      );
    } else {
      res.status(404).send({ message: "Game not found to be updated!" });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const deleteGame = (req, res) => {
  const idReq = req.params.id;
  const gameIndex = games.findIndex((game) => game.id == idReq);

  games.splice(gameIndex, 1);

  if (gameIndex != -1) {
    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: "internal error server" });
        } else {
          console.log("Game deleted successfully");
        }
      }
    );
    res.status(200).json({
      message: "Game deleted successfully",
      "deleted game": idReq,
      games,
    });
  } else {
    res.status(404).json({
      message: "Game not found",
    });
  }
};

const updateLiked = (req, res) => {
  try {
    const idGameReq = req.params.id;
    const likedReq = req.body.liked;
    const likedFound = games.find((game) => game.id == idGameReq);

    const likedIndex = games.indexOf(likedFound);
    if (likedIndex >= 0) {
      likedFound.liked = likedReq;
      games.splice(likedIndex, 1, likedFound);
      fs.writeFile(
        "./src/models/games.json",
        JSON.stringify(games),
        "utf8",
        function (err) {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            console.log("Your game has been changed!");

            const likedUpdated = games.find((game) => game.id == idGameReq);

            res.status(200).send(likedUpdated);
          }
        }
      );
    } else {
      res
        .status(404)
        .send({ message: "We couldn't find this game, register it!" });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

module.exports = {
  getAllGame,
  getJustOneGame,
  addGame,
  updateGame,
  deleteGame,
  updateLiked,
};
