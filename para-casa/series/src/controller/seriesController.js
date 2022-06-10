const series = require("../models/series.json");

const fs = require("fs");

const getAllSeries = (req, res) => {
  try {
    res.status(200).json({
      Reproflix: series,
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getGenre = (req, res) => {
  let genreReq = req.query.genre.toLowerCase();
  let genreFilter = series.filter(seriesGenre =>
    seriesGenre.genre.toLowerCase().includes(genreReq)
  );
  
  if (genreFilter.length > 0) {
    res.status(200).send(genreFilter);
  } else {
    res.status(404).send([{ message: "Not Found" }]);
  }
};

const getById = (req, res) => {
  const seriesReq = req.params.id;
  const seriesFilter = series.filter((seriesId) => seriesId.id == seriesReq);
  if (seriesFilter.length > 0) {
    res.status(200).send(seriesFilter);
  } else {
    res.status(404).send({
      message: "Serie not Found",
    });
  }
};

const addNewSerie = (req, res) => {
  const {id, name, genre, synopsis, liked, seasons} = req.body;
  series.push({
    id: series.length + 1,
    name, 
    genre, 
    synopsis, 
    liked, 
    seasons,
  });
  fs.writeFile(
    "./src/models/series.json",
    JSON.stringify(series),
    "utf8",
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        console.log("File created successfully");
        const serieFound = series.find((serie) => serie.id == id);
        res.status(200).send(serieFound);
      }
    }
  )
  res.status(201).send({ message: "Serie added successfully" })
};

const deleteSerie = (req, res) => {
  const idReq = req.params.id;
  const serieIndex = series.findIndex((serie) => serie.id == idReq);

  series.splice(serieIndex, 1);

  if (serieIndex != -1) {
    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(series),
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
      message: "serie deleted successfully",
      "deleted serie": idReq,
      series,
    });
  } else {
    res.status(404).json({
      message: "serie not found",
    });
  }
};


const serieUpdated = (req, res) => {
  let idReq = req.params.id;
  let rankReq = req.body.liked;

  const serieFound = series.find((serie) => serie.id == idReq);
  const serieIndex = series.indexOf(serieFound);

  if (serieIndex != -1) {
    serieFound.liked = rankReq;

    series.splice(serieIndex, 1, serieFound);

    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(series),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("File updated successfully");
          const serieUpdated = series.find((serie) => serie.id == idReq);
          res.status(200).send(serieUpdated);
        }
      }
    );
  } else {
    res.status(404).send({
      message: "serie not found",
    });
  }
};





module.exports = {
  getAllSeries,
  getGenre,
  getById,
  addNewSerie,
  deleteSerie,
  serieUpdated,
}
