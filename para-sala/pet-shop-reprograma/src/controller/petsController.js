// Funções com a lógica das nossas rotas:

const pets = require('../models/pets.json')
const fs = require('fs')

const postPet = (req, res) => {
    const {
        id,
        nomeFantasia,
        endereco,
        telefone,
        atende
    } = req.body
    pets.push({
        id: pets.length + 1,
        nomeFantasia,
        endereco,
        telefone,
        atende
    })

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
            res.status(500).send({
                message: err
            })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
            res.status(200).send(petFound)
        }
    })
    res.status(200).send({
        message: "Sucessooo!!!"
    })
}

const updateName = (req, res) => {

    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia

    const petFound = pets.find(pet => pet.id == idPetRequest) // Encontrando o pet
    const petIndex = pets.indexOf(petFound) // Identificando o indice do pet no meu array

    if (petIndex >= 0) {
        petFound.nomeFantasia = nomeFantasiaRequest
        //encontrou , remove , adiciona
        pets.splice(petIndex, 1, petFound)

        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
            if (err) {
                res.status(500).send({
                    message: err
                })
            } else {
                console.log("Seu arquivo foi alterado com sucesso!")
                const petUpdate = pets.find(pet => pet.id == idPetRequest)
                res.status(200).send(petUpdate)
            }
        })

    } else {
        res.status(404).send({message: "Não encontramos esse petshop, é necessário cadastra-lo"})
    }
}




module.exports = {
    postPet,
    updateName
}