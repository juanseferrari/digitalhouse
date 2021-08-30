const express = require('express');
const path = require('path');
const app = express();
const rutasProductos = require('./routers/productos');
const rutasMain = require('./routers/main')


app.use(express.static(path.join(__dirname, "public")));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use('/productos', rutasProductos);

app.use('/', rutasMain)



