const controller = require('../controller/petsController')

const express = require('express');


const router = express.Router();


//get
router.get('/shop/all', controller.getAllShop)
//get/id
router.get('/shop/:id', controller.getIdShop)
//get/atendimento
router.get('/services', controller.getServes)
//get/estado 
router.get('/stades', controller.getStades)
//post
router.post('/shop/add', controller.postPet)
//put
router.put('/shop/update', controller.putPet)
//patch

//delete


module.exports = router;