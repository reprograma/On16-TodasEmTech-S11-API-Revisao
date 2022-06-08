const series = require('../models/series.json')

// retornar todas as séries
const getAllSeries = (req, res) => {
    try {
      res.status(200).json([
        {
          Series: series,
        },
      ])
    } catch (err) {
      res.status(500).send({ message: 'Erro no server' })
    }
  }
  
  // retornar séries de um gênero específico

  const getSeriesByGenre = (req, res) => {
      try {
        let genreRequest = req.query.genre //buscar o gênero
    
        let genreFiltro = series.filter((serie) => serie.genre.includes(genreRequest)) // pedir o gênero
    
        if (genreFiltro.length > 0) {
          res.status(200).send(genreFiltro)
        } else {
          res.status(404).send({ message: 'gênero não foi encontrado' })
        }
      } catch (err) {
        res.status(500).send({ message: 'erro no server' })
      }
    }

    // retornar série por id

    const getSeriesById = (req, res) => {
      try {  
        const idRequest = req.params.id
        let serieEncontrada = series.find(
        series => series.id == idRequest)
        res.status(200).send(musicaEncontrada)
       if (idRequest < 0) {
        response.status(404).send({ message: 'série não foi encontrada' })
       }
       } catch (err) {
        res.status(500).send({ message: 'erro no server' })
    
}
}

const createSeries = (req, res) => {
    try {
      let nameRequest = req.body.name
      let genreRequest = req.body.genre
      let synopsisRequest = req.body.favorited
      let likedRequest = req.body.artists
      let seasonsRequest = req.body.seasonsRequest
  
      let novaSerie = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        genre: genreRequest,
        synopsis: synopsisRequest,
        liked: likedRequest,
        seasons: seasonsRequest
      }
  
     series.push(novaSerie)
  
      res.status(201).json([
        {
          message: 'nova série cadastrada',
          novaSerie,
        },
      ])
    } catch (err) {
      res.status(500).send({ message: 'erro ao cadastrar' })
    }
  }

  const deleteSerie = (req, res) => {
    try {
        const serieId = req.params.id
        const serieFound = series.find(serie => serie.id == serieId) // encontro a série pelo id
        const serieIndex = series.indexOf(serieFound) // identifico o índice da série no meu array

        if (serieIndex >= 0) { // verifico se a série existe no array de séries
            series.splice(serieIndex, 1) // removo a série pelo índice
            fs.writeFile("./src/models/series.json", JSON.stringify(series), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {8
                    console.log("série deletada com sucesso do arquivo!")
                    res.sendStatus(204)
                }
            })
        } else {
            res.status(404).send({ message: "série não encontrada para ser deletada" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar a série" })

    }
}

const updateLiked = (req, res) => {
  try {
    const idRequest = req.params.id
    const likedRequest = req.body.liked

    likedFilter = series.find((task) => task.id == idRequest)

    if (likedFilter) {
      likedFilter.liked = likedRequest

      res.status(200).json([
        {
          mensagem: 'seus gostei foram atualizos com sucesso!',
          series,
        },
      ])
    } else {
      res.status(404).json([
        {
          message: 'não conseguimos modificar os seus gostei!',
        },
      ])
    }
  } catch (err) {
    res.status(500).send({ message: 'erro ao cadastrar' })
  }
}


module.exports = {
  getAllSeries,
  getSeriesByGenre,
  getSeriesById,
  createSeries,
  deleteSerie,
  updateLiked 
}
