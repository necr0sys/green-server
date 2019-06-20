var express = require('express');
var router = express.Router();
const usrControlller = require('../controllers/user');

/* GET users listing. */
router.post('/registro', usrControlller.registro);
router.post('/login', usrControlller.login);

module.exports = router;
