const series = require("../models/series.json");
const fs = require("fs");

const getAllSeries = (req, res) => {
  try {
    res.status(200).json([
      {
        message: "Series found!",
        mySeries: series,
      },
    ]);
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const getSeriesByGenre = (req, res) => {
  try {
    const genreRequest = req.query.genre.toLowerCase();

    const genreFilter = series.filter((serie) =>
      serie.genre.toLowerCase().includes(genreRequest)
    );

    if (genreFilter.length > 0) {
      res.status(200).send([
        {
          message: "Series found by genre!",
          mySeries: genreFilter,
        },
      ]);
    } else {
      res.status(404).send({
        message: "Could not find by genre!",
      });
    }
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const getJustOneSerie = (req, res) => {
  try {
    const serieRequest = req.params.id;
    const serieFind = series.find((serie) => serie.id == serieRequest);

    if (serieFind) {
      res.status(200).send([
        {
          message: "Series Found!",
          mySeries: serieFind,
        },
      ]);
    } else {
      res.status(404).send([
        {
          message: "Series not found!",
        },
      ]);
    }
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const addSerie = (req, res) => {
  try {
    const { id, name, genre, synopsis, liked, seasons } = req.body;
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
          console.log("Updated series!");
          const serieFound = series.find((serie) => serie.id == id);
          res.status(200).send(serieFound);
          series;
        }
      }
    );
    res.status(200).send({ message: "Congratulations!" });
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const deleteSerie = (req, res) => {
  try {
    const idRequest = req.params.id;

    const indexFound = series.findIndex((serie) => serie.id == idRequest);

    series.splice(indexFound, 1);

    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(series),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Series deleted!");
          const serieFound = series.find((serie) => serie.id == id);
          res.status(200).send(serieFound);
          series;
        }
      }
    );
    res.status(200).send({ message: "Congratulations!" });
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const updateLiked = (req, res) => {
  try {
    const idSerieRequest = req.params.id;
    const likedRequest = req.body.liked;

    const serieFound = series.find((serie) => serie.id == idSerieRequest);
    const serieIndex = series.indexOf(serieFound);

    if (serieIndex >= -1) {
      serieFound.liked = likedRequest;
      series.splice(serieIndex, 1, serieFound);

      fs.writeFile(
        "./src/models/series.json",
        JSON.stringify(series),
        "utf8",
        function (err) {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            console.log("TSeries has been changed!");
            const serieUpdated = series.find(
              (serie) => serie.id == idSerieRequest
            );
            res.status(200).send(serieUpdated);
          }
        }
      );
    } else {
      res
        .status(404)
        .send({ message: "We couldn't find this series, register it!" });
    }
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const addEpisode = (req, res) => {
  try {
    const serieId = req.params.id;
    const serieToUpdate = series.find((serie) => serie.id == serieId);
    if (serieToUpdate) {
      const seasonId = req.params.seasonId;
      const seasonToUpdate = serieToUpdate.seasons.find(
        (season) => season.id == seasonId
      );
      if (seasonToUpdate) {
        const { code, name, watched } = req.body;
        seasonToUpdate.episodes.push({
          id: seasonToUpdate.episodes.length + 1,
          code,
          name,
          watched,
        });

        console.log("Congratulations!");

        const serieUpdated = series.find((serie) => serie.id == serieId);
        res.status(201).send(serieUpdated);
      } else {
        res.status(404).send({ message: "I found this season no" });
      }
    } else {
      res.status(404).send({ message: "I found this season no" });
    }
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

module.exports = {
  getAllSeries,
  getSeriesByGenre,
  getJustOneSerie,
  addSerie,
  deleteSerie,
  updateLiked,
  addEpisode,
};
