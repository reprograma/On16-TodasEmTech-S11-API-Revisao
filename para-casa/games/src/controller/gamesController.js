const gamesJS = require('../models/games.json')
//const fs = require('fs')


const getAllGames = (request, response) => {
    try {
        response.status(200).json([{
            "Games": gamesJS
        }])
    } catch (error) {
        response.status(500).send({'Message':'Erro no Servidor'})
    }
}

module.exports = {
    getAllGames
}