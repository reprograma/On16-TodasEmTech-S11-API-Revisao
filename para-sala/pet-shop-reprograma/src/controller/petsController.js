const pets = require('../models/pets.json')
const fs = require('fs')

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
}

module.exports = {
postPet,
}