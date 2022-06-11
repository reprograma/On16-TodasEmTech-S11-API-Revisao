const pets = require('../models/pets.json')
const fs = require ('fs')


const postPet = (req, res) => {
  const { id, nomeFantasia, endereco, telefone, atende } = req.body
  pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende })

  fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
    if (err) {
        res.status(500).send({ message: err })
    } else {
        console.log("Arquivo atualizado com sucesso!")
        const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
        res.status(200).send(petFound)
    }
})
}


const updateName = (req, res) => {
    
    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia
    
    const petFound = pets.find(pet => pet.id == idPetRequest) // encontrando o pet
    const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array
    
    if (petIndex >= 0){
    petFound.nomeFantasia = nomeFantasiaRequest
                //encontrou //remove //adiciona
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


    

    const getAllPets = (req, res) => {
    try {
      res.status(200).json([
        {
          Games: pets,
        },
      ])
    } catch (err) {
      response.status(500).send({ message: 'Erro no server' })
    }
  }


  
  const onePetShop = (req, res) => {
    const petsRequest = req.params.id
    const petsFilter = pets.filter ((pets) => pets.id == petsRequest)
    res.status(200).send(petsFilter)

}


const updatePets = (req, res) => {
    try {
      const idRequest = req.params.id
      const petsRequest = req.body
  
      petsFilter = pets.find((pet) => pet.id == idRequest)
  
      if (petsFilter) {
        petsFilter.pets = petsRequest
  
        res.status(200).json([
          {
            mensagem: 'Seu PetShop foi atualizado com sucesso!',
            pets,
          },
        ])
      } else {
        res.status(404).json([
          {
            message: 'Seu Pet não foi atualizado!',
          },
        ])
      }
    } catch (err) {
      res.status(500).send({ message: 'Erro ao cadastrar' })
    }
  }



  const deletPetShop = (req, res) => {
    const idRequest = req.params.id;
    const indicePets = pets.findIndex((pets) => pets.id == idRequest);

    pets.splice(indicePets, 1)

    if (indicePets > -1) {
      res.status(200).json([
        {
          message: "O petshop foi deletado",
          "petshop deletado": idRequest,
          pets
        }]);
    } else {
      res.status(404).send([
        {
          message: "PetShop não deletado, tente novamente",
        }])
    }
  }




module.exports = {
    postPet,
    updateName,
    getAllPets,
    onePetShop,
    updatePets,
    deletPetShop
    }
