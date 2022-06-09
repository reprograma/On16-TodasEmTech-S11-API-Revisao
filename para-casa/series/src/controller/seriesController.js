const series = require('../models/series.json')


//retorna todas as séries (get)
const getAllSeries = (request, response) => {
    try {
        response.status(200).json([
            {
            "series": series
        }
    ])
    } catch (err) {
        response.status(500).send({ mensagem: "erro no servidor" })
    }
}

//retorna séries de um gênero específico (get)
const getByGenre = (request, response) => {
    try {
        let genreRequest = request.query.genre
        let genreFilter = series.filter(series => series.genre.includes(genreRequest),)

        if (genreFilter.length > 0) {
            response.status(200).send(genreFilter)
        } else {
            response.status(404).send({ mesage: "Gênero não encontrado" })
        }
    
    } catch (err) {
    response.status(500).send({ mensagem: "Erro no servidor" })
    }
}


// retorna série específica por id (get)
const getById = (request, response) => {
    try{
    let idRequest = request.params.id

    let idEncontrado = series.find(series => series.id == idRequest)

    response.status(200).send(idEncontrado)

    } catch (err){
        response.status(404).send({mensagem:"id não encontrado"})
    }
}

// //Cadastra nova série (post)
const createSerie = (request, response) => {
    try{
       let nameRequest = request.body.name
       let genreRequest = request.body.genre
       let synopsisRequest = request.body.synopsis
       let likedRequest = request.body.liked

       let novaSerie = {
           id : Math.floor(Date.now() * Math.random()).toString(36),
           name: nameRequest,
           genre : genreRequest,
           synopsis : synopsisRequest,
           liked : likedRequest,
       }

       series.push(novaSerie)

       response.status(201).json([{
           mensagem: 'Série cadastrada com sucesso', novaSerie,
       },
    ])
    } catch (err) {
        response.status(500).send({mensagem: 'Erro ao cadastrar'})
    }
}

// deleta uma série pelo id (delete)
const deleteById = (request, response) => {
    const idRequest = request.params.id
    let serieId = series.findIndex(series => series.id == idRequest)
    idDeletado = series.filter(series => series.id == idRequest)

    series.splice(serieId, 1)

    if (serieId > -1) {
        response.status(200).json([{
            "mensagem": "Série deletada com sucesso",
            idDeletado,
            series
        },
    ])
    }else {
        response.status(404).send([{ mensagem: "A série não foi deletada"}])
    }
}

// //Atualiza se gostou da série (patch)
const updateLiked = (request, response) => {
    try{
        const idRequest = request.params.id
        const likedRequest = request.body.liked
        likedFilter = series.find(series => series.id == idRequest)

        if (likedFilter) {
            likedFilter.liked = likedRequest

            response.status(200).json([
                {
                mensagem: "Status alterado com sucesso",
                series,
            },
        ])
        } else {
            response.status(404).json([
                {
                    mensagem: "Status não modificado",
                },
            ])
        }
    } catch (err) {
        response.status(500).send({mensagem: "Erro no servidor"})
    }
}



// //Atualiza a música pelo id (put)
// const updateById = (request, response) => {

//     const idRequest = request.params.id
//     let atualizaRequest = request.body
//     let atualizaFilter = musicas.findIndex((musicas)=> musicas.id == idRequest)

//     musicas.splice(atualizaFilter, 1, atualizaRequest)

//     if (atualizaFilter > -1) {
//         response.status(200).json([
//             {
//                 mensagem: "Música atualizada com sucesso",
//                 musicas,

//             },
//         ])
//     } else{
//         response.status(404).send([{ mensagem: "A música não foi modificada"}])
//     }
// }


// module.exports = {
//     getAllMusics,
//     getByArtists,
//     getById,
//     createMusic,
//     updateFavorited,
//     deleteById,
//     updateById
// }
module.exports = {
    getAllSeries,
    getByGenre,
    getById,
    createSerie,
    deleteById,
    updateLiked
} 