
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ];

  function getProducts(req, res) {
    res.json(products);
  }

  module.exports = {
    getProducts,
  };
