const pets = require("../models/pets.json");

const fs = require("fs");

// list all petshops

const getPetshop = (req, res) => {
  try {
    res.status(200).send(pets);
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

// list petshop by id

const getPetById = (req, res) => {
  const idRequest = req.params.id;

  const petFound = pets.find((pet) => pet.id === parseInt(idRequest));

  if (petFound) {
    res.status(200).send(petFound);
  } else {
    res.status(404).send({ message: "Petshop not found!" });
  }
};

// list petshop by service

const getPetByService = (req, res) => {
  try {
    const attendanceReq = req.query.atende;
    console.log(attendanceReq);

    const filteredPet = pets.filter((pet) =>
      pet.atende.includes(attendanceReq)
    );
    console.log(filteredPet);

    if (filteredPet.length > 0) {
      res.status(200).send(filteredPet);
    } else {
      res.status(404).send({ message: "Petshop not found!" });
    }
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

// list petshop by state

const getPetByState = (req, res) => {
  try {
    const stateRequest = req.query.endereco;

    const foundPet = pets.find(
      (pet) => pet.endereco.toLowerCase() === stateRequest
    );
    console.log(foundPet);
    if (foundPet) {
      res.status(200).send(foundPet);
    } else {
      res.status(404).send({ message: "Petshop not found!" });
    }
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

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

  if (petIndex > 0) {
    //se petIndex existe
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
    res.status(404).send({ message: "Petshop not found!" });
  }
  res.status(200).send({ message: "Petshop name updated!" });
};

// update petshop data

const updatePetshop = (req, res) => {
  const idRequest = req.params.id;
  const petRequest = req.body;

  const petIndex = pets.findIndex((pet) => pet.id === parseInt(idRequest));

  if (petIndex > 0) {
    pets.splice(petIndex, 1, petRequest);

    fs.writeFile(
      "./src/models/pets.json",
      JSON.stringify(pets),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Updated file!");
          const petUpdated = pets.find((pet) => pet.id === idRequest);
          res.status(200).send(petUpdated);
        }
      }
    );
  } else {
    res.status(404).send({ message: "Petshop not found!" });
  }
  res.status(200).send({ message: "Petshop updated!" });
};

// delete petshop

const deletePet = (req, res) => {
  const idRequest = req.params.id;

  const foundIndex = pets.findIndex((pet) => pet.id === parseInt(idRequest));

  if (foundIndex > 0) {
    pets.splice(foundIndex, 1);

    fs.writeFile(
      "./src/models/pets.json",
      JSON.stringify(pets),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Updated file!");
        }
      }
    );
  } else {
    res.status(404).send({ message: "Petshop id not found!" });
  }
  res.status(200).send({ message: "Petshop deleted!" });
};

module.exports = {
  getPetshop,
  getPetById,
  getPetByService,
  getPetByState,
  postPet,
  updatePetName,
  updatePetshop,
  deletePet,
};
