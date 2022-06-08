// Funções com a lógica das nossas rotas:

const pets = require('../models/pets.json')
const fs = require('fs')
const {
    request
} = require('http')

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
        res.status(404).send({
            message: "Não encontramos esse petshop, é necessário cadastra-lo"
        })
    }
}

const getAllpets = (req, res) => {
    try {
        res.status(200).json([{
            "Petshops": pets
        }])
    } catch (err) {
        res.status(500).send({
            "message": "Erro no servidor"
        })
    }
}

const getPetsId = (req, res) => {
    const idRequest = req.params.id
    let petFound = pets.filter(pets => pets.id == idRequest)
    if (petFound.length > 0) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send([{
            "message": "Petshop não encontrado"
        }])
    }
}

const getPetsAtende = (req, res) => {
    const atendimentoRequest = req.query.atende
    let atendeFilter = pets.filter(pets => pets.atende.includes(atendimentoRequest))
    if (atendeFilter.length >= 0) {
        res.status(200).send(atendeFilter)
    } else {
        res.status(404).send([{
            "message": "Petshop não encontrado"
        }])
    }
}

const getPetsEndereco = (req, res) => {
    const enderecoRequest = req.query.endereco
    let enderecoFilter = pets.filter(pets => pets.endereco.includes(enderecoRequest))
    if (enderecoFilter.length >= 0) {
        res.status(200).send(enderecoFilter)
    } else {
        res.status(404).send([{
            "message": "Petshop não encontrado"
        }])
    }
}

const updateAllDatas = (req, res) => {
    try {
        const idRequest = req.params.id
        const petRequest = req.body

        let indexEncontrado = pets.findIndex(pets => pets.id == idRequest)

        pets.splice(indexEncontrado, 1, petRequest)
        res.status(200).json([{
            "message": "Petshop atualizado com sucesso!",
            pets
        }])
    } catch (err) {
        console.log(err)
        res.status(500).send([{
            "message": "Erro interno ao atualizar dados"
        }])
    }
}

const deletePets = (req, res) => {
    try {
        const idRequest = req.params.id
        const indicePets = pets.findIndex(pets => pets.id == idRequest)

        pets.splice(indicePets, 1)
        res.status(200).json([{
            "message": "Petshop deletado com sucesso!",
            "deletado": idRequest,
            pets
        }])
    } catch (err) {
        console.log(err)
        res.status(404).send([{
            "message": "Erro interno ao deletar"
        }])
    }
}

module.exports = {
    postPet,
    updateName,
    getAllpets,
    getPetsId,
    getPetsAtende,
    getPetsEndereco,
    updateAllDatas,
    deletePets
}