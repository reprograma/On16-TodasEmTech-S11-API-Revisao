const seriesJson = require("../models/series.json")

const getSeries = (request, response) => {
    try{
        response.status(200).json({
            "series": seriesJson
        })
    } catch(err) {
        response.status(500).send({
            message: "Erro no servidor"
        })
    }
}

const getGenero = (request, response) => {

    const genreRequest = request.query.genre.toLocaleLowerCase()
    let filterGenre = seriesJson.filter((serie) => serie.genre.toLocaleLowerCase().includes(genreRequest))

    if(filterGenre.length > 0){
        response.status(200).json({
            message: "Genero encontrado",
            filterGenre
        })
    } else {
        response.status(404).send({
            messsage: "Error: Genero não encontrado"
        })
    }
}

const buscaSerie = (request, response) => {
    const idRequest = request.params.id
    const serieFound = seriesJson.find(serie => serie.id == idRequest)

    if(serieFound) {
        response.status(200).send({
            message: "Série encontrada",
            serieFound
        })
    } else {
        response.status(404).send({
            message: "Error: série não encontrada"
        })
    }
}

const addSerie = (request, response) => {
    try{
        const {id, name, genre, synopsis, liked, seasons} = request.body
        let newSerie = {
            id: seriesJson.length + 1, name, genre, synopsis, liked, seasons
        }

    seriesJson.push(newSerie)

        response.status(201).json({
            message: "Série cadastrada",
            seriesJson
        })
    } catch(err){
        response.status(500).send({
            message: "Error: ao efetuar o cadastro"
        })
    }
}

const deleteSerie = (request, response) => {
    try {
        const idRequest = request.params.id
        const serieIndex = seriesJson.findIndex(serie => serie.id == idRequest)

        seriesJson.splice(serieIndex, 1)

        response.status(200).send({
            message: "Série deletada",
            deletada: idRequest,
            seriesJson
        })
    } catch(err){
        response.status(500).send({
            message: "Error: Série não deletada"
        })
    }
}

const likedSerie = (request, response) => {
    const idRequest = request.params.id
    const likedRequest = request.body.liked

    let serieIndex = seriesJson.find(serie => serie.id == idRequest)

    if(serieIndex){
        serieIndex.liked = likedRequest

        response.status(200).json({
            message: "Série alterada",
            seriesJson
        })
    } else {
        response.status(500).send({
            message: "Error: Série não alterada"
        })
    }
}


module.exports = {
    getSeries,
    getGenero,
    buscaSerie,
    addSerie,
    deleteSerie,
    likedSerie
}