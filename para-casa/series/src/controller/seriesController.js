const series = require("../models/series.json")

const getAllSeries = (request, response) => {
    try {
        response.status(200).send({
            message: series
        })
    } catch (err) {
        response.status(400).send({
            message: "Erro no server, vá consertar!"
        })
    }
}


const getForGenre = (request, response) => {
        const genreRequest = request.query.genre.toLocaleLowerCase()
        const filterGenre = series.filter(serie => serie.genre.toLocaleLowerCase().includes(genreRequest))

        if(filterGenre.length > 0){
            response.status(200).json(
                {
                    message: "Encontrado",
                    filterGenre
                })
        } else {
            response.status(404).send(
                {
                    message: "Erro no server, vá consertar!"
                }
            )
        }
    }

const getForSerie = (request, response) => {
    const idRequest = request.params.id
    const serieFound = series.find(serie => serie.id == idRequest)

    if (serieFound) {
        response.status(200).send({
            message: "Aqui, linda",
            serieFound
        })
    } else {
        response.status(404).send(
            {
                message: "Erro no serve, vá consertar!"
            }
        )
    }
}

const newSerie = (request, response) => {
    try {
        let nameRequest = request.body.name
        let genreRequest = request.body.genre
        let synopsisRequest = request.body.synopsis
        let likedRequest = request.body.liked
        let seasonsRequest = request.body.seasons

        let newSerie = {
            id: series.length + 1,
            name: nameRequest,
            genre: genreRequest,
            synopsis: synopsisRequest,
            liked: likedRequest,
            seasons: seasonsRequest
        }

        series.push(newSerie)

        response.status(201).json({
            message: "Nova série cadastrada.",
            series
        })
    } catch (err) {
        response.status(500).send(
            {
                message: "Erro no serve, vá consertar!"
            })
    }
}

const deleteSerie = (request, response) => {
    try {
        const idRequest = request.params.id
        let indexSerie = series.findIndex(serie => serie.id == idRequest)

        series.splice(indexSerie, 1)

        response.status(200).json([
            {
                message: "tchauzinho",
                "série deletada": indexSerie,
                series
            }
        ])
    } catch (err) {
        response.status(500).json([
            {
                message: "Erro no serve, vá consertar!"
            }
        ])
    }
}

const atualizarSerie = (request, response) => {
    try {
        const idRequest = request.params.id
        const likedRequest = request.body.liked

        likedFound = series.find(serie => serie.id == idRequest)

        likedFound.liked = likedRequest

        response.status(200).json([
            {
                message: "gostasse?",
                likedFound
            }
        ])
    } catch (err) {
        response.status(500).json([
            {
                message: "Erro no serve, vá consertar!"
            }
        ])
    }
}



module.exports = {
    getAllSeries,
    getForGenre,
    getForSerie,
    newSerie,
    deleteSerie,
    atualizarSerie
}