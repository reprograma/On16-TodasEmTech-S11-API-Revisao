const library = require("../models/series.json")
const fs = require("fs")

const seriesAll = (req, res) => {
  try {
    res.status(200).json({ Séries: library })
  } catch {
    res.status(500).send({ Message: "Internal server error" })
  }
}

const seriesGenre = (req, res) => {
  const genreRequest = req.query.genre.toLowerCase()
  const genreFilter = library.filter((serie) =>
    serie.genre.toLowerCase().includes(genreRequest)
  )

  if (genreFilter.length > 0) {
    res.status(200).send(genreFilter)
  } else {
    res.status(404).send({ Message: "Genre not found" })
  }
}

const seriesById = (req, res) => {
  const idRequest = req.params.id
  const idFilter = library.filter((serie) => serie.id == idRequest)

  if (idFilter.length > 0) {
    res.status(200).send(idFilter)
  } else {
    res.status(404).send({ Message: "Id not found" })
  }
}

const serieAdd = (req, res) => {
  const { name, genre, synopsis, liked, seasons } = req.body
  library.push({
    id: library.length + 1,
    name,
    genre,
    synopsis,
    liked,
    seasons,
  })

  fs.writeFile(
    "./src/models/series.json",
    JSON.stringify(library),
    "utf8",
    function (err) {
      //grava nova série no array
      if (err) {
        res.status(500).send({ Message: err })
      } else {
        console.log("Updated file successfully")
        const serieFound = library.find((serie) => serie.id == library.length) //recupera a série que foi criada no array
        res.status(200).send(serieFound)
      }
    }
  )
}

const serieLiked = (req, res) => {
  const idRequest = req.params.id
  const likedRequest = req.body.liked
  const serieFind = library.find((serie) => serie.id == idRequest) //encontrando a série
  const serieIndex = library.indexOf(serieFind) //Identificando o indice da série no meu array

  if (serieIndex >= 0) {
    serieFind.liked = likedRequest
    library.splice(serieIndex, 1, serieFind)

    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(library),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ Message: err })
        } else {
          console.log("Updated file successfully")
          const serieUpdated = library.find((serie) => serie.id == idRequest)
          res.status(200).send(serieUpdated)
        }
      }
    )
  } else {
    res.status(404).send({ Message: "Id not found" })
  }
}

const serieDelete = (req, res) => {
  const idRequest = req.params.id
  const indexSerie = library.findIndex((serie) => serie.id == idRequest)

  if (indexSerie != -1) {
    library.splice(indexSerie, 1)

    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(library),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ Message: err })
        } else {
          res.status(200).send({ Message: "Series deleted" })
        }
      }
    )
  } else {
    res.status(404).json({ Message: "Id not found" })
  }
}

module.exports = {
  seriesAll,
  seriesGenre,
  seriesById,
  serieAdd,
  serieLiked,
  serieDelete,
}
