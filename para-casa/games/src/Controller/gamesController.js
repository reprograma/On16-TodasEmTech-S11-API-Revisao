const gameJson = require("../models/games.json");

const fs = require("fs");

// GET - RETORNA TODOS OS GAMES
const getAllGames = (request, response) => {
  try {
    response.status(200).json([
      {
        Jogo: gameJson,
      },
    ]);
  } catch (err) {
    response.status(500).send({ message: "Deu ruim o Servidor está com Erro" });
  }
}


// GET - RETORNA UM GAME ESPECIFICO POR ID
const getIdGame = (request, response) => {
    let idRequest = request.params.id
    let GameFound = gameJson.find(jogo => jogo.id == idRequest)
        response.status(200).send(GameFound);
   
}
// POST - CADASTRA NOVO GAMES
const postGame = (request, response) => {
  const { id, title, launchYear, consoles, liked } = request.body;
  gameJson.push({
    id: gameJson.length + 1,
    title,
    launchYear,
    consoles,
    liked,
  });

  fs.writeFile(
    "./src/models/games.json",
    JSON.stringify(gameJson),
    "utf8",
    function (err) {
      if (err) {
        response.status(500).send({ message: err });
      } else {
        console.log("Arquivo atualizado com sucesso!");
        const petFilter = gameJson.find(
          (jogo) => (jogo.id = gameJson.id == id)
        );
        response.status(200).send(petFilter);
      }
    }
  );
  response.status(200).send({ message: "Game criado com sucesso" });
};
// PUT ATUALIZA 01 GAME especificados
const putGameUpdate = (request, response) => {
  const idRequest = request.params.id;
  let gameRequest = request.body;

  let gameFilter = gameJson.findIndex((jogo) => {
    return jogo.id == idRequest;
  });
  if (putGameUpdate) {
    gameJson.splice(gameFilter, 1, gameRequest);
    response.status(200).json([
      {
        putGameUpdate,
        Aviso: "Alterado com Sucesso",
      },
    ]);
  } else {
    response.status(404).send({ message: "Jogo não encontrado" });
  }
};

// PATCH  ATUALIZA SE GOSTOU OU NÃO DO GAMES
const updateName = (request, response) => {
  let idGameRequest = request.params.id;
  let likedRequest = request.body.liked;
  console.log(likedRequest);
  const gameFilter = gameJson.find((jogo) => jogo.id == idGameRequest);
  const gameIndex = gameJson.indexOf(gameFilter);

  if (gameIndex >= 0) {
    gameFilter.liked = likedRequest;

    gameJson.splice(gameIndex, 1, gameFilter);

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(gameJson),
      "utf8",
      function (err) {
        // gravando novo pet no array de pets
        if (err) {
          response.status(500).send({ message: err });
        } else {
          console.log(" Liked foi alterado, com Sucesso");
          const likedUpdated = gameJson.find(
            (jogo) => (jogo.id = game.id == idGameRequest)
          );
          response.status(200).send(likedUpdated);
        }
      }
    );
  } else {
    response
      .status(404)
      .send({ message: "Nao encontramos esse Game, aguardando o cadastro" });
  }
};

// DELETE - DELETA 01 GAME ESPECIFICO

const deleteGame = (request, response) => {
  const idRequest = request.params.id;
  const indiceGame = gameJson.findIndex(jogo => jogo.id == idRequest);

  gameJson.splice(indiceGame, 1);

  response.status(200).json([
    {
      message: "Joguinho deletado com sucesso",
      deletada: idRequest,
      gameJson,
    },
  ]);
};

module.exports = {
  getAllGames,
  getIdGame,
  postGame,
  updateName,
  putGameUpdate,
  deleteGame,
};
