const { response } = require('express')
const games = require('../models/games.json')

const getAllGames = (req, res) => {

    try {
        res.status(200).json([
            {
                'Games': games
            }
        ])
    } catch(err) {
        res.status(500).send({ message: 'Erro no server.'})
    }
}

module.exports = {
    getAllGames
}