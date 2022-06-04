// importando as infos do pets.json e salvando na const pets 

const pets = require('../models/pets.json')

// importando o pacote fs > realizar alterações direto no pets.json
const fs = require('fs')

// localhost:1313/pets/adicionar
const postPets = (req, res) => {
    //passando quais informações serão requeridas ao utilizar a rota post
    const {
        id,
        nomeFantasia,
        endereco,
        telefone,
        atende
    } = req.body

    //pega as infos passadas e dá um push na array de pets + gerar um ID (tamanho do array +1)
    pets.push({
        id: (pets.length + 1),
        nomeFantasia,
        endereco,
        telefone,
        atende
    })

    //usando o fs para ler o arquivo pets.json e incluir o novo elemento q vem da rota post
    fs.writeFile('.src/models/pets.json', JSON.stringfy(pets), 'utf8', function (err) {
        if (err) {
            res.status(500).send({
                message: err
            })
        } else {
            console.log('arquivo atualizado')

            //retornando o arquivo criado em caso de status 200
            //procura no pets.json, bate o id e printa na tela
            const petFound = pets.find(pet => pet.id == id)
            res.status(200).send(petFound)
        }
    })
}


const updateNome = (req, res) => {
    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia
    
    //Procure em pets.json o ID e compare se está igual ao IdRequest e guarde na const petFound 
    const petFound = pets.find (pet => pet.id == idPetRequest) 

    //identificando o indice do pet no meu array através do PetFound (PetFound é o meu ID)
    const petIndex = pets.indexOf (petFound) 

    //se for encontrado o indice ele entra como nomeFantasiaRequest 
    
    if (petIndex >= 0) {
        petFound.nomeFantasia = nomeFantasiaRequest

    //Apaga a informação anterior e substitui pelo novo nome incluido na request
    //ordem: encontra o indice de onde alterar, quantas infos serão alteradas, o que entra substituindo
        pets.splice (petIndex, 1, petFound)

        // vai escrever no /pets.json no formato de String em Json
        fs.writeFile('.src/models/pets.json', JSON.stringfy(pets), 'utf8', function (err) {

            //intaxe padrão do fs, incluindo tratamento de erro 
            if (err) {
                res.status(500).send({
                    message: err
                })
            } else {
                console.log ("Nome Fantasia alterado");
                //printa o pet que foi atualizado, bate o ID do pets.json com o IdRequest
                const petUpdated = pets.find (pet => pet.id == idPetRequest)
                res.status(200).send(petUpdated)

            }})
    } else {
        res.status(404).send({ message: "Petshop não encontrado"})
    }
}



module.exports = {
    postPets,
    updateNome
}