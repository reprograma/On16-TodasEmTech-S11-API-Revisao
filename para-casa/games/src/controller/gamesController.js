const games = require('../models/games.json')
const fs = require('fs')
const { generatePrimeSync } = require('crypto')

// rota GET que retorne toddos os jogos
const getAll = (request, response) => {
    try {
       response.status(200).json([{
           "Games": games
       }])
   } catch (err) {
       response.status(500).send({ message: "Erro no server" })
   }
}

// rota GET que retorne um jogo específico
const getGameByID = (request, response) => {
    const gameRequest = request.params.id;
    const gameFilter = games.filter((game) => game.id == gameRequest);
  
    if (gameFilter.length > 0) {
      response.status(200).send(gameFilter);
    } else {
      response.status(404).send([
        {
          message: "Jogo não encontrada",
        },
      ]);
    }
  };

  // rota POST que cadastra novo jogo
  const NewGame = (request, response) => {
    try {
        
    let titleRequest = request.body.title
    let launchYearRequest = request.body.launchYear
    let consoleRequest = request.body.consoles
    let likeRequest = request.body.liked

    let novoJogo = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        consoles: consoleRequest,
        liked: likeRequest
    }

    games.push(novoJogo)
    response.status(201).json([{
        message: "Novo jogo cadastrado",
        novoJogo
    }])

}catch (err){
    console.log (err)
    response.status(500).send({
        message: "erro no servidor"})
}}

// rota PUT que atualiza um jogo específico
const updateGame = (request, response) => {
    const idRequest = request.params.id;
    let gameRequest = request.body;
  
    let indexEncontrado = games.findIndex((game) => game.id == idRequest);
  
    if (games.splice(indexEncontrado, 1, gameRequest)) {
      response.status(200).json([
        {
          message: "Jogo atualizado com sucesso",
          games,
        },
      ]);
    } else {
      response.status(404).send([
        {
          message: "Não foi possível atualizar",
        },
      ]);
    }
  };

  
// rota DELETE que deleva um jogo especifico
const deleteGame = (request, response) => {

    const idRequest = request.params.id

    const indexGames = games.findIndex(game => game.id == idRequest)

    if(indexGames != -1){
        games.splice(indexGames, 1) 

        response.status(200).json([{
            "mensagem" : "O jogo foi deletado",
            "deletado" : idRequest,
            "lista atualizada": games
        }])

    }else{
        response.status(404).json([{
            message: "O jogo não foi encontrado"
        }])
    }

}

// rota PATCH que diga se curtiu ou não
const likeGame = (request, response) => {
    const idRequest = request.params.id
    const likeRequest = request.body.liked
    likeFilter = games.find((game) => game.id == idRequest)
    
    if (likeFilter) {
        likeFilter.liked = likeRequest
        response.status(200).json([{
            message: "Status atualizado", 
            games
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}




module.exports = {
    getAll,
    getGameByID,
    NewGame,
    updateGame,
    deleteGame,
    likeGame,
}