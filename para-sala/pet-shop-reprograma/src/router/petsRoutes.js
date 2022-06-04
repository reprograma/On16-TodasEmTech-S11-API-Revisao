const controller = require('../controller/petsController')

const express = require('express');


const router = express.Router();


//get
router.get('/allShop', controller.getAllShop)
//get/id
router.get('/shop/:id', controller.getIdShop)
//get/atendimento
router.get('/shop/services', controller.getServes)
//get/estado router.get('/shop/stades', controller.getStades)
//post
router.post('/shop/add', controller.postPet)
//put

//patch

//delete


module.exports = router;