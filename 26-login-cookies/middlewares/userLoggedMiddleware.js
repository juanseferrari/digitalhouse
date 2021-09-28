const registerUser = require('../models/User')


function userLoggedMiddleware (req,res,next) {
    res.locals.isLogged = false

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = registerUser.findbyField('email', emailInCookie )

    if(userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }


    

    next()
}
module.exports = userLoggedMiddleware;