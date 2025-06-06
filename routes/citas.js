const express = require('express');
const router = express.Router();
const controller = require('../controllers/citascontroller');

router.get('/', controller.index);
router.get('/nueva', controller.form);
router.post('/nueva', controller.create);


module.exports = router;