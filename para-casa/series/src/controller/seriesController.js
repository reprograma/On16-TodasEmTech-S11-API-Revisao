const series = require('../models/series.json')


//retorna todas as séries (get)
const getAllSeries = (request, response) => {
    try {
        response.status(200).json([
            {
            "series": series
        }
    ])
    } catch (err) {
        response.status(500).send({ mensagem: "erro no servidor" })
    }
}


module.exports = {
    getAllSeries
}