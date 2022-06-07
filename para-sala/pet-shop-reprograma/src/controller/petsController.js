const pets = require('../models/pets.json')
const fs = require('fs')

const createPet = (req, res) => {
    const { id, nomeFantasia, endereco, telefone, atende } = req.body
    pets.push({ id: (pets.length + 1), nomeFantasia, endereco, telefone, atende })
    //para escrever no VS code as atualizações, usar fs
    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { //gravando novo pet no array pets
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("arquivo atualizado com sucesso")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet criado no array de pets
            res.status(200).send(petFound)
        }
    })
}

const deletePet = (req, res) => {
    try {
        const petId = req.params.id
        const petFound = pets.find(pet => pet.id == id) // encontrar pet pelo id
        const petIndex = pet.IndexOf(petFound) // identificar o índice do pet no array

        if (petIndex >= 0) {//verificar se o pet existe no array
            pets.splice(petIndex, 1) // remover pet pelo índice
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    8
                    console.log("pet deletado com sucesso!")
                    res.sendStatus(204)
                }
            })
        } else {
            res.status(404).send({ message: "pet não encontrado!" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "erro ao deletar o pet" })
    }
}


const updatePet = (req, res) => {
    try {
        const petId = req.params.id
        const petUpdate = req.body // requisições no corpo do texto para atualização
        const petFound = pets.find(pets => pet.id == petId) // separar o pet que irei escolher
        const petIndex = pets.index = pets.indexOf(petFound) // separar o índice do pet no array de pets

        if (petIndex >= 0) {// verifico a eistência do pet no array de pets
            pets.splice(petIndex, 1, petToUpdate) // atualizando o array de pets com novos dados

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("arquivo atualizado com sucesso!")
                    const petUpdated = pets.find(pet => pet.id == petId) //separo o pet que modifiquei
                    res.status(200).send(petUpdated) // enviar pet modificado
                }
            })
        } else {
            res.status(404).send({ message: "pet não encontrado para atualização" })
        }
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const updateName = (req, res) => {
    try {
        const petId = req.params.id
        const nomeFantasia = req.body.nomeFantasia
        const petFound = pets.find(pet => pet.id == petId) // encontrando o pet
        const petIndex = pets.indexOf(petFound) // identifico o índice do pet no array

        if (petIndex >= 0) {//verifico se o pet existe no array de pets
            petFound.nomeFantasia = nomeFantasia // atualizamos o objeto com novo nome
            pets.splice(petIndex, 1, petFound) //atualizando array de pets com o pet atualizado

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("arquivo atualizado com sucesso!")
                    const petUpdated = pets.find(pet => pet.id == petId) // separa o que modifiquei no array
                    res.status(200).send(petUpdated) // envia o pet modificado como resposta
                }
            })

        } else {
            res.status(404).send({ message: "pet não encontrado, não foi possível modificar o nome" })
        }
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

// puxar todos os pets (filtrados ou não)

const getAllPets = (req, res) => {
    const animal = req.query.animal // puxa a informação do animal na query string
    const estado = req.query.estado // puxa a informação do estado na query string
    let allPets = pets
    if (animal) {// depois de passar a query string  na hora do request
        allPets = pets.filter(pet => pet.atende.includes(animal)) // todos os pets que atendem o animal em questão

    }

    if (estado) {
        const petByEstado = pets.filter(pet => pet.endereco.toLocaleLowerCase.includes(estado)) // encontra todos os pets em determinado estado
        if (animal) {//verificar se o filtro do animal foi informado
            allPets = petByEstado.filter(pet => allPets.includes(pet)) // junção de animais encontrados por pets e endereço
        } else {
            allPets = petByEstado
        }
    }
    res.status(200).send(allPets)// retorna todos os pets
}

const getPet = (req, res) => {
    const petId = req.params.id
    const petFound = pets.find(pet => pet.id == petId)
    if (petFound) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "pet não encontrado" })
    }
}

const getPetByAtende = (req, res) => {
    let atendeRequest = pet.query.atende
    console.log(atendeRequest)
    let petFound = pets.filter(pet => pet.atende.includes(atendeRequest))
    console.log(petFound)
    if (petFound.length > 0) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "não encontramos estabelicimento que possa atender seu bichinho" })
    }
}

module.exports = {
    createPet,
        deletePet,
        updateName,
        updatePet,
        getAllPets,
        getPet,
        getPetByAtende
}