const pets = require("../models/pets.json");

const fs = require("fs");

// add new petshop
const postPet = (req, res) => {
  const { id, nomeFantasia, endereco, telefone, atende } = req.body;
  pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende });

  fs.writeFile(
    "./src/models/pets.json",
    JSON.stringify(pets),
    "utf8",
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        console.log("Updated file.");
        const petFound = pets.find((pet) => pet.id === id);
        res.status(200).send(petFound);
      }
    }
  );
  res.status(200).send({ message: "Petshop added!" });
};

// update petshop name

const updatePetName = (req, res) => {
  const idRequest = req.params.id;
  const nameRequest = req.body.nomeFantasia;

  const petFound = pets.find((pet) => pet.id === parseInt(idRequest));

  const petIndex = pets.indexOf(petFound);

  if (petIndex > 0) {    //se petIndex existe
    petFound.nomeFantasia = nameRequest;
          //encontrou //remove //adiciona
    pets.splice(petIndex, 1, petFound);

    fs.writeFile(
      "./src/models/pets.json",
      JSON.stringify(pets),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Updated file.");
          const petUpdated = pets.find((pet) => pet.id === idRequest);
          res.status(200).send(petUpdated);
        }
      }
    );
  } else {
    res.status(404).send({ message: "Petshop not found!"})
  }
  res.status(200).send({ message: "Petshop name updated!" });
};

module.exports = {
  postPet,
  updatePetName,
};
