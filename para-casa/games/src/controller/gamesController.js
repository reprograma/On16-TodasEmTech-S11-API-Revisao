const games = require("../models/games.json");

const fs = require("fs");

// TO RETURN ALL GAMES

const getGames = (req, res) => {
  try {
    res.status(200).send(games);
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

// TO RETURN A GAME BY ID

const getGameById = (req, res) => {
  try {
    const idRequest = req.params.id;

    const gameFound = games.find((game) => game.id === parseInt(idRequest));

    if (gameFound) {
      res.status(200).send(gameFound)
    } else {
      res.status(404).send({ message: "Game not found!" });
    }
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

// TO ADD A NEW GAME

const addGame = (req, res) => {
  const { id, title, launchYear, consoles, liked } = req.body;
  games.push({ id: games.length + 1, title, launchYear, consoles, liked });

  fs.writeFile(
    "./src/models/games.json",
    JSON.stringify(games),
    "utf-8",
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        console.log("Updated file!");
        const gameFound = games.find((game) => game.id === id);
        res.status(200).send(gameFound);
      }
    }
  );
  res.status(201).send({ message: "Game added!" });
};

// TO UPDATE A GAME

const updateGame = (req, res) => {
  const idRequest = req.params.id;
  const gameRequest = req.body;

  const gameIndex = games.findIndex((game) => game.id === parseInt(idRequest));

  if (gameIndex > 0) {
    games.splice(gameIndex, 1, gameRequest);

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Updated file!");
          const gameUpdated = games.find((game) => game.id === idRequest);
          res.status(200).send(gameUpdated);
        }
      }
    );
  } else {
    res.status(404).send({ message: "Game id not found!" });
  }
  res.status(200).send({ message: "Game updated!" });
};

// TO DELETE A GAME BY ID

const deleteGame = (req, res) => {
  const idRequest = req.params.id;

  const foundIndex = games.findIndex((game) => game.id === parseInt(idRequest));

  if (foundIndex > 0) {
    games.splice(foundIndex, 1);

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Updated file!");
        }
      }
    );
  } else {
    res.status(404).send({ message: "Game id not found!" });
  }
  res.status(200).send({ message: "Game deleted!" });
};

// TO UPDATE LIKE/UNLIKE

const likeGames = (req, res) => {
  const idRequest = req.params.id;
  const like = req.body.liked;

  const foundGame = games.find((game) => game.id === parseInt(idRequest));

  const gameIndex = games.indexOf(foundGame);

  if (gameIndex > 0) {
    foundGame.liked = like;

    games.splice(gameIndex, 1, foundGame);

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Updated file!");
          const likeUpdated = games.find((game) => game.id === idRequest);
          res.status(200).send(likeUpdated);
        }
      }
    );
  } else {
    res.status(404).send({ message: "Game id not found!" });
  }
  res.status(200).send({ message: "Like/Unlike updated!" });
};

module.exports = {
  getGames,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
  likeGames,
};
