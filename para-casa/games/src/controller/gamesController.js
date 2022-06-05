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


// const getAllGames = (request, response) => {
// 	response.status(200).json([{
// 	"listGames": games
// }])
// }



  module.exports = {
    getAllGames

  }