const express = require('express') //chamando o express

const router = express.Router() //função router que tem dentro do express e ajuda a gente a manipular melhor as rotas queestão dentro do arquivo

const controller = require('../controller/petsController')

//ATENÇÃO AQUI
router.post('/adicionar', controller.postPet)
router.patch('/updateName/:id', controller.updateName)

module.exports = router;