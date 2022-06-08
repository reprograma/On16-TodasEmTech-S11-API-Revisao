const { request, response } = require("express")
const gamesJson = require("../models/games.json")

const gamesLista = (request, response) => {
    try{
        response.status(200).json({
            "games": gamesJson
        })
    } catch (err) {
        response.status(500).send({
            message: 'Erro no servidor'
        })
    }
}

const buscaJogo = (request, response) => {
    const idRequest = request.params.id
    const gameFound = gamesJson.find(game => game.id == idRequest)

    if(gameFound) {
        response.status(200).send(gameFound)
    } else {
        response.status(404).send({
            message: "Jogo não encontrado"
        })
    }
}

const cadastraJogo = (request, response) => {
    try{
        const {id, title, launchYear, consoles, liked} = request.body

        let novoJogo = {
            id: (gamesJson.length + 1), title, launchYear, consoles, liked
        }

    gamesJson.push(novoJogo)

        response.status(201).json({
            message: "Jogo cadastrado",
            novoJogo
        })
    } catch (err) {
        response.status(500).send({
            message: "Erro ao cadastrar"
        })
    }
}

const atualizaJogo = (request, response) => {
    try{
        const idRequest = request.params.id
        let updateRequest = request.body

        let gameFound = gamesJson.findIndex(game => game.id == idRequest)
        gamesJson.splice(gameFound, 1, updateRequest)

        response.status(201).json({
            message: "Jogo atualizado",
            gamesJson
        })
    } catch (err) {
        response.status(500).send({
            message: "Erro ao atualizar"
        })
    }
}

module.exports ={
    gamesLista,
    buscaJogo,
    cadastraJogo,
    atualizaJogo
}