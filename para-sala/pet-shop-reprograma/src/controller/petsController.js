const pets = require('../models/pets.json')
const fs = require('fs')

const postPet = (req, res) => {

    const { id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({id:(pets.length +1), nomeFantasia, endereco, telefone, atende})

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function(err){ //gravando novo pet no array
        if(err){
            res.status(500).send({message: err})
        } else{
            console.log("arquivo atualizado")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets
            res.status(200).send(petFound)
        }
        })
    res.status(200).send({message: "SUCESSSSOOOOOO"})    
    }

const updateName = (req, res) => {

        let idPetRequest = req.params.id
        let nomeFantasiaRequest =req.body.nomeFantasia

        const petFound = pets.find( pet => pet.id == idPetRequest) // encontrando o pet
        const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array
    
        if (petIndex >= 0){
            petFound.nomeFantasia = nomeFantasiaRequest

            pets.splice(petIndex, 1, petFound)
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function(err){ //gravando novo pet no array
                if(err){
                    res.status(500).send({message: err})
                } else{
                    console.log("Teu arquivo foi alterado");
                    const petUpdated = pets.find(pet => pet.id == idPetRequest)
                    res.status(200).send(petUpdated)
                }})
                } else {
                    res.status(404).send({message: "Não encontramos esse petshop, cadastra ai miga"})
                }   
        }
        
// Rota que liste todos os petshops (GET)

const getAllPetShops = (req, res) => {
    try{
    res.status(200).json([{
        "petshops": pets
    }])
    } catch(err){
    res.status(500).send({message: "erro no server"})
    }}

// Rota que lista os podcasts por id (GET)

const getPetshopsById = (req, res) => {
    try { 
    const idRequest = req.params.id
    const idEncontrado = pets.filter(pets => pets.id == idRequest)
    if (idEncontrado.length > 0){
        res.status(200).send(idEncontrado)
    } else {
        res.status(400).send([{
            "message": "Esse id não existe"
        }])
    }} catch(err) {
     res.status(500).send({ message: "Erro no server"})    
    }
}

// Pet por atendimento
const getPetByAtendende = (req, res) => {
    let atendeRequest = req.query.atende
    let petFound = pets.filter(pet => pet.atende.includes(atendeRequest))
   
    if (petFound.length > 0) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "Nao encontramos estabelecimento que atenda seu bichinho" })
    }
}
//  Pet por estado

const getPetByEstado = (req, res) => {
    let stateRequest = req.query.endereco
    let petFound = pets.filter(pet => pet.endereco.includes(stateRequest))
   
    if (petFound.length > 0) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "Nao encontramos estabelecimento nesse estado" })
    }
}

// Atualizar petshop

const updatePet = (req, res) => {
    try {
        const petId = req.params.id
        const petToUpdate = req.body //Pego o corpo da requisição com as alterações

        const petFound = pets.find(pet => pet.id == petId) // separo o pet que irei atualizar
        const petIndex = pets.indexOf(petFound) // separo o indice do pet no array de pets

        if (petIndex >= 0) { // verifico se o pet existe no array de pets
            pets.splice(petIndex, 1, petToUpdate) // atualizando o array de pets com os novos dados

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petUpdated = pets.find(pet => pet.id == petId) // separo o pet que modifiquei no array
                    res.status(200).send(petUpdated) // envio o pet modificado como resposta
                }
            })
        } else {
            res.status(404).send({ message: "Pet não encontrado para ser atualizado" })
        }

    } catch (err) {
        res.status(500).send({ message: err })
    }
}

// rota pra deletar pet 

const deletePet = (req, res) => {
    try {
        const petId = req.params.id
        const petFound = pets.find(pet => pet.id == petId) // encontro o pet pelo id
        const petIndex = pets.indexOf(petFound) // identifico o índice do pet no meu array

        if (petIndex >= 0) { // verifico se o pet existe no array de pets
            pets.splice(petIndex, 1) // removo o pet pelo índice
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {8
                    console.log("Pet deletado com sucesso do arquivo!")
                    res.sendStatus(204)
                }
            })
        } else {
            res.status(404).send({ message: "Pet não encontrado para ser deletado" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o pet" })
    }
}


module.exports = {
    postPet,
    updateName,
    getAllPetShops,
    getPetshopsById,
    getPetByAtendende,
    getPetByEstado,
    updatePet,
    deletePet
}    