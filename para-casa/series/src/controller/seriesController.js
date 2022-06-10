 const series = require('../models/series.json')



//  GET retorna lista de séries
const listaSeries = (request, response) => {
  try {
    response.status(200).json([
          {
            "series": series,
          },
        ]);
      } catch (err) {
        response.status(500).send({ menssage: "Error no server" });
      }
};

   


 // POST adciona nova série
const postSerie = (require, response) => {
    try { 
        const { id, name, genre, synopsis, liked, seasons} = require.body
        series.push({ id: (series.length + 1), name, genre, synopsis, liked, seasons})
        response.status(201).json([{
            message: "Nova série foi cadastrada!",
            series
        }])
    } catch (err) {
        console.log(err);
        response.status(500).send([{

        }])
    }
}

// PACTH like ou  dislike
const likedSerie = (request, response) => {
  const idSeriesRequest = request.params.id;

  const likedRequest = request.body.liked;

  likedFilter = series.find((gostei) => gostei.id == idSeriesRequest);

  if (likedFilter) {
    likedFilter.liked = likedRequest;
    response.status(200).json([
      {
        message: "Atualização de liked realizada com sucesso!",
        series,
      },
    ]);
  } else {
    response.status(404).json([
      {
        message: "Não foi possível modificar o liked.",
      },
    ]);
  }
};

module.exports = {
    postSerie,
    likedSerie,
    listaSeries
 }