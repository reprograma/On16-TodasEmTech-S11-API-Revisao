const series = require('../models/series.json')


const getAllSeries = (req, res) => {

    try {
        res.status(200).send({'Series:': series})

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }
}

module.exports = {
    getAllSeries
}