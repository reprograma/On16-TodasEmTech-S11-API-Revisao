const pets = require("../models/pets.json")
const fs = require("fs")

const getAllPets = (req, res) => {
    try {
        res.status(200).json([{
            "pets:": pets
        }])
    } catch (err) {
        res.status(500).send({ message: "Erro no server" })
    }
}

const getPet = (req, res) => {
    const idRequest = req.params.id
    const idFilter = pets.filter(pet => pet.id == idRequest)
    if (idFilter.length > 0) {
        return res.status(200).send(idFilter)
    } else {
        res.status(404).send([{
            "message": "Esse petshop não foi encontrado"
        }])
    }
    res.status(200).send(idFilter)
}

const getByAtendimento = (req, res) => {
    let atendeRequest = req.query.atende
    try {
        let atendeFilter = pets.filter(
            pet => pet.atende.includes(atendeRequest))

        res.status(200).send(atendeFilter)

    } catch (err) {
        res.status(500).send({ message: "Erro no server" })
    }
}

const getByEstado = (req, res) => {
    let estadoRequest = req.query.estado
    try {
        let estadoFilter = pets.filter(
            pet => pet.estado.includes(estadoRequest)
        )
        res.status(200).send(estadoFilter)
    } catch (err) {
        res.status(500).send({ message: "Erro, Estado não encontrado" })
    }
}

const postPet = (req, res) => {
    const { id, nomeFantasia, endereco,estado, telefone, atende } = req.body
    pets.push({ id: (pets.length + 1), nomeFantasia, endereco, estado, telefone, atende })

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8',
        function (err) {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Arquivo atualizado com sucesso")
                const petFound = pets.find(pet => pet.id == id)
                res.status(200).send(petFound)
            }
        })
    res.status(200).send({ message: "É Sucessoooo!!" })
}

const updateName = (req, res) => {
    let = idPetRequest = req.params.id
    let = nomeFantasiaRequest = req.body.nomeFantasia
    const petFound = pets.find(pet => pet.id == idPetRequest)
    
    const petIndex = pets.indexOf(petFound)
    if (petIndex >= 0) {
        petFound.nomeFantasia = nomeFantasiaRequest
      
        pets.splice(petIndex, 1, petFound)
        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
            if (err) {

                res.status(500).send({ message: err })
            } else {

                console.log("Arquivo alterado")

                const petUpdated = pets.find(pet => pet.id ==
                    idPetRequest)

                res.status(200).send(petUpdated)
            }
        })
    } else {
        res.status(404).send({ message: "Não encontramos esse petShop, cadastre-o" })
    }
}

const atualizarPets = (req, res) => {
    const idPetRequest = req.params.id
    const petAtualizado = req.body
    const posicaoPet = pets.findIndex(pet => {
        return pet.id == idPetRequest
    })
    pets.splice(posicaoPet, 1, petAtualizado)
    res.status(200).json([{
        "mensagem": "Lista atualizada",
        pets
    }])
}

const deletePet = (req, res) => {
    try {
        const idPet = req.params.id
        const petFound = pets.find(pet => pet.id == idPet)
        const petIndex = pets.indexOf(petFound)

        if (petIndex >= 0) {
            pets.splice(petIndex, 1)
            res.status(200).json([{
                "message": "Pet deletado com sucesso!",
                "deletado": idPet,
                pets
            }])

        } else {
            res.status(404).send({ message: "Petshop não encontrado logo não pode ser deletado" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o Petshop" })
    }
}



module.exports = {
    getAllPets,
    getPet,
    getByAtendimento,
    getByEstado,
    postPet,
    updateName,
    atualizarPets,
    deletePet

}


