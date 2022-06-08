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


module.exports = {
    getAllSeries,
    getByGenre,
    getSeriesById
}