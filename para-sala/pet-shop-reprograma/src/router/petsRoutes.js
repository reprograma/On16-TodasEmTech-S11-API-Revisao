const controller = require('../controller/petsController')

const express = require('express');


const router = express.Router();


//get
router.get("/allShop", controller.getAllShop)
//get/id
router.get("/shop/:id", controller.getIdShop)
//get/atendimento
router.get("/shop/services", controller.getServes)
//get/estado

//post

//put

//patch

//delete


module.exports = router;