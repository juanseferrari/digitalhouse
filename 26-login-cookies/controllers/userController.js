const fs = require('fs');
const { validationResult } = require("express-validator");
const { json } = require('express');
const bcrypt = require('bcryptjs');

const registerUser = require('../models/User')


let userController = {
    login: (req,res) => {
        res.render('login')
    },
    processLogin: (req,res) => {
        let userToLogin = registerUser.findbyField('email', req.body.email);

        if(userToLogin) {
            let isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if(isOkPassword){
                //Logueo Exitoso

                //guardar el usuario en session
                delete userToLogin.password
                req.session.usuarioLogueado = userToLogin
                //console.log(userToLogin)

                res.render('home', {user: req.session.usuarioLogueado} ) 
            }
            // Contraseña incorrecta
            return res.render('login', {errors: {
                email: {
                    msg: "Las credenciales son inválidas"
                }
            }
            })
            
        }

        // Mail no encontrado
        return res.render('login', {errors: {
            email: {
                msg: "No se encuentra este email en nuestra base de datos"
            }
        }
        })

    },
    edit: (req,res) => {
        res.render('editarProductos')
    },
    register: (req,res) => {

        res.render('register')
    },
    //CREAR UN NUEVO USUARIO
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
     
        if (resultValidation.isEmpty()) {
            let userInDB = registerUser.findbyField('email', req.body.email)

            if (userInDB) {
                let errorUserLogged = [{
                    msg: "Este mail ya esta registrado"
                    
                }]
                return res.redirect('register', {errors: errorUserLogged});
            }

            let usuarioACrear = {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10) 
            }
            console.log(usuarioACrear)

            let userCreated = registerUser.create(usuarioACrear)
            return res.redirect("/users/login")

        } else {
            return res.render('register', {errors:errors.errors})

        }
    },
    logout: (req,res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/home')
    }
}

module.exports = userController;