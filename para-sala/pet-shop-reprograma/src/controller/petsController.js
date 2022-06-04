const pets = require("../models/pets.json");

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
    const shopReq = req.params.id
    const shopFilter = pets.filter((pets) => pets.id == shopReq);
    if (shopFilter.length > 0) {
        res.status(200).send(shopFilter);
    }else{
        res.status(404).send({
            message: "Not Found",
        })
    }
}

module.exports = {
  getAllShop,
  getIdShop,
};
