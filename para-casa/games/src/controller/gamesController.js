const games = require('../models/games.json')
const fs = require ('fs')


// Retornando todos os jogos
const getAllGames = (req, res) => {
    try {
      res.status(200).json([
        {
          Games: games,
        },
      ])
    } catch (err) {
      response.status(500).send({ message: 'Erro no server' })
    }
  }


//Retornando apenas uma música
  const oneGame = (req, res) => {
      const gamesRequest = req.params.id
      const gamesFilter = games.filter ((games) => games.id == gamesRequest)
      res.status(200).send(gamesFilter)

  }

// Cadastrando um novo jogo
const newGame = (req, res) => {
    const { id, title, launchYear, consoles, liked } = req.body
    games.push({ id: games.length + 1, title, launchYear, consoles, liked})
  
    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) { // gravando novo jogo no array de jogos
      if (err) {
          res.status(500).send({ message: err })
      } else {
          console.log("Arquivo atualizado com sucesso!")
          const gameFound = games.find(game => game.id == id) // recupero o game que foi criado no array de games      
          res.status(200).send(gameFound)
      }
  })
  }
  

//Atualizando um jogo especifico
  const updateGame = (req, res) => {
    try {
      const idRequest = req.params.id
      const gamesRequest = req.body
  
      gamesFilter = games.find((game) => game.id == idRequest)
  
      if (gamesFilter) {
        gamesFilter.games = gamesRequest
  
        res.status(200).json([
          {
            mensagem: 'Seu jogo foi atualizado com sucesso!',
            games,
          },
        ])
      } else {
        res.status(404).json([
          {
            message: 'Seu jogo não foi atualizado!',
          },
        ])
      }
    } catch (err) {
      res.status(500).send({ message: 'Erro ao cadastrar' })
    }
  }


//Deletando um jogo especifico
  const deleteGame = (req, res) => {
    const idRequest = req.params.id;
    const indiceGames = games.findIndex((games) => games.id == idRequest);

    games.splice(indiceGames, 1)

    if (indiceGames > -1) {
      res.status(200).json([
        {
          message: "O jogo foi deletado",
          "jogo deletado": idRequest,
          games
        }]);
    } else {
      res.status(404).send([
        {
          message: "Jogo não deletado",
        }])
    }
  }


//Atualizando se gostou do jogo ou não
  const updateLiked = (req, res) => {
    
    let idGameRequest = req.params.id
    let likedRequest = req.body.liked
    
    const gameFound = games.find(game => game.id == idGameRequest) // encontrando o jogo
    const gameIndex = games.indexOf(gameFound) // identificando o indice do jogo no meu array
    
    if (gameIndex >= 0){
    gameFound.liked = likedRequest
//encontrou //remove //adiciona
    games.splice(gameIndex, 1, gameFound)
    
    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) { // gravando novo jogo no array de jogos
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Teu arquivo foi alterado");
            const likedUpdate = games.find(game => game.id == idGameRequest)
            res.status(200).send(likedUpdate)
        }})
    } else {
        res.status(404).send({ message: "Nao encontramos esse jogo, cadastra ai miga"})
        }
    }




  module.exports = {
    getAllGames,
    oneGame,
    newGame,
    updateGame,
    deleteGame,
    updateLiked
    
  }