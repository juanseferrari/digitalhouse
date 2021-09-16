const fs = require('fs');

function userLogs (req,res,next){
    fs.appendFileSync('userLogs.txt', "El usuario ingresó a la ruta: " + req.originalUrl + "\r\n")
    next();
}

module.exports = userLogs