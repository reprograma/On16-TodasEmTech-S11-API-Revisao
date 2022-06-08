// rotas e métodos

// importar as funções em Controller
const controller = require('../controller/seriesController')

// ativando express
const express = require('express')

// utilizando as funções de router

const router = express.Router()

// para rotas router.metodohttp (rota, funcao)

// [GET]  /series
//         retorna todas as series
router.get('/all', controller.allSeries)
// [GET]   /series/genero
//         filtra series por genero
router.get('/genero', controller.byGenre)
// [GET]   /series/:id
//         retorna apenas uma série específica
router.get('/:id', controller.findId)
// [POST]  /newserie
//         cadastrar nova serie
router.post('/newserie', controller.addSerie)
// [DELETE]/series/:id
//         deletar determinada serie
router.delete('/delete/:id', controller.deleteSerie)
// [PATCH] /series/:id/liked
//         atualizar se curtiu, ou não, a serie
router.patch('/liked/:id', controller.likeSerie)


// DESAFIO

// [POST]  /series/:id/season/:sesasonid/episode
//         cadastrar novo episódio na termporada onde :id é o :id da série
//         e :seasonid é o id da temporada
// [POST]   /series/:id/season
//         cadastrar nova temporada na série onde o :id é o id da série
// [DELETE]/series/:id/season/:seasonid
//         deletar uma temporada específica onde :id é o id da série
//         e :seasonid é o id da temporada
// [DELETE]/series/:id/:seasonid/episode/:episodeid
//         deletar episodio específico na temporada, 
//         onde o :id é o id da série
//         :seasonid, o id da temporada 
//         e :episodeid é o id do episódio
// [PATCH] /series/:id/season/:seasonid/episode/:episodeid/watched
//         atualizar se o episódio já foi assistido,
//         onde o :id é o id da série
//         :seasonid, o id da temporada 
//         e :episodeid é o id do episódio

// exportando para utilizar as rotas em app.js
module.exports = router