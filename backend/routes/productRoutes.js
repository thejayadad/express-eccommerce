
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/products', productController.getProducts);

module.exports = router;
