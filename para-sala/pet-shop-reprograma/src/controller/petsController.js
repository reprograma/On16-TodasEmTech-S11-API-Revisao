const pets = require("../models/pets.json");

const fs = require("fs");

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
    res.status(404).send([{ message: "Not Found" }]);
  }
};

const getStades = (req, res) => {
  const stadesReq = req.query.endereco;

  const stadesFilter = pets.filter((animals) =>
    animals.endereco.includes(stadesReq)
  );
  if (stadesFilter.length > 0) {
    res.status(200).send(stadesFilter);
  } else {
    res.status(404).send([
      {
        message: "Not Found",
      },
    ]);
  }
};

const postPet = (req, res) => {
  const { id, nomeFantasia, endereco, telefone, atende } = req.body;
  pets.push({
    id: pets.length + 1,
    nomeFantasia,
    endereco,
    telefone,
    atende,
  });

  fs.writeFile(
    "./src/models/pets.json",
    JSON.stringify(pets),
    "utf8",
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        console.log("File created successfuly");
        const petFound = pets.find((pet) => pet.id == id);
        res.status(201).send(petFound);
      }
    }
  );
  res.status(200).send({ message: "Pet shop created succesfuly" });
};

const updateName = (req, res) => {
  let idPetRequest = req.params.id;
  let nomeFantasiaRequest = req.body.nomeFantasia;

  const petFound = pets.find((pet) => pet.id == idPetRequest);
  const petIndex = pets.indexOf(petFound);

  if (petIndex != -1) {
    petFound.nomeFantasia = nomeFantasiaRequest;

    pets.splice(petIndex, 1, petFound);

    fs.writeFile(
      "./src/models/pets.json",
      JSON.stringify(pets),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Teu arquivo foi alterado");
          const petUpdated = pets.find((pet) => pet.id == idPetRequest);
          res.status(200).send(petUpdated);
        }
      }
    );
  } else {
    res.status(404).send({
      message: "Nao encontramos esse petshop, cadastra ai miga",
    });
  }
};

const updateShop = (req, res) => {
  let idReq = req.params.id;
  let petsReq = req.body;

  const petsFound = pets.find((pets) => pets.id == idReq);
  const petsIndex = pets.indexOf(petsFound);

  if (petsIndex != -1) {
    petsFound.body = petsReq;
    pets.slice(petIndex, 1, petsReq);
    fs.writeFile(
      "./src/models/pets.json",
      JSON.stringify(pets),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("File updated successfully");
          const petsFound = pets.find((pets) => pets.id == id);
          res.status(200).send(petsFound);
        }
      }
    );
    res.status(200).json({
      message: "Pet shop updated successfully",
      pets,
    });
  }
};

const deletePetShop = (req, res) => {
  const idReq = req.params.id;
  const petsIndex = pets.findIndex((pets) => pets.id == idReq);

  pets.splice(petsIndex, 1);

  if (petsIndex != -1) {
    fs.writeFile(
      "./src/models/pets.json",
      JSON.stringify(pets),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: "internal error server" });
        } else {
          console.log("File deleted successfully");
        }
      }
    );
    res.status(200).json({
      message: "Pet Shop deleted successfully",
      "deleted pet": idReq,
      pets,
    });
  } else {
    res.status(404).json({
      message: "Pet Shop not found",
    });
  }
};

module.exports = {
  getAllShop,
  getIdShop,
  getServes,
  getStades,
  postPet,
  updateName,
  updateShop,
  deletePetShop,
};
