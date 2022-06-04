const pets = require('../models/pets.json')
const fs = require('fs')
const { request } = require('http')
const { response } = require('../app')

const postPet = (request, response) => {
    const { id, nomeFantasia, endereco, telefone, atende } = request.body
    pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende })

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
            response.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets 
            response.status(200).send(petFound)
        }
    })
    response.status(200).send({ 'message': 'Adicionado com sucesso' })
}

const updateName = (request, response) => {
    let idPetRequest = request.params.id
    let nomeFantasiaRequest = request.body.nomeFantasia
    const petFound = pets.find(pet => pet.id == idPetRequest)
    const petIndex = pets.indexOf(petFound)

    if (petIndex > 0) {
        petFound.nomeFantasia = nomeFantasiaRequest
        pets.splice(petIndex, 1, petFound)
        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
            if (err) {
                response.status(500).send({ message: err })
            } else {
                console.log('Arquivo alterado')
                const petUpdate = pets.find(pet => pet.id == idPetRequest)
                response.status(200).send(petUpdate)
            }
        })
    } else {
        response.status(404).send({ 'message': 'Petshop não encontrado, faça um cadastro' })
    }
}

module.exports = {
    postPet,
    updateName,
}