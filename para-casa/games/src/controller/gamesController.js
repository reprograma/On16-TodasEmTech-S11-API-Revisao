const games = require('../models/games.json')



const getAllGames = (req, res) => {

    try {
        res.status(200).json([
            {
                games: games,
            },
        ])
    } catch (err) {
        res.status(500).send({ message: "Erro no server" })
    }
}


const getGameById = (req, res) => {
    const idGameRequest = req.params.id
    const gameFound = games.find((game) => game.id == idGameRequest)
    if (gameFound) {
        res.status(200).send(gameFound)
    } else {
        res.status(404).send({ message: "Game não encontrado" })
    }
}


const newGame = (req, res) => {
    try {
        const { id, title, launchYear, consoles, liked } = req.body
        const postGame = { id: (games.length + 1), title, launchYear, consoles, liked }

        games.push(postGame)
        res.status(201).json([
            {
                message: 'Novo game cadastrado',
                postGame

            }
        ])

    } catch (err) {
        res.status(500).send({ message: 'Erro ao cadastrar' })
    }
}


const updateGame = (req, res) => {
    try {
        const gameId = req.params.id
        const gameToUpdate = req.body

        const gameFound = games.find((game) => game.id == gameId)
        const gameIndex = games.indexOf(gameFound)

        if (gameIndex >= 0) {

            games.splice(gameIndex, 1, gameToUpdate)

            const updatedGame = games.find((game) => game.id == gameId)

            res.status(200).send(updatedGame)
        } else {
            res.status(404).send({ message: "Game não encontrado" })
        }
    } catch (err) {
        res.status(500).send({ message: err })
    }
}


const updateLiked = (req, res) => {
    try {
        const gameId = req.params.id
        const newLike = req.body.liked
        const gameFound = games.find((game) => game.id == gameId)
        const gameIndex = games.indexOf(gameFound)

        if (gameIndex >= 0) {
            gameFound.liked = newLike
            games.splice(gameIndex, 1, gameFound)

            res.status(200).json([
                {
                    message: 'O like foi adicionado/retirado com sucesso',
                    games
                }
            ])
        } else {
            res.status(404).json([
                {
                    message: 'Nada foi modificado'
                },
            ])
        }
    } catch (err) {
        res.status(500).send({ message: err })
    }
}


const deleteGame = (req, res) => {
    try {
        const gameId = req.params.id
        const gameFound = games.find((game) => game.id == gameId)
        const gameIndex = games.indexOf(gameFound)

        if (gameIndex >= 0) {
            games.splice(gameIndex, 1)

            res.status(200).json([
                {
                    message: 'Game deletado',
                    games
                }
            ])
        } else {
            res.status(404).send({ message: 'Game não encontrado' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Erro ao deletar o game' })
    }
}






module.exports = {
    getAllGames,
    getGameById,
    newGame,
    updateGame,
    updateLiked,
    deleteGame
}