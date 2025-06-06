const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacientescontroller');

// Estas funciones deben existir
router.get('/', controller.index);
router.post('/nuevo', controller.create);

module.exports = router;