const { validationResult } = require("express-validator");

let userController = {
    login: (req,res) => {
        res.render('login')
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

        } else {
            return res.render('login',{errors: errors.errors})
        }

    }
}

module.exports = userController;