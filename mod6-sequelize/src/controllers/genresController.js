const db = require('../database/models') 

module.exports = {
    list: async (req,res) => {
        const genres = await db.Genre.findAll()
        res.render("genresList", {genres})
        
    },
    detail: async (req,res) => {
        const genre = await db.Genre.findByPk(req.params.id)
        res.render("genresDetail", {genre})
        
    },
    add: (req,res) => {
        res.render("genresAdd")
    },
    create: async (req,res) => {
        const genres = await db.Genre.create(req.body);
        res.redirect("/genres")
    },
    edit: async (req,res) => {
        let id = req.params.id;
        const Genre = await db.Genre.findByPk(id);
        res.render("genresEdit", {Genre})
    },
    update: async (req,res) => {
        let id = req.params.id;
        const genreEdited = await db.Genre.update(req.body,
            {
            where: {
                id : id
            }
        })
        res.redirect("/genres/detail/" + id)
    },
    delete: async (req,res) => {
        let id = req.params.id;
        const genreDelete = await db.Genre.findByPk(id);
        res.render("genresDelete", {Genre: genreDelete})
    },
    destroy: async (req,res) => {
        let Genre = await db.Genre.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/genres")
    }
}


