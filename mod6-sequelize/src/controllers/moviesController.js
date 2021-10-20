const db = require('../database/models') //Como el archivo se llama index, no hace falta aclarar cual es

module.exports = {
    list: async (req,res) => {
        //Traer toda la info de las movies
        const movies = await db.Movie.findAll({
            include: [{association: "genre"},{association: "actors"}]
        }) //El findAll() sirve para traer toda la info de db.Movie. Va a traer solamente lo declarado en el model 
        console.log(movies[0])
        res.render("moviesList", {movies})
    },
    detail: async (req,res) => {
        //busqueda por ID
        const movie = await db.Movie.findByPk(req.params.id, {
            include: ["actors"]
        })
        res.render("MoviesDetail", {movie})
        
    },
    new: async (req,res) => {
        const movies = await db.Movie.findAll({
            //Ordenada la información retornada por el release_date
            order: [["release_date","ASC"], ["title", "DESC"]]
        })
        res.render("newestMovies", {movies})
       
    },
    recomended: async(req,res) => {
        const movies = await db.Movie.findAll({
            order: [["rating", "DESC"]],
            limit: 5
        })
        res.render("recommendedMovies", {movies})
       
    },
    add: async (req,res) => {
        const genres = await db.Genre.findAll() 
        res.render("moviesAdd", {genres})
    },
    create: async (req,res) => {
        const movieCreated = await db.Movie.create(req.body)
            // Se podria poner dentro cada uno de los campos, pero como los nombres son iguales, se puede poner como req.body
            // title: req.body.title,
            // rating: req.body.rating,
            // awards: req.body.awards,
            // release_date: req.body.release_date,
            // length: req.body.length
        
        res.redirect("/movies")
    },
    edit: async (req,res) => {
        let id = req.params.id
        let Movie = await db.Movie.findByPk(id, {
            include: [{association: "genre"}]
        })
        let genres = await db.Genre.findAll();
        res.render("moviesEdit", {Movie, genres})
    },
    update: async (req,res) => {
        let id = req.params.id
        const movieEdited = await db.Movie.update(
            req.body,
        {
            where: {
                id: id
            }
        })
        res.redirect("/movies/detail/"+id)
    },
    delete: async (req,res) => {
        let id = req.params.id
        let Movie = await db.Movie.findByPk(id)
        res.render("moviesDelete", {Movie})
    },
    destroy: async (req,res) => {
        let Movie = await db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        console.log(Movie)
        res.redirect("/movies")
    }
}