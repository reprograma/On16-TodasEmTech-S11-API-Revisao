const series = require('../models/series.json')



const getAllSeries = (req, res) => {

    try {
        res.status(200).json([
            {
                series: series,
            }
        ])
    } catch (err) {
        res.status(500).send({ message: 'Erro no server' })
    }
}


const getByGenre = (req, res) => {
    let genreRequest = req.query.genre
    console.log(genreRequest)

    const serieFound = series.filter((serie) => serie.genre.toLowerCase() == genreRequest)
    if (serieFound) {
        res.status(200).send(serieFound)
    } else {
        res.status(404).send({ message: 'A série que você procurou não foi encontrada' })

    }
}


const getSerieById = (req, res) => {

    const idSerieRequest = req.params.id
    const serieFound = series.find((game) => game.id == idSerieRequest)
    if (serieFound) {

        res.status(200).send(serieFound)

    } else {

        res.status(404).send({ message: "A série não foi encontrada" })

    }
}

const newSerie = (req, res) => {
    try {
        const { id, name, genre, synopsis, liked, seasons } = req.body
        const postSerie = { id: (series.length + 1), name, genre, synopsis, liked, seasons }

        series.push(postSerie)
        res.status(201).json([
            {
                message: 'Nova série cadastrada',
                postSerie
            }
        ])
    } catch (err) {
        res.status(500).send({ message: 'Erro ao cadastrar' })
    }
}


const updateLiked = (req, res) => {
    try {
        const serieId = req.params.id
        const newLike = req.body.liked
        const serieFound = series.find((serie) => serie.id == serieId)
        const serieIndex = series.indexOf(serieFound)

        if (serieIndex >= 0) {
            serieFound.liked = newLike
            series.splice(serieIndex, 1, serieFound)

            res.status(200).json([
                {
                    message: 'O like foi adicionado / retirado com sucesso',
                    series
                }
            ])
        } else {
            res.status(404).json([
                {
                    message: 'Nada foi modificado'
                },
            ])
        }
    } catch (err) {
        res.status(500).send({ message: err })
    }
}


const deleteSerie = (req, res) => {
    try {
        const serieId = req.params.id
        const serieFound = series.find((serie) => serie.id == serieId)
        const serieIndex = series.indexOf(serieFound)

        if (serieIndex >= 0) {
            series.splice(serieIndex, 1)

            res.status(200).json([
                {
                    message: 'Série deletada',
                    series
                }
            ])
        } else {
            res.status(400).send({ message: 'Serie não encontrada' })
        }
    } catch (err) {
        res.status(500).send({ message: 'Erro ao deletar serie' })

    }
}

module.exports = {
    getAllSeries,
    getSerieById,
    getByGenre,
    newSerie,
    updateLiked,
    deleteSerie
}