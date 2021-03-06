// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

// *********** Middlewares ***************
const adminValidation = require('../middlewares/adminValidation');
const userLogs = require('../middlewares/userLogs');

// MULTER
const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: (req,file,cb) => {
        // VAlidar el tamaño del archivo
        //if(file.size > 10 * 1000 * 1000){
        //    cb(new Error("Archivo demasiado grande"))}
        cb(null,Date.now() + file.originalname)
    }
})

const uploader = multer({
    storage
})

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/',userLogs ,productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create',adminValidation, productsController.create); 
router.post('/', uploader.single("imagen"), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id',userLogs ,productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',userLogs, productsController.edit); 
router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
