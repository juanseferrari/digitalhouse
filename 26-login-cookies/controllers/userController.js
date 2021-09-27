const fs = require('fs');
const { validationResult } = require("express-validator");
const { json } = require('express');
const bcrypt = require('bcrypt');


let userController = {
    login: (req,res) => {
        res.render('login')
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usersJson = fs.readFileSync('users.json', {errors: errors})
            let users;
            if (usersJson == ""){
                users = [];
            } else {
                users = JSON.parse(usersJson)
            }

            for (let i = 0; i < users.length; i++){
                if(users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password )){
                    console.log("Te pudiste loguear bien");
                    res.render('home', {user: users[i]} )           
                }
            }
            /** 
            if(usuarioALoguearse == undefined){
                 res.render('login', {errors: [
                    {msg: "Credenciales invalidas"}
                ]})
            }
            req.session.usuarioLogeado = usuarioALoguearse
            console.log("usuario logueado:" + req.session.usuarioLogeado)
            */
            res.send('logeo con error')
        
            
        } else {
            return res.render('login',{errors: errors.errors})
        }

    },
    edit: (req,res) => {
        res.render('editarProductos')
    },
    register: (req,res) => {
        res.render('register')
    },
    //CREAR UN NUEVO USUARIO
    create: (req,res) => {
        //console.log(req);
        let usuarioACrear = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10) 

        }
        console.log(usuarioACrear)
        let usersJson = fs.readFileSync('users.json')
        let usuarios;
        if (usersJson == ""){
            usuarios = [];
        } else {
            usuarios = JSON.parse(usersJson)
        }
        usuarios.push(usuarioACrear)
        usuariosJSON = JSON.stringify(usuarios);
        fs.writeFileSync('users.json', usuariosJSON);
        res.send('REGISTRO EXITOSO')

    }
}

module.exports = userController;