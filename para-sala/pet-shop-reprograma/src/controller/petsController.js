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
    fs.writeFile ('.src/models/pets.json', JSON.stringfy(pets), 'utf8', function (err) {
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

module.exports = {
    postPets
}