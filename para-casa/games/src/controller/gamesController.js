// importando as infos do games.json e salvando na const games
const games = require('../models/games.json');

// // importando o pacote fs para poder realizar alterações direto em games.json
// const fs = require('fs');

// retorna todos os jogos da lista Json
// localhost:1414/play/

const getGames = (req, res) => {
    try {
        res.status(200).json([{
            "Meus jogos favoritos (>‿◠)": games
        }])
    } catch (err) {
        res.status(500).send({
            "Game over": "Erro no server"
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


// deletar um jogo especifico 


// atualizar avaliação do jogo, campo "liked" da lista Json






module.exports = {
    getGames,
    getGamesId,
    // addGames,
    // deleteGames, 
    // updateGames
}