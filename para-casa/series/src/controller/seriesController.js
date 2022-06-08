const { response } = require('../app')
const fs = require('fs')


const series = require('../models/series.json')


const getAll = (request, response) => {
    try {
        response.status(200).json([{
            "Series": series
        }])
    } catch(e){
        response.status(500).send({
            message: "Erro no server"
        })
    }
}

const newEp = (req, res) => {
    const idRequest = req.params.id;
    const seasonIdRequest = req.params.seasonId;
    const { code, name, watched } = req.body
    const findId = series.find(find => find.id == idRequest)
    let findEp = findId.seasons.find(season => season.id == seasonIdRequest)
    findEp.episodes = [
        ...findEp.episodes,
       {
        id: (findEp.episodes).length + 1,
        code: code,
        name: name,
        watched: watched
       }
    ]

    fs.writeFile("./src/models/series.json", JSON.stringify(series), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Episódio adicionado!");
            const serieUpdated = series.find((serie) => serie.id == idRequest)
            res.status(200).send(serieUpdated)
        } 
    })
}

const newSeason = (req, res) => {
    const idRequest = req.params.id;
    const { code, episodes } = req.body
    const findId = series.find(find => find.id == idRequest)
    console.log(findId)
    findId.seasons = [
        ...findId.seasons,
        {
            id: (findId.seasons).length + 1,
            code: code,
            episodes: episodes
        }
    ]
    fs.writeFile("./src/models/series.json", JSON.stringify(series), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Temporada adicionada!");
            const serieUpdated = series.find((serie) => serie.id == idRequest)
            res.status(200).send(serieUpdated)
        } 
    })
}


module.exports = {
    getAll,
    newEp,
    newSeason
}