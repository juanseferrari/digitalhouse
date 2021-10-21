const { Movie } = require("../../database/models");


module.exports = {
    list: async (req,res) => {
        let movies = await Movie.findAll();
        res.json(movies)

    },
    create: async(req,res) => {
        await Movie.create(req.body)
        .then(movie => {
            res.json({
                meta: {
                    status: 201,
                    url: "/movies/create"
                },
                data: movie
            })
        })

    },
    destroy: async(req,res) => {
        await Movie.destroy({
            where: {
              id: req.params.id,
            },
          })
        .then(movie => {
            res.json({
                meta: {
                    status: 200,
                    url: "/movies/create",
                    message: "Película eliminada correctamente"
                },
                data: movie
            })
        })
       
    }
}