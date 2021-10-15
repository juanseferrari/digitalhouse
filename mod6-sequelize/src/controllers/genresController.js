const db = require('../database/models') 

module.exports = {
    list: async (req,res) => {
        const genres = await db.Genre.findAll()
        res.render("genresList", {genres})
        
    },
    detail: async (req,res) => {
        const genre = await db.Genre.findByPk(req.params.id)
        res.render("genresDetail", {genre})
        
    }
}


