const games = require('../models/games.json')

const getAllGames = (req, res) => {

  try{
      res.status(200).json([
      {
        "Games": games
      }
    ])} catch (err) {
      res.status(500).send({ message: "Erro no servidor"})
    }

  }
const getIdGames = (req, res) => {

  const idRequest = req.params.id
  const idFilter = games.filter(game => game.id == idRequest)

  if (idFilter.length > 0) {res.status(200).send(idFilter)

  } else {res.status(404).send([
    {
    message: "Id não localizado"
    }
  ])}
}

const addGames = (req, res) => {
  const {id, title, lauchYear, consoles, liked} = req.body
  games.push({id: (games.length +1), title, launchYear, consoles, liked})

  if (games.length > -1) {
    const gameFound = games.find((game) => game.id == id)
    res.status(200).send([
      {
        message: "Erro no servidor"
      }
  ])}
}

const changeGame = (req, res) => {
  const idRequest = req.params.id
  let gameRequest = req.body
  let gamesFilter = games.findIndex(game => game.id == idRequest)

  games.splice(gamesFilter, 1, gameRequest)

  if(gamesFilter > -1) {
    res.status(200).json([
      {
        message: "Jogo atualizado", games
      }
    ])} else { res.status(404).send(
      {
        message: "Não é possível realizar a modificação"
      }
    )}
  }
const deleteGame = (req, res) => {
  const idRequest = req.params.id
  const gameId = games.findIndex(game => game.id == idRequest)
  let idDeleted = games.filter(game => game.id == idRequest)

  games.splice(gameId, 1)

  if( gameId > 0 ) {
    res.status(200).json([
      {
        message: "jogo deletado", idDeleted, games
      }
    ])
  } else { res.status(404).send(
    {
      message: "não foi possível deletar o jogo"
    }
    )}
}
const updateGame = (req, res) => {
  const idRequest = req.params.id
  const likedGame = req.body.liked
  likedFilter = games.find(game => game.id == idRequest)

  if(likedGame) {
    likedFilter.liked = likedGame
    res.status(200).json([
      {
        message: "a tag foi alterada", games
      }
    ])} else { res.status(404).json([
      {
        message: "a tag não foi alterada"
      }
    ])}
}


module.exports = {

  getAllGames,
  getIdGames,
  addGames,
  changeGame,
  deleteGame,
  updateGame
}