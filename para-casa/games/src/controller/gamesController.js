const games = require ("../models/games.json")



const getAllGames = (require, response) => {
    try {
      response.status(200).json([
        {
          "listGames": games,
        }])
    } catch (err) {
      response.status(500).send({message: 'Erro no server'})
    }
  }

//----------------------------------------------------------

const getGameSearch = (request, response) => {
  const idRequest = request.params.id
  const idFilter = games.filter(game => game.id == idRequest)
  if (idFilter.length > 0) {
      return response.status(200).send(idFilter)
  } else {
      response.status(404).send([{
          "message": "Game não encontrado", games
      }])
  }
  response.status(200).send(idFilter)
}

//----------------------------------------------------

const postNewGame = (request, response) => {
  const { id, title, launchYear, consoles, liked } = request.body
  games.push({ id: (games.length + 1), title, launchYear, consoles, liked })

  fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
      if (err) {
          response.status(500).send({ message: err })

      } else {
          console.log("Game criado!")
          const gameFound = games.find(game => game.id == id)
          response.status(201).send(gameFound)
      }
  })

}












  module.exports = {
    getAllGames,
    getGameSearch,
    postNewGame

  }