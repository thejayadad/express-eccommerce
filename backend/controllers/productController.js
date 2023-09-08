
const Product = require('../models/Product.js')
const {verifyToken} = require('../middleware/verifyToken.js')


exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating product' });
  }
};

exports.getProduct = async (req, res)=> {
  try {
    const getProduct = await Product.find(req.query)
    return res.status(200).json(getProduct)
  } catch (error) {
    res.status(501).json({ error: 'Error getting product' });

  }
}

exports.getSingleProduct = async (req, res)=> {
  try {
    const productId = req.params.id
    const product = await Product.findById(productId)
    if(!product){
      return res.status(500).json({msg: "No product with such id!"})
  }
  return res.status(200).json(product)
  } catch (error) {
    res.status(502).json({ error: 'Error getting single product' });

  }
}