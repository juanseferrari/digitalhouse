// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// ************ Middleware ********************
const miPrimerMiddleware = require('../middlewares/helloWorld')

router.get('/',miPrimerMiddleware,mainController.index); 
router.get('/search', mainController.search); 

module.exports = router;
