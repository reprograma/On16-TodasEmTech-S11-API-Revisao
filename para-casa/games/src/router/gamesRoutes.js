//importando o express para usar o .router (que é uma função do Express)
const express = require('express')

// guardando a função express.Router em uma const para simplificar a criação das rotas
const router = express.Router()

//acessando a pasta controller para integrar a lógica das rotas
const controller = require('../controller/gamesController')

//criando as rotas:

//retorna todos os jogos da lista Json
router.get('/games', controller.getGames)

// //retorna apenas um jogo da lista
router.get('/games/:id', controller.getGamesId)

// //cadastrar novo jogo
// router.post('/games', controller.addGames)

// //deletar um jogo especifico 
// router.delete('/games/:id', controller.deleteGames)

// //atualizar avaliação do jogo, campo "liked" da lista Json
// router.patch('/games/:id/liked', controller.updateGames)

module.exports = router;