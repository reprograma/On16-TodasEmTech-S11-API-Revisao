const series = require('../models/series.json')


const getAllSeries = (req, res) => {
    const allSeries = series.filter

    if (allSeries.length > 0) {
      res.status(200).send([{message: "Series encontradas!", series}])
    } else {
      res.status(404).send({message: "Não foi possivel achar as séries!"})
    }
}

const getSeriesByGenre = (req, res) => {
    const genreRequest = req.query.genre.toLowerCase();
    const genreFilter = series.filter(serie =>
      serie.genre.toLowerCase().includes(genreRequest)
    )

    if (genreFilter.length > 0) {
      res.status(200).send([{
        message: "Series encontradas por genero!", genreFilter
    }])
    } else {
      res.status(404).send({
        message: "Não foi possivel achar por genero!"
    })
    }
}

const getIdSeries = (req, res) => {
    const idRequest = req.params.id
    const idFilter = series.filter(serie => serie.id == idRequest)

    if (idFilter.length > 0) {
        res.status(200).send([{
            message: "Id localizado", idFilter
        }])
    } else {
        res.status(404).send({
            message: "Id não localizado"
        })
    }
}

const addSeries = (req, res) => {
    const {id, name, genre, synopsis, liked, seasons} = req.body
    series.push({ id: (series.length + 1), name, genre, synopsis, liked, seasons})


    if (series.length > 0) {
        const seriesFound = series.find(serie => serie.id == id)
        res.status(201).send([{message: "Nova série adicionada", seriesFound, series}])

    } else { res.status(500).send({message: "Erro no servidor"})

    }

}

const deleteSerie = (req, res) => {
    try {
        const idRequest = req.params.id
        const serieFound = series.find(serie => serie.id == idRequest)
        const serieIndex = series.indexOf(serieFound)

        if (serieIndex > -1) {
            series.splice(serieIndex, 1)
            res.status(200).send({ message: "Série deletada com sucesso", series})

        } else {
            res.status(404).send({message: "Não foi possível encontrar a série para deletar"})
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro no servidor"})
    }
}

const updateLikedSerie = (req, res) => {
    const idRequest = req.params.id
    const likedRequest = req.body.liked

    const updateLiked = series.find( serie => serie.id === idRequest)
    const serieIndex = series.indexOf(updateLiked)

    if (serieIndex > -1) {
        updateLiked.liked = likedRequest
        series.splice(serieIndex, 1, updateLiked)
        const updated = series.find(serie => serie.id == idRequest)
        res.status(200).send(updated)
    
    } else {
        res.status(404).send({ message: "Não foi possivel alterar a tag liked"})

    }
}

const addEpisode = (req, res) => {
    try {
      const serieId = req.params.id // guardar o id passado na request
      const serieToUpdate = series.find((serie) => serie.id == serieId) // procurar no array esse id que foi passado

      // verifique se a serie existe
      if (serieToUpdate) {
        const seasonId = req.params.seasonId //guarda o id da serie q a gata passou no request
        const seasonToUpdate = serieToUpdate.seasons.find(
          (season) => season.id == seasonId
        ) // procura esse id no array de seasons no id de series informado
        // verificando se a temporada existe no array de series
            if (seasonToUpdate) {
            const { code, name, watched } = req.body
            seasonToUpdate.episodes.push({
                id: seasonToUpdate.episodes.length + 1, code, name, watched
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
    getAllSeries,
    getSeriesByGenre,
    getIdSeries,
    addSeries,
    deleteSerie,
    updateLikedSerie,
    addEpisode
}