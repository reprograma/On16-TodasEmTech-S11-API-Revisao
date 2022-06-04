const pets = require("../models/pets.json");

const fs = require('fs');

const getAllShop = (req, res) => {
  try {
    res.status(200).json({
      PetShops: pets,
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getIdShop = (req, res) => {
  const shopReq = req.params.id;
  const shopFilter = pets.filter((pets) => pets.id == shopReq);
  if (shopFilter.length > 0) {
    res.status(200).send(shopFilter);
  } else {
    res.status(404).send({
      message: "Not Found",
    });
  }
};

const getServes = (req, res) => {
  let servesReq = req.query.atende.toLowerCase();

  let servesFilter = pets.filter((animals) => {
    servesLowerCase = animals.atende.map((animalsArray) =>
      animalsArray.toLowerCase()
    );
    return servesLowerCase.includes(servesReq);
  });
  console.log(servesFilter);
  if (servesFilter.length > 0) {
    res.status(200).send(servesFilter);
  } else {
    res.status(404).send([
      {
        message: "Not Found",
      },
    ]);
  }
};


/*const getStades = (req, res) => {
    let stadesReq = req.query.endereco.toLowerCase();
  
    let stadesFilter = pets.filter((animals) => {
        stadesLowerCase = animals.endereco.map((animalsArray) =>
        animalsArray.toLowerCase()
      );
      return stadesLowerCase.includes(stadesReq);
    });
    console.log(stadesFilter);
    if (stadesFilter.length > 0) {
      res.status(200).send(stadesFilter);
    } else {
      res.status(404).send([
        {
          message: "Not Found",
        },
      ]);
    }
  };*/

  const postPet = (req, res) => {
   
    const { id, nomeFantasia, endereco, telefone, atende} = req.body
    pets.push({ id: (pets.length + 1), nomeFantasia, endereco, telefone, atende})

    fs.writeFile("./src/models/pets.json"), JSON.stringify(pets), 'utf8', function(err){
        if(err){
            res.status(500).send({ message: err})
        }else{
            console.log("File created successfuly")
            const petFound = pets.find((pet) => pet.id == id)
            res.status(201).send(petFound)
        }
    }
} 

module.exports = {
  getAllShop,
  getIdShop,
  getServes,
  postPet
};
