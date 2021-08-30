const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Bienvenidos a la pagina principal")
})

router.get('/contacto', (req,res) => {
    res.send("Bienvenidos a la pagina de contacto")
})


module.exports = router;
