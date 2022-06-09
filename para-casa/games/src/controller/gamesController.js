// importando as infos do games.json e salvando na const games
const games = require('../models/games.json');

// importando o pacote fs para poder realizar alterações direto em games.json
const fs = require('fs');
const {
    stringify
} = require('querystring');


// retorna todos os jogos da lista Json
// localhost:1414/play/

const getGames = (req, res) => {
    try {
        res.status(200).json([{
            "Lista de jogos (◠‿◠)": games
        }])
    } catch (err) {
        res.status(500).send({
            "Game over": "Erro no server ( ◡́.◡̀)"
        })
    }
}

// retorna apenas um jogo da lista buscando pelo ID
// localhost:1414/play/games/1

const getGamesId = (req, res) => {
    let idRequest = req.params.id
    let idFilter = games.find((game) => game.id == idRequest)

    if (idFilter) {
        res.status(200).json([{
            "Jogo selecionado": idFilter
        }])
    } else {
        res.status(404).send({
            "Ops (ㆆ_ㆆ)": "Tente outra vez, não encontramos esse jogo"
        })
    }
}


// cadastrar novo jogo
// localhost:1414/play/games

const addGames = (req, res) => {
    const {
        title,
        launchYear,
        consoles,
        liked
    } = req.body

    games.push({
        id: games.length + 1,
        title,
        launchYear,
        consoles,
        liked
    })

    fs.writeFile('./src/models/games.json', JSON.stringify(games), 'utf8',
        function (err) {
            if (err) {
                res.status(500).send({
                    "Game over": "Erro no server ( ◡́.◡̀)"
                })
            } else {
                console.log('lista de jogos atualizada')

                const gamesFound = games.find(game => game.id == id)
                res.status(200).send(gamesFound)
            }
        })

    res.status(200).send({
        "＼(^o^)／": "Eba! Temos um novo jogo na lista"
    })
}


// deletar um jogo especifico pelo ID
// localhost:1414/play/games/5

const deleteGames = (req, res) => {
    const idRequest = req.params.id;
    const findIndex = games.findIndex((game) => game.id == idRequest)
    games.splice(findIndex, 1)

    fs.writeFile('./src/models/games.json', JSON.stringify(games), 'utf8', function (err) {
        if (err) {
            res.status(500).send({
                "Game over": "Erro no server ( ◡́.◡̀)"
            })
        } else {
            console.log('Jogo deletado da lista')
            res.status(200).send({
                "Jogo deletado! Veja a lista atualizada": games
            })
        }
    })
}


// atualizar avaliação do jogo, campo "liked" da lista Json
// localhost:1414/play/games/2/liked

const updateGames = (req, res) => {
    const idRequest = req.params.id
    const likedRequest = req.body.liked

    const gameFound = games.find((game) => game.id == idRequest)
    const gameIndex = games.indexOf(gameFound)

    if (gameIndex >= 0) {
        gameFound.liked = likedRequest

        games.splice(gameIndex, 1, gameFound)

        fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
            if (err) {
                res.status(500).send({
                    "Game over": "Erro no server ( ◡́.◡̀)"
                })
            } else {
                console.log("Jogo da lista alterado");
                const gameUpdated = games.find(game => game.id == idRequest)
                res.status(200).send(gameUpdated)
            }
        })

    } else {
        res.status(404).send({
            "(ㆆ_ㆆ)": "Ops! Não encontramos esse jogo"
        })
    }
}



module.exports = {
    getGames,
    getGamesId,
    addGames,
    deleteGames,
    updateGames
}