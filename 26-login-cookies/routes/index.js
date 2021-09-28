var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')
var getUser = require('../middlewares/get-user')

let authMiddleware = require('../middlewares/authMiddleware')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pruebaSession', function(req,res){
  if(req.session.numeroVisitas == undefined) {
    req.session.numeroVisitas = 0
  }
  req.session.numeroVisitas++;
  res.send("La session tiene un numero: " + req.session.numeroVisitas)
})
router.get('/pruebaSession2', function(req,res){ 
  res.send("La session tiene un numero: " + req.session.numeroVisitas)
})

router.get('/editar', userController.edit)

router.get('/home',authMiddleware, getUser, function(req, res, next) {
  console.log("Estas en la home")
  console.log(req.session)

  res.render('home', { user: req.user});
});



module.exports = router;
