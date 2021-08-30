const express = require('express');
const path = require('path');
const router = express.Router();
let mainController = require('../controllers/mainController.js')
 


router.get('/', mainController.home)

router.get('/about', mainController.about)

router.get('/login', mainController.login)

module.exports = router;
