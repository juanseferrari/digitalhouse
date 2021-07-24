const express = require('express');
const app = express();
const path = require('path');


//esto sirve para hacer referencia a public --> Esto genero que funcione bien todo el HTML
app.use(express.static(path.join(__dirname,"public")));
//console.log(app);

//A ESTO LO LLAMAMOS UN HANDLER O UN CONTROLADOR
//Aca vamos a tener todas nuestras rutas para saber a donde mandamos a la respues
app.get('/', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/lovelace', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/lovelace.html'))
})
app.get('/turing', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/turing.html'))
})
app.get('/berners-lee', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
})
app.get('/babbage', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/babbage.html'))
})

app.get('/clarke', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
})
app.get('/hamilton', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
})

app.get('/hopper', (req,res) => {
    //res.send('¡Hola mundo!')
    res.sendFile(path.join(__dirname,'/views/hopper.html'))
})



app.listen(3000,()=>{
    console.log('Servidor corriendo')
})