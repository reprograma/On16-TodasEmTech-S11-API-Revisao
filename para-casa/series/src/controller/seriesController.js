const series = require("../models/series.json")

const getAllSeries = (request, response) => {
    response.status(200).json([{
        series
    }])
}

const getSeriesByGenre = (request, response) => {
    const genreRequest = request.query.genre.toLowerCase()
    const genreFound = series.filter(serie => serie.genre.toLowerCase().includes(genreRequest))

    response.status(200).json([{
        "mensagem": "series filtradas por gênero!",
        genreFound
    }])
}

const getSerieById = (request, response) => {
    const idRequest = request.params.id
    const serieFound = series.find(serie => serie.id == idRequest)

    response.status(200).json([{
        serieFound
    }])
}

const addNewSerie = (request, response) => {
    const titleRequest = request.body.title
    const genreRequest = request.body.genre
    const synopsisRequest = request.body.synopsis
    const likedRequest = request.body.liked
    const seasonsRequest = request.body.seasons
    const newId = series.length() + 1

    const newSerie = {
        id: newId,
        title: titleRequest,
        genre: genreRequest,
        synopsis: synopsisRequest,
        liked: likedRequest,
        seasons: seasonsRequest   
    }

    series.push(newSerie)

    response.status(200).json([{
        "mensagem": "nova série adicionada!",
        newSerie
    }])
}

const deleteSerie = (request, response) => {
    const idRequest = request.params.id
    const serieEncontrada = series.findIndex(serie => serie.id == idRequest)
    series.splice(serieEncontrada, 1)

    response.status(200).json([{
        "mensagem": "série excluída!",
        series
    }])
}

const likeSerie = (request, response) => {
    const idRequest = request.params.id
    const serieEncontrada = series.find(serie => serie.id == idRequest)

    if(serieEncontrada.liked === true){
        serieEncontrada.liked = false
    } else {
        serieEncontrada.liked = true
    }
}

module.exports = {
    getAllSeries,
    getSerieById,
    getSeriesByGenre,
    addNewSerie,
    deleteSerie,
    likeSerie
}