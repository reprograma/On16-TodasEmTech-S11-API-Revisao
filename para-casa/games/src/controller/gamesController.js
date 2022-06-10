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













  module.exports = {
    getAllGames,
    getGameSearch,

  }