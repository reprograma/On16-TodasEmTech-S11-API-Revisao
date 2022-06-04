const pets = require('../models/pets.json')

const getAllShop = (req, res) => {
    try {
        res.status(200).json({
            PetShops: pets,
        })
    }catch{
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
}

module.exports = {
    getAllShop
}