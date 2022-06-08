const gamesJson = require("../models/games.json")

const gamesLista = (request, response) => {
    try{
        response.status(200).json({
            "games": gamesJson
        })
    } catch (err) {
        response.status(500).send({
            message: 'Erro no servidor'
        })
    }
}

const buscaJogo = (request, response) => {
    const idRequest = request.params.id
    const gameFound = gamesJson.find(game => game.id == idRequest)

    if(gameFound) {
        response.status(200).send(gameFound)
    } else {
        response.status(404).send({
            message: "Jogo não encontrado"
        })
    }
}

module.exports ={
    gamesLista,
    buscaJogo
}