const { response } = require('../app')
const games = require('../models/games.json')

const getAllGames = (request, response) => {
    try{
        response.status(200).json([{
            "games": games
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server"})
    }
}


const getGamesid = (request, response) => {
    {
        const idRequest = request.params.id
          
        let gameEncontrado = games.find(games => games.id == idRequest)
        response.status(200).send(gameEncontrado)
   }
}


const addGames = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let consolesRequest = request.body.consoles
        let likedRequest = request.body.liked

        let newGame = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consolesRequest,
            liked: likedRequest
        }
        games.push(newGame)
        response.status(201).json([{
            "message": "Novo jogo cadastrado com sucesso",
            newGame
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            message: "Erro interno ao cadastrar"
        }])
    }
}


const updateGames = (request, response) => {
    try{
        const idRequest = request.params.id
        const gamesRequest = request.body

        let indexEncontrado = games.findIndex((game) => game.id == idRequest)

        games.splice(indexEncontrado, 1, gamesRequest)

        response.status(200).json([{
            "message": "Game atualizado gataaaaa",
            games
        }])
    } catch(err) {
        console.log(err)
        response.status(500).send([{
            "message": err.message,
        }])
    }
}


const deleteGames = (request, response) => {
    try{
        const idRequest = request.params.id
        const indexGames = games.findIndex(games => games.id == idRequest)

        games.splice(indexGames, 1)

        response.status(200).json([{
            "message": "Game deletado com sucesso",
            "deletado": idRequest,
            games
        }])
    } catch (err) {
        console.log(err)
        response.status(404).send([{
            "message": err.message
        }])
    }

}


const likedGames = (request, response) => {
    const idRequest = request.params.id
    const likedRequest = request.body.liked
    likedFilter = games.find((games) => games.id == idRequest)
console.log(likedFilter)
    if (likedFilter) {
        likedFilter.liked = likedRequest
        response.status(200).json([{
            message: "Atualizado e aprovado com sucesso",
        }])
    } else {
        response.status(404).json([{
            message: "Não foi atualizado"
        }])
    }
}








module.exports = {
    getAllGames,
    getGamesid,
    addGames,
    updateGames,
    deleteGames,
    likedGames,
}