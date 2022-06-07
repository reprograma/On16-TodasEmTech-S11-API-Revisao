const pets = require('../models/pets.json')
const fs = require('fs')

const postPet = (req, res) => {

    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({id: (pets.length +1), nomeFantasia, endereco, telefone, atende})

    fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', function(err) { //gravando novo pet no array de pets
        if(err) {
            res.status(500).send({message: err})
        } else {
            console.log('Arquivo atualizado')
            const petFound = pets.find((pet) => pet.id == id) //recupero o pet q foi criado no array de pets
            res.status(200).send(petFound)
        }
    })

res.status(200).send({message: 'Sucessoooooooooo'})
}

const updateName = (req, res) => {

    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia

    const petFound = pets.find(pet => pet.id == idPetRequest) // encontrando o pet
    const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array

    if (petIndex >= 0){
    petFound.nomeFantasia = nomeFantasiaRequest
                //encontrou o indice //remove um item (nome fantasia)//adiciona (novo nome fantasia)
    pets.splice(petIndex, 1, petFound)


    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Teu arquivo foi alterado");
            const petUpdated = pets.find(pet => pet.id == idPetRequest)
            res.status(200).send(petUpdated)
        }})


    } else {
        res.status(404).send({ message: "Nao encontramos esse petshop, cadastra ai miga"})
        }
    }
module.exports = {
    postPet,
    updateName

}