var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

let guestMiddleware = require('../middlewares/guestMiddleware')
let authMiddleware = require('../middlewares/authMiddleware')


// -------- VALIDACIONES ---------------
const {check, body, validationResult} = require('express-validator')
let validation = [
  body('name').notEmpty().withMessage('Debes completar el name'),
  body('color').notEmpty().withMessage('Debes completar el color').isIn(["blue", "green", "red", "yellow"]).withMessage("El color no es uno de los disponibles"),
  body('email').notEmpty().withMessage('Debes completar el email').bail().isEmail().withMessage("email invalido"),
  body('age').notEmpty().withMessage('Debes completar el age')
]

function checkValidation(req,res, next){
  let errors = validationResult(req)
  if(errors.isEmpty()){
    next();
  } else {
    res.render('index', {errors: errors.array()})
    return
  }
}
//Se puede usar tambien el .mapped() para validar cada uno de los atributos del formulario
let loginValidation = [
  check('email').isEmail().withMessage('Debes ingresar un mail válido'),
  check('password').isLength({min: 4}).withMessage("Contraseña debe contener maximo 4 caracteres")
]

/* GET users listing. */
router.post('/', validation, checkValidation, function(req, res, next) {
  // Agregar que ese usuario queda en la cookie
  res.cookie("user", JSON.stringify(req.body))

  //renderizas
    res.render('welcome', {user: req.body});
});


//LOGIN
router.get('/login', userController.login);
router.post('/login',loginValidation, userController.processLogin);

router.get('/check', function(req,res){
  if(req.session.usuarioLogueado == undefined){
    res.send("no estas logueado")
  } else {
    res.send("El usuario logueado es: " + eq.session.usuarioLogueado.email)
  }
});

// REGISTER
router.get('/register', guestMiddleware ,userController.register);
router.post('/register' ,userController.create);



module.exports = router;
