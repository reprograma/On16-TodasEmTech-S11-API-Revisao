const series = require("../models/series.json")


const createSerie = (req, res) => {
    const { id, name, genre, synopsis, liked, seasons } = req.body
    series.push({ id : (series.length +1), name, genre, synopsis, liked, seasons })

        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const serieFound = series.find(serie => serie.id == id)   
            res.status(200).send(serieFound)
        }
}

const deleteSerie= (req, res) => {
    try {
        const serieId = req.params.id
        const serieFound = series.find(serie => serie.id == serieId)
        const serieIndex = series.indexOf(serieFound) 

        if (serieIndex >= 0) { 
            series.splice(serieIndex, 1) 
             {
                    console.log("Serie deletada com sucesso do arquivo!")
                    res.sendStatus(204)
                }
        } else {
            res.status(404).send({ message: "Serie não encontrada para ser deletada" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar a serie" })
    }
}

const updateLiked = (req, res) => {
    try {
        const serieId = req.params.id
        const likeToUpdate = req.body 
        const serieFound = series.find(serie => serie.id == serieId) 
        const serieIndex = series.indexOf(serieFound) 

        if (serieIndex >= 0) { 
            series.splice(serieIndex, 1, likeToUpdate) 
             
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Liked atualizado com sucesso!")
                    const likeToUpdate = series.find(serie => serie.id == serieId) 
                    res.status(200).send(likeToUpdate) 
                }
            
        } else {
            res.status(404).send({ message: "Serie não encontrada para ser atualizada" })
        }

    } catch (err) {
        res.status(500).send({ message: err })
    }
}





const getAllSeries = (req, res) => {
    const allSeries = series.filter

    if (allSeries.length >0) {
res.status(200).send([{message: 'Todas as series foram encontradas', series
}])
    }
    else {
res.status(404).send({message: 'Nao foram encontrados dados da sua pesquisa'
})
    }
}

const getSeries = (req, res) => {
    const serieId = req.params.id
    const serieFound = series.find(serie => serie.id == serieId)
    if (serieFound) {
        res.status(200).send(serieFound)
    } else {
        res.status(404).send({ message: "Serie não encontrada" })
    }
}

const getSeriesByGenre = (req, res) => {
    let genreRequest = req.query.genre
    console.log(genreRequest)

    let serieFound = series.filter(serie => serie.genre.includes(genreRequest))
   
    console.log(serieFound)
    
    if (serieFound.length > 0) {
        res.status(200).send(serieFound)
    } else {
        res.status(404).send({ message: "Nao encontramos dados para sua pesquisa" })
    }
}


module.exports = {
    createSerie,
    deleteSerie,
    updateLiked,
    getAllSeries,
    getSeries,
    getSeriesByGenre
}