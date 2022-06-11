const gamesJson = require('../models/games.json')

const getAll = (request, response) => {
    response.status(200).json([
        {
        "Games": gamesJson
        }
    ])
}

module.exports = {
    getAll
}