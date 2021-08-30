const path = require('path');

const mainController = {
    home: function(req,res){
        /** Esta es la forma de renderizar un modelo de ejs */
        res.render('home');
    },
    about: function(req,res){
        res.render('about');
    },
    login: function(req,res){
        res.render('login');
    },
    list: function(req,res){
        let users = [
            'Juanse',
            'Rafa',
            'Milka',
            'Delfi'
        ]
        /** Aca abajo para pasarle parametros al render, agregas users para mostrarlos en la vista */
        res.render('userList',{"users":users})
    }
};

module.exports = mainController;