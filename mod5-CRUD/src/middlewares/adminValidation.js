const fs = require('fs');

const admins = ["Greta", "Ada", "Vim", "Tim"]

function adminValidation (req,res,next){
    const usuarioActual = req.query.user;
    if(admins.includes(usuarioActual)){
        req.admin = usuarioActual
        next()
    } else {
        res.send('No tenes permiso para acceder')
    }

}

module.exports = adminValidation;