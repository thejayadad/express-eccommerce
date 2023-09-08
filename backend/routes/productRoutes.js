
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const { verifyToken } = require('../middleware/verifyToken.js');


router.post('/', verifyToken, productController.createProduct);
router.get('/', productController.getProduct)
router.get('/:id', productController.getSingleProduct)
module.exports = router;
