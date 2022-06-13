const games = require("../models/games.json")

const getAllGames = (request, response) => {
    try{
        response.status(200).json([
            {
                "mensagem": games
            }
        ])} catch(err){
            response.status(500).json([
                {
                    "mensagem": "problms no servidor, cuida em consertar"
                }
            ])
        }
}

const getOneGame = (request, response) => {

    const idRequest = request.params.idRequest
    const gameFound = games.find(game => game.id == idRequest)

    if(gameFound) {
        response.status(200).send([
            {
                "mensagem": "Joguinho encontrado!",
                gameFound
            }
        ])
    } else {
        response.status(404).send([
            {
                "mensagem": "Vixe, vai ter que jogar uno!"
            }
        ])
        } 
    }

    const postGame = (request, response) => {
        try{
            const {id, title, launchYear, consoles, liked} = request.body
                
            let newGame = {
                id: (games.length + 1),
                title,
                launchYear,
                consoles,
                liked
            }

            games.push(newGame)

            response.status(201).json({
                "mensagem": "New game posted",
                newGame
            })
        } catch (err){
            response.status(500).send({
                "mensagem": "Not founded"
            })
        }
    }

const atualizarGame = (request, response) => {
    try{
        const idRequest = request.params.id
        let upResquest = request.body

        let gameFound = games.findIndex(game => game.id == idRequest)
        games.splice(gameFound, 1, upResquest)

        response.status(201).json({
            message: "Atualizado!",
            games
        })
    } catch (err){
        response.status(500).send({
            message: "Não rolou, vai consertar!"
        })
    }
}

const deleteGame = (request, response) => {
    try{
        const idRequest = request.params.id
        const indexGame = games.findIndex(game => game.id == idRequest)

        games.splice(indexGame, 1)

        response.status(200).send({
            messagem: "Bye-bye gaminho",
            games
        })
    } catch (err){
        response.status(400).send({
            message: "No bye-bye"
        })
    }
}

const likeGame = (request, response) => {
    const idRequest = request.params.id
    const likeRequest = request.body.like

    let gameIndex = games.find(game => game.id == idRequest)

    if (gameIndex){
        gameIndex.curti = likeRequest

        response.status(200).json({
            message: "Desgostei",
            games
        })
    } else {
        response.status(404).json({
            message: "Sem joguinho!"
        })
    }
}


module.exports = {
    getAllGames,
    getOneGame,
    postGame,
    atualizarGame,
    deleteGame,
    likeGame
}