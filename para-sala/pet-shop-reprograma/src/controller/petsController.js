const pets = require('../models/pets.json')
const fs = require('fs')

const postPet = (req, res) => {

    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({id: (pets.length =1), nomeFantasia, endereco, telefone, atende})










}