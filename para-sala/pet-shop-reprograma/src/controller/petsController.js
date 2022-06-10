const pets = require('../models/pets.json')
const fs = require('fs')
const { response } = require('../app')

const postPet = (req, res) => {

    const { id, nomeFantasia, endereco, telefone, atende } = req.body
    pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende })

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
            res.status(200).send(petFound)
        }
    })
}

const updateName = (req, res) => {

    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia
    
    const petFound = pets.find(pet => pet.id == idPetRequest) // encontrando o pet
    const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array
    
    if (petIndex >= 0){
        petFound.nomeFantasia = nomeFantasiaRequest
        //encontrou //remove //adiciona
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
    res.status(404).send({ message: "PetShop não encontrado"})
    }
} 

const allPets = (req, res) => {

    try{
        res.status(200).json([{ Petshops : pets }])
    }catch{
        res.status(500).send({ message : "Erro no server" })
    }
}

const petsById = (req, res) => {

    const idRequest = req.params.id

    const idFilter = pets.filter( petshop => petshop.id == idRequest )

    if( idFilter.length > 0 ){
        res.status(200).send(idFilter)
    }else{
        res.status(404).send({ message : "Petshop não encontrado"})
    }

}

const petsByState = (req, res) => {

    let stateRequest = req.query.endereco

    let stateFilter = pets.filter( pet => pet.endereco.includes(stateRequest))

    if (stateFilter.length > 0 ){
        res.status(200).send(stateFilter)
    }else{
        res.status(400).send({messege : "Estado não localizado"})
    }
}

const petsService = (req, res) => {

    let serviceRequest = req.query.atende

    let serviceFilter = pets.filter( pets => pets.atende.includes(serviceRequest))

    if( serviceFilter.length > 0){
        res.status(200).send(serviceFilter)
    }else{
        res.status(400).send({ messege : "Atendimento não encontrado"})
    }
}


const petUpdate = (req, res) => {

    const idRequest = req.params.id
    const { nomeFantasia, endereco, telefone, atende } = req.body


    const petFound = pets.find(pet => pet.id == idRequest) // encontrando o pet
    const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array
    
  
    if (petIndex != -1 ){

        pets[petIndex] = {id: parseInt(idRequest), nomeFantasia, endereco, telefone, atende}
        res.status(200).send(pets[petIndex])

        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
        res.status(500).send({ message: err })

        } else {
        console.log("As informações foram alteradas");
        const petUpdated = pets.find(pet => pet.id == idRequest)
        res.status(200).send(petUpdated)
        }})
    } else {
    res.status(404).send({ message: "Petshop não encontrado"})
    }
   
} 

const petDelete = (req, res) => {

    const idRequest = req.params.id
    const indexPet = pets.findIndex( pet => pet.id == idRequest)

    if(indexPet != -1){
        pets.splice(indexPet, 1)

        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
        res.status(500).send({ message: err })

        } else {
            res.status(200).send({message : "O petshop foi deletado"})
        }})
    }else{
        res.status(404).json({ message : "Petshop não encontrado"})
    }
}


module.exports = {
    postPet,
    updateName,
    allPets,
    petsById,
    petsByState,
    petsService,
    petUpdate,
    petDelete
}