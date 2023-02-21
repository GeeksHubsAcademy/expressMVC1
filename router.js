
//Importo método router() de la clase express
const router = require('express').Router();


const ClientesRouter = require('./views/ClientesRouter');
const ProductosRouter = require('./views/ProductosRouter');

router.use('/clientes', ClientesRouter);
router.use('/productos', ProductosRouter);



module.exports = router;