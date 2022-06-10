const seriesJson = require("../models/series.json")

const getSeries = (request, response) => {
    try{
        response.status(200).json({
            "series": seriesJson
        })
    } catch(err) {
        response.status(500).send({
            message: "Erro no servidor" 
        })
    }
}

const getGenero = (request, response) => {

    const genreRequest = request.query.genre.toLocaleLowerCase()
    let filterGenre = seriesJson.filter((serie) => serie.genre.toLocaleLowerCase().includes(genreRequest))

    if(filterGenre.length > 0){
        response.status(200).json({
            message: "Genero encontrado",
            filterGenre
        })
    } else {
        response.status(404).send({
            messsage: "Genero não encontrado"
        })
    }
}

const buscaSerie = (request, response) => {
    const idRequest = request.params.id
    const serieFound = seriesJson.find(serie => serie.id == idRequest)

    if(serieFound) {
        response.status(200).send({
            message: "Série encontrada",
            serieFound
        })
    } else {
        response.status(404).send({
            message: "Erro ao encontrar série"
        })
    }
}

const addSerie = (request, response) => {
    try{
        const {id, name, genre, synopsis, liked, seasons} = request.body
        let newSerie = {
            id: seriesJson.length + 1, name, genre, synopsis, liked, seasons
        }

    seriesJson.push(newSerie)

        response.status(201).json({
            message: "Série cadastrada",
            seriesJson
        })
    } catch(err){
        response.status(500).send({
            message: "Erro ao efetuar o cadastro"
        })
    }   
}

//desafio

const addEpisode = (req, res) => {
    try {
      const serieId = req.params.id // guardar o id passado na request
      const serieToUpdate = series.find((serie) => serie.id == serieId) // procurar no array esse id que foi passado
  
      // verifique se a serie existe
        if (serieToUpdate) {
            const seasonId = req.params.seasonId //guarda o id da serie q a gata passou no request
            const seasonToUpdate = serieToUpdate.seasons.find((season) => season.id == seasonId) 
            // procura esse id no array de seasons no id de series informado
        
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
    getSeries,
    getGenero,
    buscaSerie,
    addSerie,
    addEpisode
}