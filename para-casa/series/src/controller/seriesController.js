const library = require("../models/series.json")

const seriesAll = (req, res) => {
    try{
        res.status(200).json({ Séries: library})
    }catch{
        res.status(500).send({ Message: "Internal server error"})
    }
}

const seriesGenre = (req, res) => {

    const genreRequest = req.query.genre.toLowerCase()
    const genreFilter = library.filter( serie => serie.genre.toLowerCase().includes(genreRequest))

    if(genreFilter.length > 0){
        res.status(200).send(genreFilter)
    }else{
        res.status(404).send({ Message: "Genre not found"})
    }
}

const seriesById = (req, res) => {

    const idRequest = req.params.id
    const idFilter = library.filter( serie => serie.id == idRequest)

    if(idFilter.length > 0){
        res.status(200).send(idFilter)
    }else{
        res.status(404).send({ Message: "Id not found"})
    }
}



module.exports = {
    seriesAll,
    seriesGenre,
    seriesById

}