const series = require('../models/series.json')

const postSerie = (req, res) => {
        
    const {id, name, genre, synopsis, linked, seasons } = req.body
    series.push({id:(series.length + 1), name, genre, synopsis, linked, seasons})

    if(!name || !genre) {
      res.status(400).send({message: "Erro ao cadastrar nova Série"})

    } else {
    res.status(200).json([
      {
        message: "Série criada com sucesso",
        series
      }
    ])}    
}

const getAllSeries = (req, res) => {
  try{
    res.status(200).json([
      {
        "Séries": series
      }
    ])
  } catch (err) {
    res.status(500).send({message:"Erro encontrado"})
  }
}

const getByIdSeries = (req, res) => {
  try {
    const idRequest = req.params.id
    const serieEncontrada = series.find(serie => serie.id == idRequest)

    if(!serieEncontrada) {
      res.status(404).send({ message: 'Id não encontrado' })
    } else {
      res.status(200).send(serieEncontrada)
    }

  } catch (err) {
    res.status(500).send({message: "Erro encontrado"})
  }
}

const getByGenre = (req, res) => {
  try{
    genreRequest = req.query.genre.toLowerCase()
    genreEncontrado = series.filter(serie => serie.genre.toLowerCase().includes(genre))
    console.log(genreEncontrado)

    if(genreEncontrado.length > 0) {
      res.status(200).json([
        {
          "Séries" : genreEncontrado          
        }
      ])
    } else {
      res.status(404).send({ message: 'Gênero não encontrado' })
    }
  } catch (err) {
    res.status(500).send({message: "Erro encontrado"})
  }
}

const updateSerie = (req, res) => {
  try {
    const idRequest = req.params.id
    const favoritoRequest = req.body.liked
    const idEncontrado = series.find(serie => serie.id == idRequest)

    if(idEncontrado) {
      idEncontrado.liked = favoritoRequest
      res.status(200).json([
        {
        message: "Sua alteração nos favoritos foi concluída com sucesso",
        series
        }
      ])
    } else {
      res.status(404).send({ message: 'Série não encontrada' })
    }
  } catch (err) {
    res.status(500).send({message: "Erro encontrado"})
  }
}

const deleteSerie = (req, res) => {
  try{
    const idRequest = req.params.id
    const serieEncontrada = series.findIndex(serie => serie.id == idRequest)

    if(serieEncontrada >= 0) {
      series.splice(serieEncontrada, 1)

      res.status(200).json([
        {
          "Serie deletada": idRequest,
          series
        }
      ])
    } else {
      res.status(404).send({message: "Série não encontrada"})
    }
  } catch (err) {
    res.status(500).send({message: "Erro encontrado"})
  }
}


// Desafio:

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

const addSeason = (req, res) => {
  try {
    const idRequest = req.params.id
    const serieFound = series.find(serie => serie.id == idRequest)    

    if(serieFound) {
     
      const { code, episodes } = req.body
      
        serieFound.seasons.push({
        id: serieFound.seasons.length + 1,
        code,
        episodes
      })      

      res.status(201).send(serieFound)

    } else {
      res.status(404).send({ message: 'encontrei essa temporada nao visse' })
    }
  } catch(err) {
    res.status(500).send({ message: 'ainda ta dando erro gataannn e eh do teu lado' })
  }
}

const deleteSeason = (req, res) => {  
  const idRequest = req.params.id
  const serieFound = series.find(serie => serie.id == idRequest)  

  if(serieFound) {    
    const idSeasonRequest = req.params.id   
    const seasonIdFound = serieFound.seasons.findIndex(season => season.id == idSeasonRequest)     

    if(!seasonIdFound) { 
      serieFound.seasons.splice(seasonIdFound, 1)

      res.status(200).json([
        {
          "Temporada deletada": `temporada ${idSeasonRequest} da série ${idRequest}`,
          series
        }
      ])

    } else {
      res.status(404).send({message: "Temporada não encontrada"})
    }
  } else {
    res.status(404).send({message: "Série não encontrada"})
  }
}

const deleteEpisode = (req, res) => {
  const idSerieRequest = req.params.id 
  const serieFound = series.find((serie) => serie.id == idSerieRequest)
  
  if (serieFound) {
    const idSeasonRequest = req.params.seasonId 
    const seasonFound = serieFound.seasons.find(season => season.id == idSeasonRequest) 
    
    if (seasonFound) {
      const idEpisodeRequest = req.params.episodeId
      const episodeFound = seasonFound.episodes.findIndex(episode => episode.id == idEpisodeRequest)

      if(!episodeFound) {
        seasonFound.episodes.splice(episodeFound, 1)

        res.status(200).json([
          {
            "Episódio deletado": `Episódio ${idEpisodeRequest} da temporada ${idSeasonRequest} da série ${idSerieRequest}`,
            series
          }
        ])
      }
    }
  }
}

const updateEpisode = (req, res) => {
  const idSerieRequest = req.params.id 
    const serieFound = series.find((serie) => serie.id == idSerieRequest)
  
  if (serieFound) {
    const idSeasonRequest = req.params.seasonId 
    const wantchedRequest = req.body.watched

    const seasonFound = serieFound.seasons.find(season => season.id == idSeasonRequest) 
    
    if (seasonFound) {
      const idEpisodeRequest = req.params.episodeId
      const episodeFound = seasonFound.episodes.find(episode => episode.id == idEpisodeRequest)

      if(episodeFound) {      
        episodeFound.watched = wantchedRequest

        res.status(200).json([
          {
            "Episódio atualizado": series
          }
        ])
        
      }
    }
  }
}








module.exports = {
  postSerie,
  getAllSeries,
  getByIdSeries,
  getByGenre,
  updateSerie,
  deleteSerie,
  addEpisode,
  addSeason,
  deleteSeason,
  deleteEpisode,
  updateEpisode
}