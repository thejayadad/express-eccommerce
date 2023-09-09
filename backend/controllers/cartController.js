
const Cart = require('../models/Cart');


exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    try {
      const existingCartItem = await Cart.findOne({ user: userId, product: productId });

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
        await existingCartItem.save();
      } else {
        await Cart.create({ user: userId, product: productId, quantity });
      }
      res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding item to cart' });
    }
  };
