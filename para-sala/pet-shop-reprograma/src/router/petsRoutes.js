const express = require('express') //além de app.js, precisa chamar aqui tb
const router = express.Router() //essa constante é apenas para escrever na linha 6 só router e não precisar escrever express.router
const controller = require('../controller/petsController')

router.get('/lista', controller.listaPetShops)
router.get('/:id', controller.petById)
router.post('/adicionar', controller.postPet)
router.patch('/name/:id', controller.updateName)

//POST   localhost:2022/pets/adicionar
module.exports = router



