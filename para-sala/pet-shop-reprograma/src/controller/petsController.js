// A Constante pets e o meu json ou seja o caminho para meu banco de dados
const pets = require('../models/pets.json')// e  o caminho do banco de dados
const fs = require('fs')// ativando o fs para alterar ou inserir os dados dentro do json do banco de dados
//
// POST - PARA CADASTRAR NOVO PET-SHOP - usando o fs para inserir os dados no BD 
const postPet = (req, res) => {
  const {id, nomeFantasia, endereco, telefone, atende} = req.body //estes dados vai ser passado no Body no postman
  pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende })
// pets.push - empurra os dados adicionado mais o id que foi gerado automaticamente pela função pets.lenght + 1.

  //fs foi ativado para alterar  e gravar os dados diretamente no json banco de dados
  fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { 
    // if e else são mensagem para retornar erro 500 ou sucesso 200 do fs
    if (err) {
        res.status(500).send({ message: err })
    } else {
        console.log("Arquivo atualizado com sucesso!")
        const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
        res.status(200).send(petFound)
    }
})
//se o código funcionar retornar esta mensagem no POSTMAN, foi inserido de fora da funçao para retornar esta resposta no POSTMAN
res.status(200).send({ message: "Pet-shop criado com sucesso"})

}

// PATCH - MUDAR O NOME FANTASIA
const updateName = (req, res) => {
    
    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia
    
    const petFound = pets.find(pet => pet.id == idPetRequest) // encontrando o pet
    const petIndex = pets.indexOf(petFound) // indexOf é utilizado para encontrar um valor dentro de uma string ou array - aqui identificando o indice do pet no meu array
    
    if (petIndex >= 0){
    petFound.nomeFantasia = nomeFantasiaRequest
                //encontrou o indice //remove um item (nome fantasia)//adiciona (novo nome fantasia)
    pets.splice(petIndex, 1, petFound)
    //O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
    
       
    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log(" Arquivo foi alterado, com Sucesso");
            const petUpdated = pets.find(pet => pet.id == idPetRequest)
            res.status(200).send(petUpdated)
        }})
        
       
    } else {
        res.status(404).send({ message: "Nao encontramos esse petshop, cadastra ai migres"})
        }
    }

    module.exports = {
        postPet,
        updateName
        }
    


    // PARA CHAMAR NO POSTMAN
    /* POST - localhost:1313/pets/adicionar 
    Body - raw - JSON
     {
    "nomeFantasia": "Animal é 10",
    "endereco": "Paqueta 181",
    "telefone": "31 1234-5566",
    "atende": ["caes", "gatos"]
}
*/

/*  ALTERANDO O NOME FANTASIA
PATCH localhost:1313/pets/name/numero do id
    Body - raw - JSON 

{
    "nomeFantasia": "Lambeijos"
}
*/