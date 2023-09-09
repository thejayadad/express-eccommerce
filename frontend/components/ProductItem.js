'use client'
import { useState } from 'react';
import axios from 'axios';

const ProductItem = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/api/cart/add', { productId: product._id });

      if (response.status === 200) {
        setAddedToCart(true);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <img src={product.img} alt={product.title} />
      {!addedToCart ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <p>Added to Cart</p>
      )}
    </div>
  );
};

export default ProductItem;
