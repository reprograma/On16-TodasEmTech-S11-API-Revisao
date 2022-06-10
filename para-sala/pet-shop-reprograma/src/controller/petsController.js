const pets = require('../models/pets.json')
const fs = require('fs')

const getPet = (req, res) => {
  res.status(200).send({pets})
}

const getById = (req, res) => {

  const idPetRequest = req.params.id
  const idEncontrado = pets.find(pet => pet.id == idPetRequest)

  if(idEncontrado) {
    res.status(200).send({idEncontrado})
  } else {
    res.status(400).send({message:"Id não encontrado"})
  }

}

const postPet = (req, res) => {

  const {id, nomeFantasia, endereco, telefone, atende} = req.body
  pets.push({id:(pets.length + 1), nomeFantasia, endereco, telefone, atende})

  fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', function(err) {
    if(err) {
      res.status(500).send({message: err})
    } else {
      console.log("Arquivo atualizado")
      const petFound = pets.find(pet => pet.id == id)
      res.status(200).send(petFound)
    }

  })

  res.status(200).send({message: "Sucesso, novo pet-shop adicionado"})

}

const updateName = (req, res) => {

  const idPetRequest = req.params.id
  const nomeFantasiaRequest = req.body.nomeFantasia

  const petFound = pets.find(pet => pet.id == idPetRequest)
  const petIndex = pets.indexOf(petFound)  //identifica o indece do pet no meu array

  if(petIndex >= 0) {
    petFound.nomeFantasia = nomeFantasiaRequest

  pets.splice(petIndex, 1, petFound)  
  
  fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', function(err) {
    if(err) {
      res.status(500).send({message: err})
    } else {
      console.log("Teu arquivo foi alterado")
      const petUpdate = pets.find(pet => pet.id == idPetRequest)

      res.status(200).send(petUpdate)
    }})

  } else {
    res.status(404).send({message: "Não encontramos esse petShop"})  
  }

}

const deletePet = (req, res) => {
  const idPetRequest = req.params.id
  const idPetFound = pets.findIndex(pet => pet.id == idPetRequest)

  if(idPetFound) {
    pets.splice(idPetFound, 1) 

    fs.writeFile('./src/models/pets.json', JSON.stringify(pets), 'utf8', function(err) {
      if(err) {
        res.status(500).send({message: err})
      } else {
        console.log("Petshop deletado com sucesso")
        res.status(200).send({pets})
      }
    })
  
  } else {
    res.status(404).send({message: "Não encontramos esse petShop"})  
  }  
}


module.exports = {
  getPet,
  getById,
  postPet,
  updateName,
  deletePet
}