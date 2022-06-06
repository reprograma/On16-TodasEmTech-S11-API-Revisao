
// ROTAS E METODOS

// chamar o controller das petshops
const controller = require('../controller/petsController.js')
// invocando express
const express = require('express')

// ativando funcao de rotas do express
const router = express.Router()

// router.metodohttp (rota, funcao)

// - Preciso criar uma rota que liste todos os petshops
router.get('/lojas', controller.getAllShops)

// - Preciso criar uma rota que liste os petshops por id
router.get('/loja/:id', controller.getShop)

// - Preciso criar uma rota que liste os petshops por animal atendido
router.get('/animal', controller.porAnimal)

// - Preciso criar uma rota que liste os petshops por estado 
router.get('/estado', controller.porEstado)

// - Preciso criar uma rota que cadastre um novo petshop
router.post('/novapet', controller.newPetShop)

// - Preciso criar uma rota que atualize o nome do petshop
router.patch('/update/name/:id', controller.updateName)

// - Preciso criar uma rota que atualize TODOS os dados do petshop MENOS o id
router.put('/updateshop/:id', controller.updateShop)

// - Preciso criar uma rota que delete um petshop q eu n gostei
router.delete('/delete/:id', controller.deleteShop)


//exportando para ser usado no app.js
module.exports = router





