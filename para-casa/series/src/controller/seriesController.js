// Criando funções com a lógica das nossas rotas

const seriesJson = require('../models/series.json') // Acessando nosso banco/json
const express = require('express')
const {
    response
} = require('../app')
const res = require('express/lib/response')
const app = express()

app.use(express.json()) // Fazendo o body parser

// Função com a lógica da rota ( GET: /series) - Para nos retornar a lista de todas as séries.

const getAllSeries = (req, res) => {
    try {
        res.status(200).json([{
            "Séries": seriesJson
        }])
    } catch (err) {
        res.status(500).send({
            "message": "Erro no servidor"
        })
    }
}

// Função com a lógica da rota ( GET: /series/genero) - Para nos retornar uma lista de séries por gênero
// Implementar lowerCase

const getGenreSeries = (req, res) => {
    const genreRequest = req.query.genre
    let genreFilter = seriesJson.filter(series => series.genre.includes(genreRequest))
    if (genreFilter.length >= 0) {
        res.status(200).send(genreFilter)
    } else {
        res.status(404).send([{
            "message": "Série não encontrada"
        }])
    }
}

// Função com a lógica da rota ( GET: /series/:id) - Para nos retornar uma série específica por Id

const getSerieId = (req, res) => {
    const idRequest = req.params.id
    let serieFound = seriesJson.filter(series => series.id == idRequest)
    if (serieFound.length > 0) {
        res.status(200).send(serieFound)
    } else {
        res.status(404).send([{
            "message": "Série não encontrada"
        }])
    }
}

// Função com a lógica da rota ( POST: /series) - Para cadastrar uma nova série 

const addSerie = (req, res) => {
    try {
        let nameRequest = req.body.name
        let genreRequest = req.body.genre
        let synopsisRequest = req.body.synopsis
        let likedRequest = req.body.liked
        let seasonsRequest = req.body.seasons

        let newSerie = {
            id: (seriesJson.length + 1),
            name: nameRequest,
            genre: genreRequest,
            synopsis: synopsisRequest,
            liked: likedRequest,
            seasons: seasonsRequest
        }
        seriesJson.push(newSerie)
        res.status(201).json([{
            "message": "Série nova cadastrada",
            newSerie
        }])
    } catch (err) {
        console.log(err)
        res.status(500).send([{
            "message": "Erro interno ao cadastrar"
        }])
    }
}

// Função com a lógica da rota ( DELETE: /series/:id) - Para deletar uma série específica por Id

const deleteSerie = (req, res) => {
    try {
        let idRequest = req.params.id
        let indiceSeries = seriesJson.findIndex(series => series.id == idRequest)

        seriesJson.splice(indiceSeries, 1)

        res.status(200).json([{
            "message": "Série deletada com sucesso!",
            "deletado": idRequest,
            seriesJson
        }])
    } catch (err) {
        console.log(err)
        res.status(404).send([{
            "message": "Erro interno ao deletar"
        }])
    }
}

// Função com a lógica da rota ( PATCH: /series/:id/liked) - Para favoritar/desfavoritar série

const updateLiked = (req, res) => {
    const idRequest = req.params.id
    const likedRequest = req.body.liked
    likedFilter = seriesJson.find((seriesJson) => seriesJson.id == idRequest)

    if (likedFilter) {
        likedFilter.liked = likedRequest
        res.status(200).json([{
            "message": "Liked atualizado com sucesso",
            seriesJson
        }])
    } else {
        res.status(404).json([{
            "message": "Modificação não realizada, erro encontrado"
        }])
    }
}

module.exports = {
    getAllSeries,
    getGenreSeries,
    getSerieId,
    addSerie,
    deleteSerie,
    updateLiked
}