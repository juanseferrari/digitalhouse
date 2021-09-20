var express = require('express');
var router = express.Router();

const {body, validationResult} = require('express-validator')
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

/* GET users listing. */
router.post('/', validation, checkValidation, function(req, res, next) {
    res.render('welcome', {user: req.body});
});

module.exports = router;
