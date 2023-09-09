'use client'
import { useEffect, useState } from 'react';
import { getAllProducts } from '../utils/api.js';
import ProductItem from '../components/ProductItem.js'; // Import the ProductItem component

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getAllProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ProductList;
