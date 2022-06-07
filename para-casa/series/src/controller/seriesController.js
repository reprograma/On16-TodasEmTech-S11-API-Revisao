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

const byGenre = (req, res) => {
    
}

const findId =  (req, res) => {
    
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