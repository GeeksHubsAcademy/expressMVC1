
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const ProductsController = require('../controllers/ProductsController');

//CRUD

router.get('/', ProductsController.getAllProducts);



module.exports = router;