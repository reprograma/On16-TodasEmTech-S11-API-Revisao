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

// //Cadastra nova música (post)
// const createMusic = (request, response) => {
//     try{
//        let titleRequest = request.body.title
//        let launchYearRequest = request.body.launchYear
//        let favoritedRequest = request.body.favorited
//        let artistsRequest = request.body.artists

//        let novaMusica = {
//            id : Math.floor(Date.now() * Math.random()).toString(36),
//            title: titleRequest,
//            launchYear : launchYearRequest,
//            favorited : favoritedRequest,
//            artists : artistsRequest,
//        }

//        musicas.push(novaMusica)

//        response.status(201).json([{
//            mensagem: 'Música cadastrada com sucesso', novaMusica,
//        },
//     ])
//     } catch (err) {
//         response.status(500).send({mensagem: 'Erro ao cadastrar'})
//     }
// }

// //Atualiza favoritos (patch)
// const updateFavorited = (request, response) => {
//     try{
//         const idRequest = request.params.id
//         const favoritedRequest = request.body.favorited
//         favoritedFilter = musicoteca.find((task) => task.id == idRequest)

//         if (favoritedFilter) {
//             favoritedFilter.favorited = favoritedRequest

//             response.status(200).json([
//                 {
//                 mensagem: "Favoritos alterados com sucesso",
//                 musicoteca,
//             },
//         ])
//         } else {
//             response.status(404).json([
//                 {
//                     mensagem: "Seus favoritos não foram modificados",
//                 },
//             ])
//         }
//     } catch (err) {
//         response.status(500).send({mensagem: "Erro ao cadastrar"})
//     }
// }

// //deleta música pelo id (delete)
// const deleteById = (request, response) => {
//     const idRequest = request.params.id
//     let musicId = musicas.findIndex((musicas) => musicas.id == idRequest)
//     idDeletado = musicas.filter(musicas => musicas.id == idRequest)

//     musicas.splice(musicId, 1)

//     if (musicId > -1) {
//         response.status(200).json([{
//             "mensagem": "música deletada",
//             idDeletado,
//             musicas
//         },
//     ])
//     }else {
//         response.status(404).send([{ mensagem: "A música não foi deletada"}])
//     }
// }

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
    getById
} 