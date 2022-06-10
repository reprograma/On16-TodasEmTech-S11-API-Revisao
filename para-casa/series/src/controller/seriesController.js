const library = require("../models/series.json")

const seriesAll = (req, res) => {
    try{
        res.status(200).json({ Séries: library})
    }catch{
        res.status(500).send({ Message: "Erro no server"})
    }
}

module.exports = {
    seriesAll

}