const catalog = require("../models/games.json")
const fs = require("fs")

const allGames = (req, res) => {
    try{
        res.status(200).json({ Games: catalog})
    }catch{
        res.status(500).send({ Message: "Internal server error"})
    }
}

const idGames = (req, res) => {
    const idRequest = req.params.id
    const idFilter = catalog.filter((game) => game.id == idRequest)

    if(idFilter.length > 0){
        res.status(200).send(idFilter)
    }else{
        res.status(404).send({ Message: "Id not found"})
    }
}








module.exports = {
    allGames,
    idGames
    
}