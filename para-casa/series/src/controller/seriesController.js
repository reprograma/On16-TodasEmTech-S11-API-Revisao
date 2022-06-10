const { response } = require('express')
const series = require('../models/series.json')

// Rota de GET Para retornar todas as series

const getAll = (req, res) => {
    try{
    res.status(200).json([{
        "series": series
    }])
    } catch(err){
    res.status(500).send({message: "erro no server"})       
    }}

// Rota de GET para retornar series de um genero especifico

const getGenre = (req, res) => {
    const genreRequest = req.query.genre
    const genreFiltrado = series.filter((serie) => serie.genre.includes(genreRequest))
    if (genreFiltrado.length > 0 ){
        res.status(200).send(genreFiltrado)
    } else {
        res.status(400).send([{
            "message":"Série não encontrada :("
        }])
    }
    }

// Rota de GET para retornar apenas uma série especifica

const getSerieById = (req, res) => {
    try { 
    const idRequest = req.params.id
    const idEncontrado = series.filter(serie => serie.id == idRequest)
    if (idEncontrado.length > 0){
        res.status(200).send(idEncontrado)
    } else {
        res.status(400).send([{
            "message": "Esse id não existe"
        }])
    }} catch(err) {
     res.status(500).send({ message: "Erro no server"})    
    }
}

// Rota de POST para cadastrar uma serie

const createSerie = (req, res) =>{
    try{
        const { id, name, genre, synopsis, liked, seasons} = req.body
        let novaSerie = {id:(series.length+1), name, genre, synopsis, liked, seasons}
        series.push(novaSerie)
        res.status(201).json([{
            message: "nova série cadastrada",
            novaSerie
        }])
    } catch (err){
        console.log(err)
        res.status(500).send([{
            message: "Erro interno ao cadastrar"
        }])
    }
}

// Rota de DELETE pra deletar uma serie por id

const deleteSerie = (req, res) =>{
    try{
        const idRequest = req.params.id
        const seriesIndex = series.findIndex((serie) => serie.id == idRequest)
        series.splice (seriesIndex, 1)
        res.status(200).json([{
            "message": "serie deletada",
            "deletado": idRequest,
            series
        }])
    } catch(err) {
        res.status(500).send({ message: "Erro no server"})    
       }
}

//Rota de PATCH para atualizar se gostou ou não da série

const updateLikedStatus = (req, res) => {
    const idRequest = req.params.id
    const statusLiked = req.body.liked
    likedFilter = series.find((serie) => serie.id == idRequest)
    if (likedFilter){
        likedFilter.liked = statusLiked
        res.status(200).json([{
            message: "status da série atualizado",
            series
        }])
    } else {
        res.status(400).json([{
            message: "status não modificado"
        }])
    }

}

// Cadastrar novo episódio na temporada, onde :id é o id da série e:seasonId é o id da temporada

const addEpisode = (req, res) => {
    try {
      const serieId = req.params.id // guardar o id passado na request
      const serieToUpdate = series.find((serie) => serie.id == serieId) // procurar no array esse id que foi passado
  
      // verifique se a serie existe
      if (serieToUpdate) {
        const seasonId = req.params.seasonId //guarda o id da serie q a gata passou no request
        const seasonToUpdate = serieToUpdate.seasons.find(
          (season) => season.id == seasonId,
        ) // procura esse id no array de seasons no id de series informado
        // verificando se a temporada existe no array de series
        if (seasonToUpdate) {
          const { code, name, watched } = req.body
          seasonToUpdate.episodes.push({
            id: seasonToUpdate.episodes.length + 1,
            code,
            name,
            watched,
          }) // adicionamos o novo episodio a temporada
  
          console.log('FUNCIONOUUUUU')
  
          const serieUpdated = series.find((serie) => serie.id == serieId)
          res.status(201).send(serieUpdated)
        } else {
          res.status(404).send({ message: 'encontrei essa temporada nao visse' })
        }
      } else {
        res.status(404).send({ message: 'encontrei essa serie nao visse' })
      }
    } catch (err) {
      res.status(500).send({ message: 'ainda ta dando erro gataannn e eh do teu lado' })
    }
  }
  

module.exports = {
    getAll,
    getGenre,
    getSerieById,
    createSerie,
    deleteSerie,
    updateLikedStatus,
    addEpisode
}

