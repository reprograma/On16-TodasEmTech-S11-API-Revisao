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
module.exports = {
    getAll,
    getbyId

}