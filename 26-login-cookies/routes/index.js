var express = require('express');
var router = express.Router();


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

module.exports = router;
