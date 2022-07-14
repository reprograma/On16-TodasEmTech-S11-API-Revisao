const listSeries = require('../models/series.json')

const getAllSeries = (req, res) => {
    try{
        res.status(200).json({
            'Essa é a lista de séries': listSeries
        })

    } catch (err) {
        res.status(500).send({
            'message': 'Erro no servidor.'
        })            
    
    }
}

//retorna uma série específica - procura por id
const getSeries = (req, res) => {
    let idRequest = id.params.body
    let idFilter = listSeries.find(series => series.id.includes(idRequest))

    if(idFilter.lenght > 0){
        res.status(200).send(idFilter)
    } else {
        res.status(404).send({
            'message': 'Série não encontrada no catálogo.'
        })
    }
}

const getGenre = (req, res) => {
    let genreRequest = req.query.genre
    let genreFound = listSeries.filter(series => series.genre.includes(genreRequest))
        
    res.status(200).json({
        'message': 'Encontramos estas séries no gênero desejado:',
        genreFound
    })

}

const addSeries = (req, res) => {
 //prof. eu tentei criar uma lógica aqui pra inserir um gerador de id, kkkk
    let idCreator = req.body.id
   
   for (let i = 0; i < id.lenght; i++ ){
    listSeries.push.idCreator
   }

   let nameRequest = req.body.name
   let genreRequest = req.body.genre
   let synopsisRequest = req.body.synopsis
   let likedRequest = req.body.like

   let newSerie = {
    id: idCreator,
    name: nameRequest,
    genre: genreRequest,
    synopsis: synopsisRequest,
    like: likedRequest
   }

   listSeries.push(newSerie)
   res.status(201).json({
    'A série foi adicionada': newSerie 
   })
}

const rateSeries = (req, res) => {
    let nameRequest = req.query.name
    let likeRequest = req.body.liked
    let seriesFilter = listSeries.find(serie => serie.name.includes(nameRequest)) 

    if(seriesFilter > 0){
        seriesFilter.liked = likeRequest

        res.status(200).json({
            'message': 'A série foi favoritada.'
        })
    } else {
        res.status(404).send({
            'message': 'Série não encontrada.'
        })
    }
}

const deleteSeries = (req, res) => {
    const deleteRequest = request.params.id
    const deleteFilter = listSeries.findIndex((serie) => serie.id == deleteRequest)

    if (deleteFilter) {
        deleteFilter == deleteRequest
        listSeries.splice(deleteFilter, 1)

        res.status(200).json({
            "message": "A série foi deletada.",
            "deletada": deleteRequest,
            listSeries
        })

    } else {
        response.status(500).send({
            "message": "Série não encontrada."
        })

    }
}


module.exports = {
    getAllSeries,
    getSeries,
    getGenre,
    addSeries,
    rateSeries,
    deleteSeries
}