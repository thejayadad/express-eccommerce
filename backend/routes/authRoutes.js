
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController.js');

router.post('/register', userController.register);

router.post('/login', userController.login);

module.exports = router;
