const games = require('../models/games.json')



const getGames = (req, res) => {
    try {
        res.status(200).json([{ "Games": games }])
    } catch (err) {
        res.status(500).send({ message: "Erro no servidor"})
    }
}

const getIdGame = (req, res) => {
    const idRequest = req.params.id
    const idFilter = games.filter(game => game.id == idRequest)

    if(idFilter.length > 0) {res.status(200).send(idFilter)

    } else {res.status(404).send([{ message: "Id não localizado"}])}
}

const addGame = (req, res) => {
    const {id, title, launchYear, consoles, liked} = req.body
    games.push({ id: (games.length +1), title, launchYear, consoles, liked})

    if(games.length > -1) {
        const gameFound = games.find((game) => game.id == id)
        res.status(201).send([{message: "Novo jogo adicionado", gameFound, games}])

    } else { res.status(500).send([{message: "Erro no servidor"}])

    }
}

const changeGame = (req, res) => {
    const idRequest = req.params.id
    let gameRequest = req.body
    let gamesFilter = games.findIndex(game => game.id == idRequest)

    games.splice(gamesFilter, 1, gameRequest)

    if(gamesFilter > -1) {
        res.status(200).json([{ message: "Jogo atualizado", games }])
    } else { res.status(404).send({message: "A informação não pode ser modificada"})}
}

const deleteGame = (req, res) => {
    const idRequest = req.params.id
    const gameId = games.findIndex(game => game.id == idRequest)
    let idDeleted = games.filter(game => game.id == idRequest)

    games.splice(gameId, 1)

    if (gameId > 0) {
        res.status(200).json([{message: "Jogo deletado", idDeleted, games}])

    } else { res.status(404).send({message: "Não foi possível deletar o jogo"})}
}

const updateGame = (req, res) => {
    const idRequest = req.params.id
    const likedGame = req.body.liked
    likedFilter = games.find(game => game.id == idRequest)

    if(likedGame) {
        likedFilter.liked = likedGame
        res.status(200).json([{ message: "A tag liked foi alterada", games}])

    } else { res.status(404).json([{message: "A tag liked não foi alterada"}])}

}



module.exports = {
    getGames,
    getIdGame,
    addGame,
    changeGame,
    deleteGame,
    updateGame
}