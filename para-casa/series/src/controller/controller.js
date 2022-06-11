const { response } = require('express')
const seriesJson = require('../models/series.json')

const getAll = (request, response) => {
    response.status(200).json ([
        {
            "Lista de Series": seriesJson
        }
    ])
}

const seriePorGen = (request, response) => {
    let genRequest = request.query.genre
    console.log(genRequest)

    let genEncontrado = series.filter(
        series => series.genre.includes(genRequest)
    )
    response.status(200).send(genEncontrado)    
}

const seriePorId = (request, response) => {
    const idRequest = request.params.id
    const idFilter = series.filter(series => series.id == idRequest)

    if (idFilter.lenght > 0) {
        response.status(200).send(idFilter)
    } else {
        response.status(404).send([{
            "Message": "Série não encontrada"
        }])
    }
}

const adicionaSerie = (request, response) => {
    try {
        let nameRequest = request.body.name
        let genreRequest = request.body.genre
        let synopsisRequest = request.body.synopsis
        let likedRequest = request.body.liked
        let seasonsRequest = request.body.seasons

        let novaSerie = {
            id: Math.floor(Date.now() * Math.random()).toString(36), //??
            name: nameRequest,
            genre: genreRequest,
            synopsis : synopsisRequest,
            liked: likedRequest,
            seasons: seasonsRequest
        }
        series.push(novaSerie)
        response.status(201).json([{
            "Message": "Nova série cadastrada", novaSerie
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "erro interno ao cadastrar a nova série."
        }])
    }
}

const deletaSerie = (request, response) => {
    const idRequest = request.params.id

    const indiceSerie = series.findIndex(music => {
        return series.id == idRequest 
    })
    series.splice(indiceSerie, 1)

    response.status(200).json([{
        "message": "Série deletada por ID",
        "deletada": idRequest,
        series
    }])
} 

const seriesFavoritadas = (request, response) =>{
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited
 
    favoritedFilter = series.find((series => series.id == idRequest ))

    if(favoritedFilter){
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json([{

            message: "Série favoritada com sucesso", series
        }])

    }else{
        response.status(404).json([{

            message: "Desculpe, não foi atualizada."
        }])
    }
}


module.exports = {
    getAll,
    seriePorGen,
    seriePorId,
    adicionaSerie,
    deletaSerie,
    seriesFavoritadas
}