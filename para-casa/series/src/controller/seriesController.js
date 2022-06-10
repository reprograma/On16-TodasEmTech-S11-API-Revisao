const series = require('../models/series.json')

// GET que retorna todas as séries
const getAll = (request, response) => {
    try {
       response.status(200).json([{
           "Séries": series
       }])
   } catch (err) {
       response.status(500).send({ message: "Erro no server" })
   }
}

// GET que retorna todas as séries de um gênero específico
const getSerieByGenre = (request, response) => {
    const genreRequest = request.query.genre
    const genreFilter = series.filter(serie => serie.genre.includes(genreRequest))
    if (genreFilter.length > 0) {
        response.status(200).send(genreFilter)
    } else {
        response.status(404).send([{
            Message: "Não há séries deste gênero"}])
    }
}

// GET que retorna uma série por ID
const getSerieByID = (request, response) => {
    const serieRequest = request.params.id;
    const serieFilter = series.filter((serie) => serie.id == serieRequest);
  
    if (serieFilter.length > 0) {
      response.status(200).send(serieFilter);
    } else {
      response.status(404).send([
        {
          message: "Série não encontrada",
        },
      ]);
    }
  };

// POST que cadastra uma nova série
const newSerie = (request, response) => {
    try {
        
    let nameRequest = request.body.name
    let genreRequest = request.body.genre
    let synopsisRequest = request.body.synopsis
    let likedRequest = request.body.liked
    let seasonsRequest = request.body.seasons


    let novaSerie = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        genre: genreRequest,
        synopsis: synopsisRequest,
        liked: likedRequest,
        seasons: seasonsRequest
    }

    series.push(novaSerie)
    response.status(201).json([{
        message: "Nova série cadastrada",
        novaSerie
    }])

}catch (err){
    console.log (err)
    response.status(500).send({
        message: "erro no servidor"})
}}

// DELETE que deleta uma série específica
const deleteSerie = (request, response) => {

    const idRequest = request.params.id

    const indexSeries = series.findIndex(serie => serie.id == idRequest)

    if(indexSeries != -1){
        series.splice(indexSeries, 1) 

        response.status(200).json([{
            "mensagem" : "A série foi deletada",
            "deletada" : idRequest,
            series
        }])

    }else{
        response.status(404).json([{
            message: "A série não foi encontrada"
        }])
    }

}

// PATCH que atualiza se gostou ou não de uma série
const likeSeries = (request, response) => {
    const idRequest = request.params.id
    const likeRequest = request.body.liked
    likeFilter = series.find((serie) => serie.id == idRequest)
    
    if (likeFilter) {
        likeFilter.liked = likeRequest
        response.status(200).json([{
            message: "Status atualizado", 
            series
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}

module.exports = {
    getAll,
    getSerieByGenre,
    getSerieByID,
    newSerie,
    deleteSerie,
    likeSeries
}