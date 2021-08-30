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
    }
};

module.exports = mainController;