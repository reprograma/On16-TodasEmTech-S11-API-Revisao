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

const buscarGames = (request, response) => {
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

const cadastraGames = (request, response) => {
    try{
        const {id, title, launchYear, consoles, liked} = request.body

        let newGame = {
            id: (gamesJson.length + 1), title, launchYear, consoles, liked
        }

    gamesJson.push(newGame)

        response.status(201).json({
            message: "Jogo cadastrado",
            newGame
        })
    } catch (err) {
        response.status(500).send({
            message: "Jogo não cadastrado"
        })
    }
}

const atualizaGames = (request, response) => {
    try{
        const idRequest = request.params.id
        let updateRequest = request.body

        let gameFound = gamesJson.findIndex(game => game.id == idRequest)
        gamesJson.splice(gameFound, 1, updateRequest)

        response.status(201).json({
            message: "Jogo atualizado",
            gamesJson
        })
    } catch (err) {
        response.status(500).send({
            message: "Jogo não atualizado"
        })
    }
}

const deletaGames = (request, response) => {
    try{
        const idRequest = request.params.id
        const gameIndex = gamesJson.findIndex(game => game.id == idRequest)

        gamesJson.splice(gameIndex, 1)

        response.status(200).send({
            message: "Jogo selecionado foi deletado",
            gamesJson
        })
    } catch (err){
        response.status(400).send({
            message: "Jogo não deletado"
        })
    }
}

const curtiGames = (request, response) => {
    const idRequest = request.params.id
    const curtiRequest = request.body.curti

    let gameIndex = gamesJson.find(game => game.id == idRequest)

    if (gameIndex) {
        gameIndex.curti = curtiRequest

        response.status(200).json({
            message: "(Des)favoritado com sucessso.",
            gamesJson
        })
    } else {
        response.status(404).json({
            message: "Jogo não encontrado"
        })
    }
}

module.exports ={
    gamesLista,
    buscarGames,
    cadastraGames,
    atualizaGames,
    deletaGames,
    curtiGames
}