const series = require('../models/series.json')

const getAllSeries = (req, res) => {

    try {
        res.status(200).send({'Series:': series})

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }
}

const getByGenre = (req, res) => {

    try {

        const genreRequest = req.query.genre.toLowerCase()

        let genreFilter = series.filter(serie => serie.genre.toLowerCase().includes(genreRequest))

        if (genreFilter.length > 0) {
            
            res.status(200).send(genreFilter)

        } else {

            res.status(404).send({message: 'Not found'})
        }

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }
}

const getSeriesById = (req, res) => {

    try {

        const idRequest = req.params.id

        const idFilter = series.filter(series => series.id == idRequest)

        if (idFilter.length > 0) {

            res.status(200).send(idFilter)

        } else {

            res.status(404).send({ message: 'Not found'})
        }
 
    } catch(err) {

        res.status(500).send({ message: 'Internal error'})
    }

}

const postNewSerie = (req, res) => {

    try {
        const postSerie = { id, name, genre, synopsis, liked, seasons } = req.body
        series.push({ id: series.length + 1, name, genre, synopsis, liked, seasons})

        res.status(201).send({ message: 'New serie added', postSerie})

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }

}


const deleteSerieById = (req, res) => {

    try {

        const idRequest = req.params.id

        const indexSerie = series.findIndex(serie => serie.id == idRequest)

        series.splice(indexSerie, 1)

        res.status(200).send({ message: 'Serie deleted succesfully', deleted: idRequest, series })

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }

}


module.exports = {
    getAllSeries,
    getByGenre,
    getSeriesById,
    postNewSerie,
    deleteSerieById
}