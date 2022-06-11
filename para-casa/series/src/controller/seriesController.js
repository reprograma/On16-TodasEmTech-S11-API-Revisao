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

  
//GET retorna por gênero
const getByGenero = (request, response) => {
  
  const generoRequest = request.query.genre.toLowerCase()
  const generoFilter = series.filter((serie) => serie.genre.toLowerCase().includes(generoRequest));
  
  if (generoFilter.length > 0) {
    response.status(200).json({
        message: "Gênero encontrado com sucesso!",
        generoFilter
    })
  } else {
    response.status(404).send({
      message: "Gênero não encontrado.",
    });
  }
}; 

//GET retorna uma série específica buscando pelo id
const getById = (request, response) => {
    try {
        let idRequest = request.params.id
        let serieEncontrada = series.find(serie => serie.id == idRequest)
        
        response.status(200).send(serieEncontrada)
    } catch (err) {
        response.status(404).send ({
            "mensagem": "Essa série não existe na sua lista."
        })
    }
}

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

//DELETE series
const deleteSerie = (request, response) => {
    const idSerieRequest = request.params.id

    const indiceSerie = series.findIndex((serie) => serie.id == idSerieRequest)

    series.splice(indiceSerie, 1)

    response.status(200).json([{
        "message": "A série foi deletada com sucesso!.",
        "deletada": idSerieRequest,
        series
    }])
}

module.exports = {
    postSerie,
    getByGenero,
    getById,
    likedSerie,
    listaSeries, 
    deleteSerie
 }