const { Movie, Genre } = require("../database/models");
const moviesService = require("../services/movies-service");
const apiKey = "b924bf9e"
const OMDBBaseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`
const {Op} = require("sequelize")

const fetch = require("node-fetch");
const { response } = require("express");

// ASYNC / AWAIT

module.exports = {
  search: async (req,res) => {
    const title = req.query.titulo
    // Aca estamos buscando una pelicula que tenga la info del titulo
    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`
        }
      }
    })
    if(movies.length > 0){
      res.render("moviesList", {movies})
    } else {
      const url = OMDBBaseUrl+`&s=${title}`
      const result = await fetch(url);
      const movies = await result.json();
      if(movies.Error){
        res.send("Esa no la conoce ni el loro")
      } else {
        res.render("moviesList", {
          movies: movies.Search.map((omdbMovie) => {
            return {
              id: omdbMovie.imdbID,
              title: omdbMovie.Title
            }
          })
        })
      }
    }
  },
  list: (req, res) => {
    Movie.findAll({
      include: [{ association: "genre" }, { association: "actors" }],
    }).then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: async (req, res) => {
    const movies = await Movie.findAll({
      order: [
        ["release_date", "DESC"],
        ["title", "ASC"],
      ],
      limit: 5,
    });
    res.render("newestMovies", { movies });
  },
  recommended: async (req, res) => {
    const movies = await Movie.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    });
    res.render("recommendedMovies", { movies });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    if (movie) {
      res.render("moviesDetail", { movie });
    } else {
      const url = OMDBBaseUrl+`&i=${id}`
      const result = await fetch(url);
      const movie = await result.json();
      if(movie.Error){
        res.send("Esa no la conoce ni el loro")
      } else {
        res.render("moviesDetailOMDB", {movie})
      }
    }
  },

  add: (req, res) => {
    res.render("moviesAdd");
  },
  create: async (req, res) => {
    await Movie.create(req.body);
    res.redirect("/movies");
  },

  edit: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id, { include: ["genre"] });
    const genres = await Genre.findAll();
    res.render("moviesEdit", { movie, genres });
  },

  update: async (req, res) => {
    await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect(`/movies/detail/${req.params.id}`);
  },

  delete: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    res.render("moviesDelete", { movie });
  },

  destroy: async (req, res) => {
    await moviesService.delete(req.params.id);
    res.redirect("/movies");
  },
};
