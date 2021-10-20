const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.list);
router.get('/genres/detail/:id', genresController.detail);

//Add genres
router.get('/genres/add', genresController.add);
router.post('/genres/create', genresController.create);

//Edit genres
router.get('/genres/edit/:id', genresController.edit)
router.put('/genres/update/:id', genresController.update)

//Delete genres
router.get('/genres/delete/:id', genresController.delete);
router.delete('/genres/delete/:id', genresController.destroy);






module.exports = router;