const { response } = require('express')
const express = require('express')
const games = require('../models/games.json')

const getAllGames = (req, res) => {

    try {
        res.status(200).json([
            {
                'Games': games
            }
        ])
    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }
}


const getGamesById = (req, res) => {

    try {
        let idRequest = req.params.id
        let idFilter = games.filter(game => game.id == idRequest)

        if (idFilter.length > 0) {
            res.status(200).send(idFilter)
        } else {
            res.status(404).send({ message: 'Game not found'})
        }
    } catch(err) {
        response.status(500).send({ message: 'Internal error'})
    }

}




module.exports = {
    getAllGames,
    getGamesById
}

