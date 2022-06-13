const gamesJS = require('../models/games.json')
const fs = require('fs')
const { response } = require('../app')
const { request } = require('http')

//Retorna todos os jogos. Verbo GET do HTTP
const getAllGames = (request, response) => {
    try {
        response.status(200).json([{
            "Games": gamesJS
        }])
    } catch (error) {
        response.status(500).send({ 'Message': 'Erro no Servidor' })
    }
}

//Retorna jogo específico a partir do ID. Verbo GET do HTTP
const getIdGames = (request, response) => {
    try {
        const idReq = request.params.id
        const gameEncontrado = gamesJS.filter(game => game.id == idReq)
        response.status(200).send(gameEncontrado)
    } catch (error) {
        response.status(404).send({
            'message': 'Game não encontado.'
        })
    }
}


//Cadastra novo jogo. Verbo POST do HTTP
const addGames = (request, response) => {
    const { id, title, launchYear, consoles, liked } = request.body //sintetiza formato que vai passar para o body
    gamesJS.push({ id: gamesJS.length + 1, title, launchYear, consoles, liked }) //sobe as novas informações passadas pelos usuário, gerando de forma automática o ID

    fs.writeFile('./src/models/games.json', JSON.stringify(gamesJS), 'utf8', function (err) {
        if (err) {
            response.status(500).send({ message: err })
        } else {
            console.log('Arquivo Atualizado.')
            const gameEncontrado = gamesJS.find(game => game.id == id)
            response.status(200).send(gameEncontrado)
        }
    })
    //response.status(200).send({'message': 'Sucesso'})
    //'utf8 é o formato de caracteres para o html reconhecer'
}

//Atualiza um jogo específico a partir do ID. Verbo PUT do HTTP
const attGames = (request, response) => {
    try {
        const idReq = request.params.id
        const gameAtt = request.body

        let gameEsp = gamesJS.find(game => game.id == idReq)
        const gameInd = gamesJS.indexOf(gameEsp)

        if (gameInd >= 0) {
            gamesJS.splice(gameInd, 1, gameAtt)

            fs.writeFile('./src/models/games.json', JSON.stringify(gamesJS), 'utf8', function (err) {
                if (err) {
                    response.status(500).send({ message: err })
                } else {
                    console.log('Arquivo atualizado com sucesso.')
                    const gameAtualizado = gamesJS.find(game => game.id == idReq)
                    response.status(200).send(gameAtualizado)
                }
            })
        } else {
            response.status(404).send({ message: 'Game não encontrado.' })
        }
    } catch (error) {
        response.status(500).send([{
            'message': 'Erro interno no servidor'
        }])
    }
}

//Deleta um jogo específico a partir do ID. Verbo DELETE do HTTP
const deleteGame = (request, response) => {
    try {
        const idGame = request.params.id
        const gameEnc = gamesJS.find(game => game.id == idGame)
        const indGame = gamesJS.indexOf(gameEnc)

        if (indGame >= 0) {
            gamesJS.splice(indGame, 1)
            fs.writeFile('./src/models/games.json', JSON.stringify(gamesJS), 'utf8', function (err) {
                if (err) {
                    response.status(500).send({ message: err })
                } else {
                    console.log('Game deletado com sucesso')
                    response.sendStatus(204)
                }
            })
        } else {
            response.status(404).send({ message: 'Game não encontrado' })
        }
    } catch (error) {
        console.log(err)
        response.status(500).send({ message: 'Erro interno' })
    }
}

//Atualiza que o usuário gostou ou não do jogo. Verbo PATCH do HTTP
const likedGames = (request, response) => {
    try {
        const idGame = request.params.id
        const likeGame = request.body.liked
        const gameEncont = gamesJS.find(game => game.id == idGame)
        const indGame = gamesJS.indexOf(gameEncont)

        if (indGame >= 0) {
            gameEncont.likeGame = likeGame
            gamesJS.splice(indGame, 1, gameEncont)

            fs.writeFile('./src/models/games.json', JSON.stringify(gamesJS), 'utf8', function (err) {
                if (err) {
                    response.status(500).send({ message: err })
                } else {
                    console.log('Atualização feita com sucesso!')
                    const gameAtualizado = gamesJS.find(game => game.id == idGame)
                    response.status(200).send(gameAtualizado)
                }
            })
        } else {
            response.status(404).send({ message: 'Game não encontrado' })
        }

    } catch (error) {
        response.status(500).send({message: err})
    }
}


//Exporta as funções aqui definidas
module.exports = {
    getAllGames,
    addGames,
    getIdGames,
    attGames,
    deleteGame,
    likedGames
}