// os controles (funções):
const petShop = require('../models/pets.json')
const fs = require('fs');
const { pathToFileURL } = require('url');

// liste todos os petshops
const getAllShops = (req, res) => {
    try {
        res.status(200).json([
          {
            'PetShops': petShop,
          },
        ]);
      } catch (err) {
        res.status(500).send({ message: "erro no servidor" });
      }
}
// liste os petshops por id
const getShop = (req, res) => {
    try {
        // dar entrada do id
        let shop = req.body.id
        // filtar com o id obtido pelo meu json
        let shopsFiltered = petShop.filter(loja => loja.id.includes(shop))
        // se encontrar, me aprensenta ela
        if (shopsFiltered > 0) {
            res.status(200).json({
                message: 'Loja encontrada',
                shopsFiltered
            })
        // se não encontrar, também avisa
        } else {
            res.status(404).json(
                {
                    message: 'Loja não encontrada'

                })
        }
    } catch (err) {
        res.status(500).send({ message: "erro no servidor" });

    }
}
// liste os petshops por atendimento
const porAnimal = (req, res) => {}
// liste os petshops por estado
const porEstado = (req, res) => {}
// cadastre um novo petshop
const newPetShop = (req, res) => {
   
    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    petShop.push({id: (petShop.length + 1), nomeFantasia, endereco, telefone, atende})
// configurando fs para que ele guarde as entradas no json
    fs.writeFile("./src/models/pets.json", JSON.stringify(petShop), 'utf8',
    
    function (err) {
        // se der erro
        if(err) {
            res.status(500).send({message: err})
        }
        // se deu certo, 
         else {
            // dá um alo
            console.log("seu arquivo foi atualizado")
            // encntra o objeto pelo id
            const petFound = petShop.find((p) => p.id == id)
            // e me mostra o que encontraste
            res.status(200).send(petFound)
        }
    })
}
// atualize o nome do petshop

const updateName = (req, res) => {
    
    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia
    
    const petFound = petShop.find(pet => pet.id == idPetRequest) // encontrando o pet
    const petIndex = petShop.indexOf(petFound) // identificando o indice do pet no meu array
    
    if (petIndex >= 0){
    petFound.nomeFantasia = nomeFantasiaRequest
                //encontrou o indice //remove um item (nome fantasia)//adiciona (novo nome fantasia)
    petShop.splice(petIndex, 1, petFound)
    
       
    fs.writeFile("./src/models/pets.json", JSON.stringify(petShop), 'utf8', 
    
        function(err) { // gravando novo pet no array de pets
        
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Teu arquivo foi alterado");
            const petUpdated = petShop.find(pet => pet.id == idPetRequest)
            res.status(200).send(petUpdated)
        }})
        
       
        } else {
        res.status(404).send({ message: "Nao encontramos esse petshop, cadastra ai miga"})
        }
    }
// atualize TODOS os dados do petshop MENOS o id
const updateShop = (req, res) => {}
// delete um petshop q eu n gostei
const deleteShop = (req, res) => {}



module.exports = {
getAllShops,
getShop,
porAnimal,
porEstado,
newPetShop,
updateName,
updateShop,
deleteShop
}