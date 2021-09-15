function miPrimerMiddleware (req,res,next) {
    req.saludo = "hola"
    console.log("hola");
    next();
}

module.exports = miPrimerMiddleware