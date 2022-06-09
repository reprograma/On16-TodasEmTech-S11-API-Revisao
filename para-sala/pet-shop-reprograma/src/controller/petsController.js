const pets = require('../models/pets.json')
const fs = require('fs') //importado no controller

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

const getAllPetShops = (req, res) => {

    try {
        res.status(200).send({ 'PetShops:': pets})

    }catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }
}

const getPetShopsById = (req, res) => {

    try {

        const idRequest = req.params.id 

        const petIdFilter = pets.filter(pet => pet.id == idRequest)

        if (petIdFilter.length > 0) {
            
            res.status(200).send(petIdFilter)

        } else {
            res.status(404).send({ message: 'Not found'})
        }

    }catch(err) {

        res.status(500).send({ message: 'Internal error'})
    }
}

const getPetShopsByAtende = (req, res) => {

    let atendeRequest = req.query.atende

    let petsFilter = pets.filter(pet => pet.atende.includes(atendeRequest))

    if (petsFilter.length > 0) {
        res.status(200).send(petsFilter)

    } else {
        res.status(404).send({ message: "Establishment not found" })
    }
} // verificar pq não está rodando no postman


const getPetShopsbyState = (req, res) => {

    const stateRequest = req.query.endereco

    const petsFilter = pets.filter(pet => pet.endereco.includes(stateRequest))

    if (petsFilter.length > 0) {

        res.status(200).send(petsFilter)

    } else {

        res.status(404).send({ message: 'State not found'})
    }
} // verificar pq não está rodando no postman


const updatePetShop = (req, res) => {

    try {

        const idRequest = req.params.id 
        
        const petShopRequest = req.body

        let foundIndex = pets.findIndex(pet => pet.id == idRequest)

        pets.splice(foundIndex, 1, petShopRequest)

        res.status(200).send({ message: 'PetShop updated', petShopRequest})

    } catch(err) {

        res.status(500).send({ message: 'Internal error'})
    }
}

const deletePetShop = (req, res) => {

    try {

        const idRequest = req.params.id

        let petShopIndex = pets.findIndex(pet => pet.id == idRequest)

        pets.splice(petShopIndex, 1)

        res.status(200).send({ message: 'PetShop deleted', petShopIndex})

    } catch(err) {res.status(500).send({message: 'Internal error'})}
}


module.exports = {
    postNewPetShop,
    updateNameById,
    getAllPetShops,
    getPetShopsById,
    getPetShopsByAtende,
    getPetShopsbyState,
    updatePetShop,
    deletePetShop
}