// controllers

// começo requerendo os models
const series = require('../models/series.json')

// executando fs
const fs = require('fs')

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
    // filtrando por genero EM CAIXA BAIXA
    let serieFiltered = series.filter(string => string.genre.toLowerCase().includes(genre))
        
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

const addSerie =  (req, res) => {

    const {id, name, genre, synopsis, liked, seasons} = req.body
    series.push({id: (series.length + 1), name, genre, synopsis, liked, seasons})

// tentei fazer assim, mas por algum motivo deu erros pra sempre no path, conferi mil vezes. nao vai. 
// entao comenteipra mais tarde ver
    // fs.writeFile("../models/series.json", JSON.stringify(series), 'utf8',
    // function (err) {
    //     // se der erro
    //     if(err) {
    //         res.status(500).send({message: err})
    //     }
    //     // se deu certo, 
    //      else {
    //         // dá um salve
    //         console.log("seu catálogo de séries foi atualizado")
    //         // encntra o objeto pelo id
    //         const serieFound = series.find((s) => s.id == id)
    //         // e me mostra o que encontraste
    //         res.status(200).send(serieFound)
    //     }
    // })
    res.status(201).json([
        {
          message: "cadastro de nova serie realizada com sucesso", 
          series
        },
      ])
    
}

const deleteSerie =  (req, res) => {
    // acho a série pelo ID para deletar
    let serieId = req.params.id
    let sfound = series.find((s) => s.id == serieId)

    // encontro e tira uma da lista
  series.splice(sfound, 1);
  // se achar e deletar, missão cumprida
  if (sfound) {
    res.status(200).json([
      {
        message: "Série excluida", serieId,
        series,
      },
    ]);
    // ai poxa, essa não tem
  } else {
    res.status(404).send([
      {
        message: "Série não encontrada",
      },
    ]);
  }
}

const likeSerie =  (req, res) => {
    
}


module.exports = {
allSeries,
byGenre,
findId,
addSerie,
deleteSerie,
likeSerie
}