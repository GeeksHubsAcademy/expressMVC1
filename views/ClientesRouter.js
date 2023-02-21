
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const ClientsController = require('../controllers/ClientsController');

//CRUD

router.get('/', ClientsController.getAllClients);
router.get('/:name', ClientsController.getClientByName)
router.post('/', ClientsController.addClient); 



module.exports = router;