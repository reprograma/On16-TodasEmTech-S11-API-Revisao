const pets = require('../models/pets.json')
const fs = require('fs')

const postPet = (req, res) => {

    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({id: (pets.length =1), nomeFantasia, endereco, telefone, atende})

    fs.writeFile('./src/models/pets.json'), JSON.stringify(pets), 'utf8', function(err) {

        if(err) {
            res.status(500).send({message : err})
        }else{
            console.log('arquivo atualizado')
            const petFound = pets.find(pet => pet.id == id)
            res.status(200).send(petFound)
        }
    }
}





module.exports = {
    postPet
}