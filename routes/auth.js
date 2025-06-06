const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authcontroller');

router.get('/', (req, res) => res.render('login'));
router.post('/login', authcontroller.login);
router.get('/logout', authcontroller.logout);

module.exports = router;