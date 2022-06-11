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

const addGames = (req, res) => {
    const {title, launchYear, consoles, liked} = req.body
    catalog.push({id: catalog.length +1, title, launchYear, consoles, liked})

    fs.writeFile("./src/models/games.json", JSON.stringify(catalog), "utf8", function (err) {
        if(err){
            res.status(500).send({ Message: err})
        }else{
            console.log("Updated file successfully")
            const gameFound = catalog.find((games) => games.id == catalog.length)
            res.status(200).send(gameFound)
        }
    })
}








module.exports = {
    allGames,
    idGames,
    addGames
    
}