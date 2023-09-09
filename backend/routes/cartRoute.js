// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const { addToCart } = require('../controllers/cartController.js');
const {verifyToken} = require('../middleware/verifyToken.js')

router.post('/add', verifyToken, addToCart);

module.exports = router;
