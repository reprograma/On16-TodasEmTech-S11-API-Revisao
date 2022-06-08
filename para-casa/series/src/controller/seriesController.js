// controllers

// começo requerendo os models
const series = require('../models/series.json')
// para puxar todas as series

const allSeries = (req, res) => {
    // não preciso fazer nenhuma requisição, posso colocar um try catch pra evitar erros do serv
    // com status ok, aprensento os models
    try {
    res.status(200).json({
        'Séries Disponíveis': series
    })
} catch (err) {
    res.status(500).send({ message: "Error" })
}

}
// buscar series por genero
const byGenre = (req, res) => {
    // buscando genero para filtrar e deixando em caixa baixa
    let genre = req.query.genre.toLowerCase()
    // filtrando por genero
    let serieFiltered = series.filter((serie) => {
        // preciso passar pelo array para deixar em caixa baixa as strings do json
    genreLowerCase = serie.genre.map((string) => string.toLowerCase())
    // me de o retorno que inclua a requisição
        return genreLowerCase.includes(genre)
    })
        
// se ao filtrar encontrou algum
  if (serieFiltered.length > 0) {
      //me mostra
    res.status(200).send(serieFiltered)
// se não
} else {
    // me avisa
    res.status(404).send({
        message: "não encontrei series desse gênero"
    })
}
}    
// encontrar por id
const findId =  (req, res) => {
    try {
        let serieId = req.params.id

        let sfiltered = series.filter((s) => s.id == serieId)

    if (sfiltered.length > 0) {
    res.status(200).json({
        message: "Série encontrada!", sfiltered
        })
    } else { 
    res.status(404).send({
        message: "não encontrei esse id"
        })
    }
} catch(err) {
        res.status(500).send({ message: "Error" })
    }
}

const newSerie =  (req, res) => {
    
}

const deleteSerie =  (req, res) => {
    
}

const likeSerie =  (req, res) => {
    
}


module.exports = {
allSeries,
byGenre,
findId,
newSerie,
deleteSerie,
likeSerie
}