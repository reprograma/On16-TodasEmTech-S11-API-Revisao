const addEpisode = (req, res) => {
    try{
        const serieId = req.params.id;
        const serieToUpdate = series.find((series) => series.id == serieId)

        if (serieToUpdate){
            //verifique se a serie existe
            const seasonId = req.params.seasonId
            const seasonToUpdate = series.seasons.find(
                (season) => season.id == seasonId
            )
        if (seasonToUpdate){
            const {code, name, watched} = req.body
            seasonToUpdate.episodes.push({
                id: seasonToUpdate.episodes.lenght +1,
                code,
                name,
                watched,
            })
            console.log(
                "Funcionou"
            )
            const serieUpdate = series.find((serie) => serie.id == serieId)
            res.status(201).send(seasonToUpdate)
        }else{
            res.status(404).send({ message: 'encontrei essa temporada não '})
        }    
        }else{
            res.status(404).send({ message: 'encontrei essa serie não '})
        }

    }catch{
        res.status(404).send({ message: 'ainda encontrei essa serie não '})

    }
}