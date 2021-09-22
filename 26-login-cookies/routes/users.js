var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

const {check, body, validationResult} = require('express-validator')
let validation = [
  body('name').notEmpty().withMessage('Debes completar el name'),
  body('color').notEmpty().withMessage('Debes completar el color'),
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

let loginValidation = [
  check('email').isEmail(),
  check('password').isLength({min: 8}).withMessage("Contraseña debe contener maximo 8 caracteres")
]

/* GET users listing. */
router.post('/', validation, checkValidation, function(req, res, next) {
    res.render('welcome', {user: req.body});
});

router.get('/login', userController.login);

router.post('/login',loginValidation, userController.processLogin);


module.exports = router;
