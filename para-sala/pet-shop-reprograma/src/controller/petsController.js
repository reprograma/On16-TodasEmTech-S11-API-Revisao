const pets = require('../models/pets.json')
const fs = require('fs') //pra ver as modificações acontecendo no arquivo .json

// cria um novo id com um numero a mais que o comprimento do array e acrescenta estas característias
const postPet = (req, res) => {
    const {id, nomeFantasia, endereco, telefone, atende} = req.body //tá dizendo que tudo isso entra no body
    pets.push({ id: (pets.length +1), nomeFantasia, endereco, telefone, atende }) // soma mais um

    fs.writeFile("./src/models/pets.json", 
    JSON.stringify(pets), 
    'utf8', 
    function(err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
            res.status(200).send(petFound)
        }
    })

    res.status(200)({ message: "SUCESSO!" })
    }
    const updateName = (req, res) => {
    
        let idPetRequest = req.params.id
        let nomeFantasiaRequest = req.body.nomeFantasia
        
        const petFound = pets.find(pet => pet.id == idPetRequest) // encontrando o pet
        const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array
        
        if (petIndex >= 0){
        petFound.nomeFantasia = nomeFantasiaRequest
                    //encontrou o indice //remove um item (nome fantasia)//adiciona (novo nome fantasia)
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
            res.status(404).send({ message: "Nao encontramos esse petshop, cadastra ai miga"})
            }
        }

    /*const updateName =(req, res) => {

        let idPetRequest = req.params.id //procura pelo id
        let nomeFantasiaRequest = req.body.nomeFantasia //o que a gente quer alterar
        
        const petFound = pets.find(pet => pet.id == idPetRequest) //encontrando o id
        const petIndex = pets.indexOf(petFound) // indentificando o índice do pet no meu array 

        if (petIndex >= 0){ //verifica se o pet encontrado(petFound) existe
        petFound.nomeFantasia = nomeFantasiaRequest
                    //encontrou //remove //adiciona
        pets.splice(petIndex, 1, petFound)  //vai no array de pets, pega o que tem no index, 
//apaga a info de nome fantasia e pega a nova que ta sendo passada em nomeFantasiaRequest
        
        fs.writeFile("./src/moldels/pets.json", JSON.stringify(pets), 'utf8', function (err) {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Teu arquivo foi alterado");
                const petUpdated = pets.find(pet => pet.id == idPetRequest)
                res.status(200).send(petUpdated)
            }}) //vai escrever o que eu mandar ele escrever no pets.json
            
        } else {
                res.status(404).send({ message: "Nao encontramos esse petshop, cadastra ai miga"})
                }
            }     
    */
    module.exports = {
        postPet, 
        updateName,
        }
    