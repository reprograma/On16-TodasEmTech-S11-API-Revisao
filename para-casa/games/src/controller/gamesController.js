const games = require('../models/games.json')
 
const fs = require('fs')
 
const getAllGames = (req, res) =>{
    try{ res.status(200).json([{
        "games:": games
        }])
        } catch(err){
        res.status(500).send({message: "Erro no server"})
        }
}
 
const getById = (req, res) =>{
    const idRequest = req.params.id
    const idFilter = games.filter(game => game.id ==idRequest)
    if(idFilter.length > 0) {
   return res.status(200).send(idFilter)
    }else{
    res.status(404).send([{
    "message": "Game not found", games
    }])
    }
    res.status(200).send(idFilter)
}
 
const cadastrarGames = (req, res) => {
    const { id, title, launchYear, consoles, liked} = req.body
 
games.push({id: (games.length + 1), title, launchYear,consoles,liked})
 
fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function(err){
    if(err){
       res.status(500).send({message: err})
 
    } else{
        console.log("Game atualizado com sucesso")
        const gameFound = games.find(game => game.id == id)
        res.status (200).send(gameFound)
    }
})
 
res.status (200).send ({message: "É isso aew!!!"})
 
 
}
 
/*const deleteGame = (req, res) => {
    const idRequest = req.params.id
    const indiceGame = games.findIndex(game => {
        return game.id == idRequest
        })
       
 
   
    games.splice(indiceGame, 1)
    res.status(200).json([{
    "message": "Game deletado com sucesso querida",
    "deletado": idRequest,
    games
    }])
   
}*/
 
 
 
 
 
 
 
 
 
 
module.exports = {
    getAllGames,
    getById,
    cadastrarGames,
    //put
    //deleteGame
}