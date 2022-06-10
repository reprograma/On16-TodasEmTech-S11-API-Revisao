const gamesJson = require('../models/games.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        'games': gamesJson
    }])
}
const getbyId = (request, response) => {
    const idRequest = request.params.id
    const findId = gamesJson.filter(games => games.id == idRequest)

    if (findId.length > 0) {
        response.status(200).send(findId)
    } else {
        response.status(500).send([{
            message: 'não encontrado'
        }])
    }
}
const add = (request, response) => {
    try {
        const { id, title, launchYear, consoles, liked } = request.body

        let novoJogo = {
            id: (gamesJson.length + 1), title, launchYear, consoles, liked
        }

        gamesJson.push(novoJogo)

        response.status(201).json({
            message: "Jogo cadastrado",
            novoJogo
        })
    } catch (err) {
        response.status(500).send({
            message: "Erro ao cadastrar"
        })
    }
}
const update = (request, response) => {
    try {
        const idRequest = request.params.id
        let favoriteRequest = request.body
        let findgame = gamesJson.findIndex(game => game.id == idRequest)
        gamesJson.splice(findgame, 1, favoriteRequest)

        response.status(201).json({
            message: "atualizado gatinha",
            gamesJson
        })
    } catch (err) {
        response.status(500).send({
            message: "Erro ao atualizar"
        })
    }
}

const deleteGame = (request, response) => {
    const idRequest = request.params.id
    const indiceGame = gamesJson.findIndex(game => game.id == idRequest)

    gamesJson.splice(indiceGame, 1)

    if (indiceGame) {
        response.status(200).json([
            {
                message: 'game deletado', gamesJson
            }
        ])
    } else {
        response.status(404).send([
            {
                message: 'erro ao deletar'
            }
        ])
    }

}
const updateLike = (request, response) => {
    const idRequest = request.params.id
    const likeRequest = request.body.liked

    findflike = gamesJson.find((game) => game.id == idRequest)
    if (findflike) {
        findflike.liked = likeRequest
        response.status(200).json([{
            message: 'like atualizado', gamesJson
        }])

    } else {
        response.status(404).send([{
            message: 'erro ao atualizar'
        }])
    }
}

module.exports = {
    getAll,
    getbyId,
    add,
    update,
    deleteGame,
    updateLike

}