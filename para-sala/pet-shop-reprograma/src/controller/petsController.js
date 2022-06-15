const pets = require("../models/pets.json")
const fs = require("fs")




const getAllPets = (req,res) => {

    try {
        res.status(200).json([
            {
                petshops: pets,
            },
        ])
    } catch (err) {
        res.status(500).send({message: 'Erro no server'})
    }
}

//pet por id
const getPetById = (req, res) => {
    const idPetRequest = req.params.id
    const petFound = pets.find((pet) => pet.id == idPetRequest)
    if (petFound) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({message: "O petshop não foi encontrado :("})
    }
}

//pet por atendimento
const getPetByAttendance = (req, res) => {
    let attendanceRequest= req.query.atende
    console.log(attendanceRequest)

    let petFound = pets.filter(pet => pet.atende.includes(attendanceRequest))
   
    console.log(petFound)
    
    if (petFound.length > 0) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "Não foi encontrado nenhum petshop que atenda seu animal" })
    }
}
//pet por endereço
const getPetByState= (req, res) => {
    const stateRequest = req.query.endereco

    let stateFilter = pets.filter((pet) => pet.endereco.includes(stateRequest))
    if (stateFilter.length > 0) {
        res.status(200).send(stateFilter)
    } else {
        res.status(404).send({message: 'Endereço não encontrado'})
    }
}

//pet postar
const createPet = (req, res) =>  {
    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({id: (pets.length + 1), nomeFantasia, endereco, telefone, atende})

    fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', function (err) {
        if (err) {
            res.status(500).send({message: err})
        } else {
            console.log('Arquivo atualizado com sucesso!')
            const petFound = pets.find((pet) => pet.id == id) 
            res.status(200).send(petFound)
        }
    })
}

//updadetar o nome 
const updateName = (req, res) => {
    try {
        const petId = req.params.id
        const fantasyName = req.body.nomeFantasia
        const petFound = pets.find((pet) => pet.id == petId) 
        const petIndex = pets.indexOf(petFound) 

        if (petIndex >= 0) { 
            petFound.nomeFantasia = fantasyName
            pets.splice(petIndex, 1, petFound)

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petUpdated = pets.find((pet) => pet.id == petId) 
                    res.status(200).send(petUpdated) 
                }
            })
        } else {
            res.status(404).send({ message: "Pet não encontrado para modificar o nome." })
        }

    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const updatePet = (req, res) => {
    try {
        const petId = req.params.id
        const petToUpdate = req.body 

        const petFound = pets.find((pet) => pet.id == petId) 
        const petIndex = pets.indexOf(petFound) 

        if (petIndex >= 0) {
            pets.splice(petIndex, 1, petToUpdate) 

            fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petUpdated = pets.find((pet) => pet.id == petId)
                    res.status(200).send(petUpdated) 
                }
            })
        } else {
            res.status(404).send({ message: "Pet não encontrado para ser atualizado" })
        }

    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const deletePet = (req, res) => {
    try {
        const petId = req.params.id
        const petFound = pets.find((pet) => pet.id == petId) 
        const petIndex = pets.indexOf(petFound) 

        if (petIndex >= 0) {
            pets.splice(petIndex, 1) 
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Pet deletado com sucesso do arquivo!")
                    res.sendStatus(204)
                }
            })
        } else {
            res.status(404).send({message: "Pet não encontrado para ser deletado"})
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({message: "Erro ao deletar o pet"})
    }
}










module.exports = {

    getAllPets,
    getPetById,
    createPet,
    deletePet,
    updateName,
    updatePet,
    getPetByAttendance,
    getPetByState


}