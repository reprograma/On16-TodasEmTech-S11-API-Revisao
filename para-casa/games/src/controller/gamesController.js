const games = require("../models/games.json")

const getAllGames = (request, response) => {
    response.status(200).json([{
        "games": games
    }])
}

const getGameById = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = games.find(game => game.id == idRequest)
    
    response.status(200).send(gameEncontrado)
}

const addNewGame = (request, response) => {
    const titleRequest = request.body.title
    const launchYearRequest = request.body.launchYear
    const consolesRequest = request.body.consoles
    const likedRequest = request.body.liked
    const newId = games.length + 1

    const newGame = {
        id: newId,
        title: titleRequest,
        launchYear: launchYearRequest,
        consoles: consolesRequest,
        liked: likedRequest
    }

    games.push(newGame)
    response.status(200).json([{
        "mensagem": "novo jogo adicionado!",
        newGame
    }])
}

const updateGame = (request, response) => {
    const idRequest = request.params.id
    const gameRequest = request.body

    const gameEncontrado = games.findIndex(game => game.id == idRequest)
    games.splice(gameEncontrado, 1, gameRequest)

    response.status(200).json([{
        "mensagem": "jogo atualizado!",
        games
    }])
}

const deleteGame = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = games.findIndex(game => game.id == idRequest)
    games.splice(gameEncontrado, 1)

    response.status(200).json([{
        "mensagem": "jogo excluído!",
        games
    }])
}

const likeGame = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = games.find(game => game.id == idRequest)

    if(gameEncontrado.liked === true){
        gameEncontrado.liked = false
    } else {
        gameEncontrado.liked = true
    }

    response.status(200).json([{
        "mensagem": "jogo curtido/descurtido!",
        gameEncontrado
    }])
}

module.exports = {
    likeGame,
    getAllGames,
    getGameById,
    addNewGame,
    updateGame,
    deleteGame   
}