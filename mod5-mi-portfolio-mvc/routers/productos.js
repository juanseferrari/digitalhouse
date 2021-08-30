const express = require('express');
let router = express.Router();

let productosController = require('../controllers/productosController.js')


/* -------------- RUTAS PARAMETRIZADAS -----------------------*/
router.get('/', (req,res) => {
    res.send("Bienvenidos a productos")
})

router.get('/:id', productosController.detalle)

router.get('/:id/comentarios/:idComentario?', productosController.detalleComentario)

 
 module.exports = router;
