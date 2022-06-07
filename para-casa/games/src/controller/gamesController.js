const { response } = require('../app')
const fs = require('fs')


const games = require('../models/games.json')


const getAll = (request, response) => {
    try {
        response.status(200).json([{
            "Games": games
        }])
    } catch(e){
        response.status(500).send({
            message: "Erro no server"
        })
    }
}

const getOne = (req,res) => {
    let idGameRequest = req.params.id
    let findGame = games.find(game => game.id == idGameRequest)

    if (findGame){
        response.status(200).json([{
            "Game": findGame
        }])
    } else {
        response.status(500).send({
            message: "Erro no server"
        })
    }

}


const postGames = (req, res) => {
    const { title, launchYear, consoles, liked } = req.body
    games.push({ id: games.length + 1, title, launchYear, consoles, liked })
  
    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) { 
      if (err) {
          res.status(500).send({ message: err })
      } else {
          console.log("Arquivo atualizado com sucesso!")
          const gameFound = games.find(game => game.id == id)    
          res.status(200).send(gameFound)
      }
  })
  }
  
  const putGames = (req, res) => {
    const idGameRequest = req.params.id
    const { title, launchYear, consoles, liked } = req.body
    const gameFound = games.find((game) => game.id == idGameRequest)
    const gameIndex = games.indexOf(gameFound)
  
    if(gameIndex>0){
        games[gameIndex] = {
            id: gameIndex + 1,
            "title": title,
            "launchYear": launchYear, 
            "consoles": consoles,
            "liked": liked
        }
    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
      if (err) {
          res.status(500).send({ message: err })
      } else {
          console.log("Seu arquivo foi alterado");
          const gameUpdated = games.find((game) => game.id == idGameRequest)
          res.status(200).send(gameUpdated)
      } 
  })
  } else {
      res.status(404).send({message: "Não encontramos, tente novamente"})
  }
  }
  


const updateFav = (req,res) => {

  let idGameRequest = req.params.id
  let likedRequest = req.body.liked

  const gameFound = games.find((game) => game.id == idGameRequest)
  const gameIndex = games.indexOf(gameFound)

  if(gameIndex>0){
      gameFound.liked = likedRequest
      games.splice(gameIndex,1,gameFound) 
  fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) { // gravando novo game no array de games
    if (err) {
        res.status(500).send({ message: err })
    } else {
        console.log("Seu arquivo foi alterado");
        const gameUpdated = games.find(game => game.id == idGameRequest)
        res.status(200).send(gameUpdated)
    } 
})
} else {
    res.status(404).send({message: "Não encontramos, tente novamente"})
}
}

const deleteGames = (req, res) => {
    const idRequest = req.params.id
    let findId = games.findIndex((find) => find.id == idRequest)

    games.splice(findId,1)

    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) { // gravando novo game no array de games
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Música deletada");
            res.status(200).send(games)
        } 
    })
}




module.exports = {
    getAll,
    getOne,
    postGames,
    putGames,
    updateFav,
    deleteGames,
}