const pets = require('../models/pets.json')
const fs = require('fs') //importado no controller
const { response } = require('../app')

const postNewPetShop = (req, res) => {

    //código escrito de maneira mais enxuta

    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({ id: (pets.length + 1), nomeFantasia, endereco, telefone, atende })

    //define o formato que vai ser utilizado no file
    fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', 
    
    function(err) { 
        if(err) {
            res.status(500).send({message:'err'})
        } else {
            console.log('Arquivo atualizado.')
            const petFound = pets.find(pet => pet.id == id)
            res.status(200).send(petFound)
        }
    })

    res.status(200).send({ message:'Sucesso!'})
}

const updateNameById = (req, res) => {

    const idRequest = req.params.id
    const nomeFantasiaRequest = req.body.nomeFantasia

    const petFound = pets.find(pet => pet.id == idRequest) //encontrando o pet

    petIndex = pets.indexOf(petFound) //identificando o índice do pet no meu array
    // precisa do petIndex para usar o splice, se não não dá para modificar o nome

    if (petIndex >= 0) {

        petFound.nomeFantasia = nomeFantasiaRequest
        pets.splice(petIndex, 1, petFound) // encontra, remove, adiciona

        fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8',

            function (err) {
                if (err) {
                    res.status(500).send({ message: 'err' })
                } else {
                    console.log('Arquivo atualizado.')
                    const petUpdated = pets.find(pet => pet.id == idRequest)
                    res.status(200).send(petUpdated)
                }
            })

    res.status(200).send({ message:'Sucesso!'})

    } else {
        res.status(404).send({message:"Pet shop não encontrado."})
    }

}

module.exports = {
    postNewPetShop,
    updateNameById
}