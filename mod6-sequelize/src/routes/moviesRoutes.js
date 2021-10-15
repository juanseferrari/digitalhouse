const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);

//Rutas exigidas para la creación del CRUD

//Crear nueva pelicula
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);

//Editar pelicula
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);

//Eliminar pelicula
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);


module.exports = router;