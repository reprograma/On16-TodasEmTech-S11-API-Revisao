const pets = require('../models/pets.json') //importando o models  chamo ele de pets(a lista de endereço de pet shops)

const fs = require('fs') //fs é uma ferramenta que vai alterar algum arquivo dentro do meu projeto, e sem ele só altera no postaman. const para importar o fs que modifica as alterações tb no models(json)


// rota POST
const postPet = (require, response) => { 
    const { id, nomeFantasia, endereco, telefone, atende } = request.body //essas chaves sao o body, ou seja, as informações serão passadas no body do postman
    pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende }) //no json vai ser adicionado um novo id com todas essas informações de nomefantasia e etc

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', 
    
    function(err) { //const fs, olha esse aqrquivo json que é nele que eu vou mexer, 
        if(err) {
           response.status(500).send({message:err}) 
        } else {
            console.log('Arquivo atualizado.');
            const petFound = pets.find(pet => pet.id == id)
            response.status(200).send(petFound)
        }
    }) //writefile escreve no arquivo solicitado as modificações
res.status(200).send({ message: "Sucesso!"})
}


// rota PATCH
const updateName = (request, response) => {
    
    let idPetRequest = request.params.id //procura pelo id
    let nomeFantasiaRequest = request.body.nomeFantasia  //o que a gente tem que alterar
    
    const petFound = pets.find(pet => pet.id == idPetRequest) //encontrando o id

    const petIndex = pets.indexOf(petFound) //identificando o indice do pet no meu array

    if(petIndex >= 0) { //verifica se o pet encontrado(petFound) existe
        petFound.nomeFantasia = nomeFantasiaRequest
                  //encontra no petIndex, remove 1, adiciona o petFound
        pets.splice(petIndex, 1, petFound) //vai no array de pets,
        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', 
    
        function(err) { //const fs, olha esse aqrquivo json que é nele que eu vou mexer, 
            if(err) {
           response.status(500).send({message:err}) 
            } else {
            console.log('Arquivo atualizado.');
            const petUpdated = pets.find(pet => pet.id == idPetRequest)
            response.status(200).send(petUpdated)
        }})
    } else {
        response.status(404).send({ message: "Nao encontramos esse petshop, cadastra ai miga"})
    }
}

// Rota:    localhost:2022/pets/name/2

module.exports = {
    postPet,
    updateName
}
    




