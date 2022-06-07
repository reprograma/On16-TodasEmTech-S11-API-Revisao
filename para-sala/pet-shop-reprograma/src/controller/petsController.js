const pets = require('../models/pets.json')
const fs = require('fs')

const createPet =(req,res) => {
    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({id:pets.length + 1, nomeFantasia,endereco, telefone, atende})
//para escrever no VS code as atualizações, usar fs
    fs.writeFile("./src/models/pets.json")
}